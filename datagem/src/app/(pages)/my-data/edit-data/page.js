// imports

import ProductTabs from "@/app/ui/ProductTabs";

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-12 max-w-7xl gap-4">
        <div className="col col-span-12 bg-gray-200 p-5 m-4 rounded shadow">
          <h1 className="font-bold text-xl text-teal-900">Products</h1>
          <ProductTabs></ProductTabs>
        </div>
      </section>
    </>
  );
}
