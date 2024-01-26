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
      <table className="table-fixed w-full text-sm text-left text-gray-900 bg-white rounded p-4">
        <thead className="uppercase text-sm">
          <tr>
            {/* <th>Product URI</th> */}
            <th className="p-3">Product Name</th>
            {/* <th>Product Info URI</th> */}
            <th className="p-3">Emissions</th>
            <th className="p-3">Energy Consumption</th>
            <th className="p-3">Renewable Energy Usage</th>
            <th className="p-3">Material Efficiency</th>
            <th className="p-3">Lifecycle</th>
            <th className="p-3">Belongs To Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.productInfoUri} className="px-4">
              {/* <td>{item.productUri}</td> */}
              <td className="p-3">{item.productName}</td>
              {/* <td>{item.productInfoUri}</td> */}
              <td className="p-3">{item.emissions}</td>
              <td className="p-3">{item.energyConsumption}</td>
              <td className="p-3">{item.renewableEnergyUsage}</td>
              <td className="p-3">{item.materialEfficiency}</td>
              <td className="p-3">{item.lifecycle}</td>
              <td className="p-3 text-teal-900 font-bold">
                {item.companyName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
