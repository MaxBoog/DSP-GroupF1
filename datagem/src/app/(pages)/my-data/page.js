// imports

import RequestCard from "@/app/ui/RequestCard";
import { Button } from "flowbite-react";
import Link from "next/link";


import {getCompanies} from './query';

export default async function Page() {
  const companies = await getCompanies('apple');
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
        
        <div className="col col-span-4">
          <hr />
        </div>

        


        
  
      </section>
    </>
  );
}