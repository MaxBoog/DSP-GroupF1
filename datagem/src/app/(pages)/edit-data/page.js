// import

import { getServerSession } from "next-auth";

import DelEdit from "./DelEditForm.js";
// no problem


export default async function Page() {
  const session = await getServerSession();
  const user = session.user.name;
  // const session =  getServerSession();
  // const user = session.user;
  // console.log(user, 'user');

  // const editData( ,selectedInfoType)

  
  return (
    <>
      <form>
        <div className="sm:col-span-6">
          <div className="space-y-6">
            <div className="border-b border-gray-900/10 pb-12">
              <h1 className="text-base font-semibold leading-8 text-gray-200">
                Edit your data
              </h1>

              <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-200">
                Which product data would you like to edit?
              </h2>

              <div
                className="mt-1 grid grid-cols-2
             gap-x-6 gap-y-8 sm:grid-cols-1"
              >
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Products
                </label>
                <DelEdit user={user}/>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </form>
    </>
  );
}
