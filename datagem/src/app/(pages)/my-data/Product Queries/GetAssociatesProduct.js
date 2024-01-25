// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from "axios";

const apiUrl = "http://localhost:7200/repositories/DataGemDeluxe";
const my_name = "CompanyA";

export async function findProduct() {
  let productQuery = `PREFIX : <http://example.org/ontology#>

                      SELECT ?product ?productName
                      WHERE {
                        ?product a :Product ;
                                :belongsToCompany :${my_name} ;
                                :hasName ?productName .
    }`;

  let encoded_query = encodeURIComponent(productQuery);

  const url = `${apiUrl}?query=${encoded_query}`;
  console.log(url);
  console.log(encoded_query);
  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}

export async function findInfo() {
  let productQuery = `PREFIX : <http://example.org/ontology#>

  SELECT ?product ?productName ?productInfo ?emissions ?energyConsumption ?renewableEnergyUsage ?materialEfficiency ?lifecycle ?company
  WHERE {

	:${my_name} :canAccessDataOf ?company.
#    
    ?product a :Product ;
             :belongsToCompany ?company ;
             :hasName ?productName ;
             :hasProductInfo ?productInfo .
#    
    ?productInfo :emissions ?emissions ;
                 :energyConsumption ?energyConsumption ;
                 :renewableEnergyUsage ?renewableEnergyUsage ;
                 :materialEfficiency ?materialEfficiency ;
                 :lifecycle ?lifecycle .
  }`;

  let encoded_query = encodeURIComponent(productQuery);

  const url = `${apiUrl}?query=${encoded_query}`;
  console.log(url);
  console.log(encoded_query);
  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}

export async function parseInfo(responseData) {
  const parsedProducts = responseData.map((item) => {
    return {
      productUri: item.product.value,
      productName: item.productName.value,
      productInfoUri: item.productInfo.value,
      emissions: parseFloat(item.emissions.value),
      energyConsumption: parseFloat(item.energyConsumption.value),
      renewableEnergyUsage: parseFloat(item.renewableEnergyUsage.value),
      materialEfficiency: item.materialEfficiency.value,
      lifecycle: item.lifecycle.value,
    };
  });

  return parsedProducts;
}
