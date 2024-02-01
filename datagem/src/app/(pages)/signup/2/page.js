"use client";

// imports

import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import getAllCompanies from "./queries2And3/get_all_companies";
import RequestButton from "@/app/(pages)/signup/2/RequestButton";

const all_companies_fetch = async () => {
  try {
    const all_companies = await getAllCompanies();
    const company_options = all_companies.map((company) => ({
      value: company.companyName.value,
      label: company.companyName.value,
    }));
    return company_options;
    // Use company_options here 
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

export default function Page() {
  // get list of companies
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyOptions = await all_companies_fetch();
        setOptions(companyOptions);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, []);

  // authorize list of companies
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (auth_options) => {
    setSelectedOptions(auth_options || []);
  };

  const selectedValues = selectedOptions.map((option) => option.value);
  console.log(selectedValues);
  console.log(selectedOptions);

  return (
    <>
      <div className="grid grid-cols-3 w-36 justify-between">
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-pink-600 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-8 text-gray-200">
              Sign Up - step 2
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Which supplier data would you like to request?
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10">
              <div className="sm:col-span-10">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Company
                </label>
                <div className="mt-2">
                  <div className="grid grid-cols-2 max-w-7xl mx-auto">
                    <div className="col w-96">
                      <Select
                        isMulti
                        name="companies"
                        options={options}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        onChange={handleSelectChange}
                      />
                    </div>
                    <div className="col">
                      <RequestButton
                        selected_authorized={selectedOptions}
                      ></RequestButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/signup/1"
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            Back
          </Link>
        </div>
      </form>
    </>
  );
}
