"use client";

import { useState, useEffect } from "react";
import { addData } from "../(pages)/my-data/add-data/editData";
import Link from "next/link";

function refreshPage() {
  window.location.reload();
}

const AddProductForm = () => {
  // State variable to store the input value

  const [productName, setProductName] = useState("");
  const [emissions, setEmissions] = useState("");
  const [energyConsumption, setEnergyConsumption] = useState("");
  const [renewableEnergy, setRenewableEnergy] = useState("");
  const [materialEfficiency, setMaterialEfficiency] = useState("");
  const [lifeCycle, setLifeCycle] = useState("");

  //   const [companyNameInput, setcompanyNameInput] = useState("");

  // State variable to track the current input value
  //   const [inputValue, setInputValue] = useState("");
  const [trackProductName, setTrackProductName] = useState("");
  const [trackEmissions, setTrackEmissions] = useState("");
  const [trackEnergyConsumption, SetTrackEnergyConsumption] = useState("");
  const [trackRenewableEnergy, setTrackRenewableEnergy] = useState("");
  const [trackMaterialEfficiency, setTrackMaterialEfficiency] = useState("");
  const [trackLifeCycle, setTrackLifeCycle] = useState("");

  // Function to handle changes in the textbox
  const handleProductInputChange = (e) => {
    setTrackProductName(e.target.value);
  };
  const handleEmissionsInputChange = (e) => {
    setTrackEmissions(e.target.value);
  };
  const handleEnergyConsumptionInputchange = (e) => {
    SetTrackEnergyConsumption(e.target.value);
  };
  const handleRenewableEnergyInputChange = (e) => {
    setTrackRenewableEnergy(e.target.value);
  };
  const handleMaterialEfficiencyInputChange = (e) => {
    setTrackMaterialEfficiency(e.target.value);
  };
  const handleLifeCycleInputChange = (e) => {
    setTrackLifeCycle(e.target.value);
  };

  // Function to handle the button click and store the input text in a variable
  //   const handleButtonClick = () => {
  //     // Update the companyNameInput variable with the current input value
  //     setcompanyNameInput(inputValue);
  //   };
  const handleButtonClick = () => {
    // Update the companyNameInput variable with the current input value
    setProductName(trackProductName);
    setEmissions(trackEmissions);
    setEnergyConsumption(trackEnergyConsumption);
    setRenewableEnergy(trackRenewableEnergy);
    setMaterialEfficiency(trackMaterialEfficiency);
    setLifeCycle(trackLifeCycle);
    // refreshPage();
  };

  // useEffect to log the companyNameInput value when it changes
  //   useEffect(() => {
  //     insertCompanies(companyNameInput);
  //   }, [companyNameInput]);
  useEffect(() => {
    addData(
      productName,
      emissions,
      energyConsumption,
      renewableEnergy,
      materialEfficiency,
      lifeCycle
    );
  }, [
    productName,
    emissions,
    energyConsumption,
    renewableEnergy,
    materialEfficiency,
    lifeCycle,
  ]);

  //   useEffect(() => {
  //     insertEmissions(emissions);
  //   }, [emissions]);

  //   useEffect(() => {
  //     insertEnergyConsumption(energyConsumption);
  //   }, [energyConsumption]);

  //   useEffect(() => {
  //     insertRenewableEnergy(renewableEnergy);
  //   }, [renewableEnergy]);

  //   useEffect(() => {
  //     insertMaterialEfficiency(materialEfficiency);
  //   }, [materialEfficiency]);

  //   useEffect(() => {
  //     insertLifeCycle(lifeCycle);
  //   }, [lifeCycle]);

  return (
    <div className="my-5 rounded">
      <div className="grid grid-cols-1 sm:grid-cols-6 max-w-7xl mx-auto px-4">
        <div className="col col-span-1 max-w-">
          {/* product name */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackProductName}
            onChange={handleProductInputChange}
            placeholder="Your product"
          />
        </div>
        <div className="col col-span-1">
          {/* emisions */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackEmissions}
            onChange={handleEmissionsInputChange}
            placeholder="Your emissions"
          />
        </div>
        <div className="col col-span-1">
          {/* energy consumption */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackEnergyConsumption}
            onChange={handleEnergyConsumptionInputchange}
            placeholder="Your energy consumption"
          />
        </div>
        <div className="col-span-1">
          {/* renewable energy usage */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackRenewableEnergy}
            onChange={handleRenewableEnergyInputChange}
            placeholder="Your renewable energy usage"
          />
        </div>
        <div className="col-span-1">
          {/* material efficiency */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackMaterialEfficiency}
            onChange={handleMaterialEfficiencyInputChange}
            placeholder="Your material efficiency"
          />
        </div>
        <div className="col-span-1">
          {/* lifecycle */}
          <input
            className="rounded text-gray-900 max-w-48"
            type="text"
            value={trackLifeCycle}
            onChange={handleLifeCycleInputChange}
            placeholder="Your lifecycle"
          />
        </div>
        <div className="col col-span-1 my-3">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleButtonClick}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
