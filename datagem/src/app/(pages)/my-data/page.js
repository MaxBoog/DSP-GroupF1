// imports

import React from "react";

import { Button } from "flowbite-react";
import Link from "next/link";
import config from "../signup/1/config";

import { MyTable, MydataTable } from "./queries/table";
import { getProducts } from "./queries/query_product";
import {
  findInfo,
  myInfo,
  parseInfo,
  parseMyInfo,
} from "./queries/GetAssociatesProduct";

import CompanyName from "@/app/ui/CompanyName";
import AddProductForm from "@/app/ui/AddProductForm";

// const info = await findInfo();

export default async function Page() {
  console.log('------------------------', config.my_company_name)
  const info = await findInfo();
  const theParsedInfo = await parseInfo(info);

  const myInfoP = await myInfo();
  const myParsedInfo = await parseMyInfo(myInfoP);

  // console.log(theParsedInfo);

  // const current_company = loc alStorage.getItem();
  return (
    <>
      <h1 className="bg-indigo-800 text-gray-100 p-5 font-bold">
        Welcome,{" "}
        <span className="text-pink-600">
          <CompanyName />
        </span>
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 max-w-7xl mx-auto h-full w-ful text-gray-200">
        <div className="col col-span-3">
          <h1>{config.my_company_name}</h1>
          <p className="text-gray-600 p-3 my-3 bg-gray-100 rounded-md border-gray-50">
            Here you can view your data, edit it and publish it to all your
            approved linked associates.
          </p>
        </div>
        <div className="col-span-1">
          <Link href="../edit-data">
            <Button className=" p-1.5 justify-self-end bg-pink-700 my-3">
              Edit Data
            </Button>
          </Link>
        </div>

        {/* Input formulier */}
        <div className="col col-span-4">
          <MyTable data={theParsedInfo} />
        </div>
        <div className="col col-span-4">
          <hr />
        </div>
        {/* Input formulier */}
        <div className="col col-span-4">
          <MydataTable data={myParsedInfo} />
        </div>
        <div className="col col-span-4">
          <hr />
        </div>

        {/* <input
          type="text"
          className="form-input px-4 py-3 rounded text-gray-900"
        /> */}
      </section>
      <AddProductForm />
    </>
  );
}
