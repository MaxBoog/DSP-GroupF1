"use client";

import Form from "@/app/(pages)/edit-data/edit-data-form.js";
import DelForm from "@/app/(pages)/edit-data/formDelete.js";
import { editData } from "./queries/editData.js";
import { getProducts, getProductInfo } from "./queries/products.js";

import { useEffect, useState } from "react";
// import Link from "next/link";
import Select from "react-select";
// import RequestButton from "@/app/(pages)/signup/2/RequestButton.js";

const DelEdit = ({ user }) => {
  //   console.log(user, "2");
  const productInfoOptions = getProductInfo();
  // console.log(productInfoOptions, 'thisone')
  // console.log(products, "here they are");

  const all_products_fetch = async () => {
    try {
      const all_products = await getProducts(user);
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
  console.log(del.value, "_______________________________________deleted");

  return (
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
            <Form product={product} info={info} />
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
            <DelForm Product={del} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelEdit;
