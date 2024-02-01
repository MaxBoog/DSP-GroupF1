// imports

import Link from "next/link";
import RequestButton from "@/app/(pages)/signup/2/RequestButton";
import SelectCompanies from "./SelectCompanies";
import { getServerSession } from "next-auth";

export default async function Page() {
  // get list of companies
  const session = await getServerSession();
  const user = session.user.name;
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
                  <div className="grid  max-w-7xl mx-auto w-full">
                    <div className="col ">
                      <SelectCompanies user={user} />
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
