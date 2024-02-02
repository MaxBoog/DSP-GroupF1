"use client";

import Select from "react-select";
import DelForm from "./formDelete";
import { useState, useEffect } from "react";
import { getProductInfo } from "./queries/products";
import { getProducts } from "./queries/products";

export default function DeleteProduct({ user }) {
  console.log("--2", user);
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
  const [deletedProduct, setDeleteProduct] = useState([]);

  const deleteProduct = (auth_options) => {
    setDeleteProduct(auth_options || []);
  };
  const del = deletedProduct;

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
    <>
      <Select
        // isMulti
        name="products"
        options={product_options}
        className="w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        onChange={deleteProduct}
      />
      <DelForm Product={del} user={user} />
    </>
  );
}
