"use client";

import Select from "react-select";
import Form from "./edit-data-form";
import { useState, useEffect } from "react";
import { getProducts, getProductInfo } from "./queries/products";

export default function EditData({ user }) {
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

  const productInfoOptions = getProductInfo();

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

  return (
    <form className="grid grid-cols-12 w-full gap-4">
      <label
        htmlFor="company"
        className="col-span-12 block text-sm font-medium leading-6 text-gray-200"
      >
        Products
      </label>

      <Select
        // isMulti
        name="products"
        options={product_options}
        className="col-span-6 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        onChange={handleSelectChangeProduct}
      />

      <Select
        // isMulti
        name="products"
        options={productInfoOptions}
        className="col-span-6 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        onChange={handleSelectChangeInfo}
      />

      <div className="col-span-12">
        <Form product={product.value} info={info.value} />
      </div>
    </form>
  );
}
