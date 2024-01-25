import React from "react";

// Example JSON data
// const jsonData = [
//   {
//     productUri: "http://example.org/ontology#FiberglassInsulation",
//     productName: "Fiberglass Insulation",
//     productInfoUri: "http://example.org/ontology#FiberglassInsulationInfo",
//     emissions: 150,
//     energyConsumption: 600,
//     renewableEnergyUsage: 20,
//     materialEfficiency: "30% recycled glass",
//     lifecycle: "40 years, 70% recyclable",
//   },
//   {
//     productUri: "http://example.org/ontology#FoamInsulation",
//     productName: "Foam Insulation",
//     productInfoUri: "http://example.org/ontology#FoamInsulationInfo",
//     emissions: 100,
//     energyConsumption: 800,
//     renewableEnergyUsage: 15,
//     materialEfficiency: "Reduced VOC emissions",
//     lifecycle: "50 years, landfill disposal",
//   },
// ];

const info = await findInfo();
const parsedInfo = parsedInfo(info);

console.log(parsedInfo);

const MyTable = () => {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Product URI</th> */}
          <th>Product Name</th>
          {/* <th>Product Info URI</th> */}
          <th>Emissions</th>
          <th>Energy Consumption</th>
          <th>Renewable Energy Usage</th>
          <th>Material Efficiency</th>
          <th>Lifecycle</th>
        </tr>
      </thead>
      <tbody>
        {parsedInfo.map((item, index) => (
          <tr key={index}>
            {/* <td>{item.productUri}</td> */}
            <td>{item.productName}</td>
            {/* <td>{item.productInfoUri}</td> */}
            <td>{item.emissions}</td>
            <td>{item.energyConsumption}</td>
            <td>{item.renewableEnergyUsage}</td>
            <td>{item.materialEfficiency}</td>
            <td>{item.lifecycle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
