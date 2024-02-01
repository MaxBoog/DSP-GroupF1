// imports

import Form from "@/app/ui/Form";
import Link from "next/link";
import { insertCompanies } from "./queries/insert_query";
import { getServerSession } from "next-auth";
import ConfirmButton from "@/app/ui/ConfirmButton";

export default async function Page() {
  const session = await getServerSession();
  const user = session.user.name;

  return (
    <>
      <div className="grid grid-cols-3 w-36 justify-between">
        <div className="col">
          <div className="h-5 w-5 bg-pink-600 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="col">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-8 text-gray-200">
              Sign Up - step 1
            </h1>
            <div className="grid grid-cols-1 max-w-7xl w-auto gap-y-3">
              <div className="col">
                <h2 className="text-white font-bold my-3">Registration</h2>
              </div>
              {/* <div className="col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                ></label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Email Address..."
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                ></label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              <div className="col">
                <hr />
                <h1 className="text-gray-100 py-3">
                  Hi {user}. Verify your company to create your network{" "}
                </h1>
                <input
                  type="text"
                  disabled
                  className="rounded text-gray-900"
                  placeholder={user}
                ></input>
                <ConfirmButton user={user} />
                {/* <Form /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            Back
          </Link>
        </div>
      </form>
    </>
  );
}
