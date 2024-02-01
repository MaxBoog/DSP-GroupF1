// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from "axios";

const apiUrl = "http://localhost:7200/repositories/repo_niels";
const prefix = "<http://example.org/ontology#";

// const company_name = "CompanyA"; //dit moet dynamisch worden uit de functie

export async function getProducts(user) {
  // const apiUrl = process.env.GET_API;


  let new_query = `PREFIX : <http://example.org/ontology#>

  SELECT ?products ?productName
  WHERE { 
    :${user} :hasProduct ?products.
      ?products :hasName ?productName
  }
  `;

  let encoded_query = encodeURIComponent(new_query);

  const url = `${apiUrl}?query=${encoded_query}`;

  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });


  return response.data.results.bindings;
}


export function getProductInfo() {
  const emissions = "emissions";
  const energyConsumption = "energyConsumption";
  const renewableEnergyUsage = "renewableEnergyUsage";
  const materialEfficiency = "aterialEfficiency";
  const lifecycle = "lifecycle";

  const productInfoOptions = [
    {value: emissions, label: emissions},
    {value: energyConsumption, label: energyConsumption},
    {value: renewableEnergyUsage, label: renewableEnergyUsage},
    {value: materialEfficiency, label: materialEfficiency},
    {value: lifecycle, label: lifecycle}
  ]

  return productInfoOptions;
}


