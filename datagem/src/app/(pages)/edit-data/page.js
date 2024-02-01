"use client";

// imports

import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import RequestButton from "@/app/(pages)/signup/2/RequestButton.js";
import { getProducts, getProductInfo } from "./queries/products.js";
import { editData } from "./queries/editData.js";
import Form from "@/app/(pages)/edit-data/edit-data-form.js";
import DelForm from "@/app/(pages)/edit-data/formDelete.js";

const all_products_fetch = async () => {
  try {
    const all_products = await getProducts();
    // hier nog invullen wat we terugkrijgen uit de query
    const product_options = all_products.map((product) => ({
      value: product.productName.value,
      label: product.productName.value,
    }));
    return product_options;
    // Use company_options here
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

const productInfoOptions = getProductInfo();
export default function Page() {
  // get list of companies
  const [product_options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productOptions = await all_products_fetch();
        setOptions(productOptions);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, []);

  // authorize list of companies
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleSelectChangeProduct = (auth_options) => {
    setSelectedProduct(auth_options || []);
  };

  const [selectedInfo, setSelectedInfo] = useState([]);

  const handleSelectChangeInfo = (auth_options) => {
    setSelectedInfo(auth_options || []);
  };

  const product = selectedProduct;
  const info = selectedInfo;

  const [deletedProduct, setDeleteProduct] = useState([]);

  const deleteProduct = (auth_options) => {
    setDeleteProduct(auth_options || []);
  };
  const del = deletedProduct;
  console.log(del.value, "_____________________________________________");

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
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto">
                    <div className="col w-">
                      <Select
                        // isMulti
                        name="products"
                        options={product_options}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        onChange={handleSelectChangeProduct}
                      />
                      <Select
                        // isMulti
                        name="products"
                        options={productInfoOptions}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        onChange={handleSelectChangeInfo}
                      />
                      {/* </div> */}
                      <div className="col">
                        <hr />
                        <Form product={product.value} info={info.value} />
                      </div>
                    </div>
                    <div className="col w-ful">
                      <Select
                        // isMulti
                        name="products"
                        options={product_options}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        onChange={deleteProduct}
                      />
                      {/* </div> */}
                      <div className="col2">
                        <hr />
                        <DelForm Product={del} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </form>
    </>
  );
}
