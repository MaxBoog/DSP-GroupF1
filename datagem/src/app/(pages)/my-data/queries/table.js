const MyTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <h1 className="font-bold my-5">Linked Associates Data</h1>
      <table className="table-fixed w-full text-sm text-left text-gray-900 bg-white rounded p-4">
        <thead className="uppercase text-sm">
          <tr>
            {/* <th>Product URI</th> */}
            <th className="p-3">Product Name</th>
            {/* <th>Product Info URI</th> */}
            <th className="p-3">Emissions (tonnes C02)</th>
            <th className="p-3">Energy Consumption (MJ)</th>
            <th className="p-3">Renewable Energy Usage (%)</th>
            <th className="p-3">Material Efficiency</th>
            <th className="p-3">Lifecycle</th>
            <th className="p-3">Belongs To Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.productInfoUri} className="px-4">
              {/* <td>{item.productUri}</td> */}
              <td className="p-3 italic">{item.productName}</td>
              {/* <td>{item.productInfoUri}</td> */}
              <td className="p-3">{item.emissions}</td>
              <td className="p-3">{item.energyConsumption}</td>
              <td className="p-3">{item.renewableEnergyUsage}</td>
              <td className="p-3">{item.materialEfficiency}</td>
              <td className="p-3">{item.lifecycle}</td>
              <td className="p-3 text-pink-600 font-bold">
                {item.companyName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { MyTable };

const MydataTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <h1 className="font-bold my-5">Your Data</h1>
      <table className="table-fixed w-full text-sm text-left text-gray-900 bg-white rounded p-4">
        <thead className="uppercase text-sm">
          <tr>
            {/* <th>Product URI</th> */}
            <th className="p-3">Product Name</th>
            {/* <th>Product Info URI</th> */}
            <th className="p-3">Emissions (tonnes C02)</th>
            <th className="p-3">Energy Consumption (MJ)</th>
            <th className="p-3">Renewable Energy Usage (%)</th>
            <th className="p-3">Material Efficiency</th>
            <th className="p-3">Lifecycle</th>
            {/* <th className="p-3">Belongs To Company</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.productInfoUri} className="px-4">
              {/* <td>{item.productUri}</td> */}
              <td className="p-3 italic">{item.productName}</td>
              {/* <td>{item.productInfoUri}</td> */}
              <td className="p-3">{item.emissions}</td>
              <td className="p-3">{item.energyConsumption}</td>
              <td className="p-3">{item.renewableEnergyUsage}</td>
              <td className="p-3">{item.materialEfficiency}</td>
              <td className="p-3">{item.lifecycle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { MydataTable };
