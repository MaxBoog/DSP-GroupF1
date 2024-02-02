// imports

import EditData from "./EditData.js";
import DeleteProduct from "./DeleteProduct.js";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
  const user = session.user.name;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 max-w-7xl mx-auto m-10">
        <div className="col-span-6">
          <h2 className="text-base font-semibold leading-7 text-gray-200">
            Which product data would you like to edit?
          </h2>

          <EditData user={user} />
        </div>
        <div className="col-span-6">
          <h2 className="text-base font-semibold leading-7 text-gray-200">
            Which product data would you like to{" "}
            <span className="text-red-500">delete</span>?
          </h2>

          <form className="grid grid-cols-12 w-full gap-4">
            <label
              htmlFor="company"
              className="col-span-12 block text-sm font-medium leading-6 text-gray-200"
            >
              Products
            </label>
            <div className="col-span-12">
              <DeleteProduct user={user} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
