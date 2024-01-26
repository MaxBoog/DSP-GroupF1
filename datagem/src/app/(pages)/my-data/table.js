// Example JSON data
const jsonData = [
  {
    productUri: "http://example.org/ontology#FiberglassInsulation",
    productName: "Fiberglass Insulation",
    productInfoUri: "http://example.org/ontology#FiberglassInsulationInfo",
    emissions: 150,
    energyConsumption: 600,
    renewableEnergyUsage: 20,
    materialEfficiency: "30% recycled glass",
    lifecycle: "40 years, 70% recyclable",
  },
  {
    productUri: "http://example.org/ontology#FoamInsulation",
    productName: "Foam Insulation",
    productInfoUri: "http://example.org/ontology#FoamInsulationInfo",
    emissions: 100,
    energyConsumption: 800,
    renewableEnergyUsage: 15,
    materialEfficiency: "Reduced VOC emissions",
    lifecycle: "50 years, landfill disposal",
  },
];

// const info = await findInfo();
// const parsedInfo = await parsedInfo(info);

// console.log(parsedInfo);

const MyTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="table-fixed w-full text-sm text-left text-gray-100">
        <thead className="">
          <tr>
            {/* <th>Product URI</th> */}
            <th>Product Name</th>
            {/* <th>Product Info URI</th> */}
            <th>Emissions</th>
            <th>Energy Consumption</th>
            <th>Renewable Energy Usage</th>
            <th>Material Efficiency</th>
            <th>Lifecycle</th>
            <th>Belongs To Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.productInfoUri}>
              {/* <td>{item.productUri}</td> */}
              <td>{item.productName}</td>
              {/* <td>{item.productInfoUri}</td> */}
              <td>{item.emissions}</td>
              <td>{item.energyConsumption}</td>
              <td>{item.renewableEnergyUsage}</td>
              <td>{item.materialEfficiency}</td>
              <td>{item.lifecycle}</td>
              <td>{item.companyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
