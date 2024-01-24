// imports

import RequestCard from "@/app/ui/RequestCard";
import { Button } from "flowbite-react";
import Link from "next/link";
import Form from "@/app/ui/Form";

import { getCompanies } from "./insert_query";

export default async function Page() {
  const companies = await getCompanies();
  console.log(companies);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 max-w-7xl mx-auto h-full w-ful text-gray-200">
        <div className="col col-span-3">
          <p className="text-gray-600 p-3 my-3 bg-gray-100 rounded-md border-gray-50">
            Here you can view your data, edit it and publish it to all your
            approved linked associates.
          </p>
        </div>
        <div className="col-span-1">
          <Link href="/my-data/edit-data">
            <Button className=" p-1.5 justify-self-end bg-pink-700 my-3">
              Edit Data
            </Button>
          </Link>
        </div>

        <Form />

        {/* website laad, voer meteen query uit (query_direct.js) om alle bedrijven in te laden in een dropdown menu
        Dan heb je 2 drop down knoppen. 1 knop om het bedrijf te selecteren en 1 knop om het product te selecteren
        je klikt op companyA en product1 en dan moet query_product die twee waardes ontvangen als parameter dus:
        
        import query_direct
        getCompanies(CompanyA, product1)

        
        */}

        <div className="col col-span-4">
          <hr />
        </div>

        <input
          type="text"
          className="form-input px-4 py-3 rounded text-gray-900"
        />

        {/* <div className="col col-span-4">
          <hr />
          {companies.map(function ({ company }) {
            <h1>{company.nameCompany.value}.</h1>;
          })}
        </div> */}
        {/* {companies.map(({ company }) => (
          <h1>{company.nameCompany.value}</h1>
        ))} */}
        {/* {companies.map((company) => (
          <div>{company.nameCompany.value}</div>
        ))} */}
      </section>
    </>
  );
}
