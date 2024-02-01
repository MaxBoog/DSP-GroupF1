// imports

import SelectAuthorizedCompanies from "./SelectAuthorizedCompanies";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
  const user = session.user.name;
  return (
    <>
      <div className="grid grid-cols-3 w-36 justify-between">
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-pink-600 rounded-full"></div>
        </div>
      </div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-8 text-gray-200">
              Sign Up - step 3
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Which partners would you like to provide access to your data?
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
                  <div className="grid grid-cols-1 max-w-7xl mx-auto">
                    <div className="col">
                      <SelectAuthorizedCompanies user={user} />
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
          <Link
            href="/signup/3"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next step
          </Link>
        </div>
      </form>
    </>
  );
}
