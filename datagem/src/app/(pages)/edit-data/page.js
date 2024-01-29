// imports
import FormChangeProduct from "@/app/ui/FormChangeProduct";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-8 text-gray-200">
              Sign Up - step 1
            </h1>
            <div className="grid grid-cols-1 max-w-7xl w-auto gap-y-3">
              <div className="col">
                <h2 className="text-white font-bold my-3">Input product</h2>
              </div>
              <div className="col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                ></label>
              </div>

              <div className="col">
                <hr />
                <FormChangeProduct />
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