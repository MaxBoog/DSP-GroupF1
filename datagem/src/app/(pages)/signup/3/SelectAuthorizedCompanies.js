"use client";

import AuthorizeButton from "./AuthorizeButton";
import { useEffect, useState } from "react";
import Select from "react-select";
import getAllCompanies from "../2/queries2And3/get_all_companies";

const all_companies_fetch = async (user) => {
  try {
    const all_companies = await getAllCompanies({ user });
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
export default function SelectAuthorizedCompanies({ user }) {
  const userName = user;
  // get list of companies
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyOptions = await all_companies_fetch(user);
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
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col col-span-8">
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
        <div className="col col-span-4">
          <AuthorizeButton selected_authorized={selectedOptions} user={userName} />
        </div>
      </div>
    </>
  );
}
