// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from "axios";
// import config from "../../signup/1/config";
import { getServerSession } from "next-auth";

// const apiUrl = process.env.GET_API;
const apiUrl = "http://localhost:7200/repositories/repo_niels";
const my_name = "CompanyA";
// console.log(my_name, "___________________________");

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
  // console.log(url);
  // console.log(encoded_query);
  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}

export async function findInfo(user) {
  const company_name = encodeURIComponent(user.user);
  // console.log("-------", user.user);
  let productQuery = `PREFIX : <http://example.org/ontology#>

  SELECT ?product ?productName ?productInfo ?emissions ?energyConsumption ?renewableEnergyUsage ?materialEfficiency ?lifecycle ?company ?name
  WHERE {

	:${company_name} :canAccessDataOf ?company.
    
    ?product a :Product ;
             :belongsToCompany ?company ;
             :hasName ?productName ;
             :hasProductInfo ?productInfo .
  
  ?company :hasName ?name .

    ?productInfo :emissions ?emissions ;
                 :energyConsumption ?energyConsumption ;
                 :renewableEnergyUsage ?renewableEnergyUsage ;
                 :materialEfficiency ?materialEfficiency ;
                 :lifecycle ?lifecycle .
  }`;

  let encoded_query = encodeURIComponent(productQuery);

  const url = `${apiUrl}?query=${encoded_query}`;
  // console.log(url);
  // console.log(encoded_query);
  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}

export async function myInfo(user) {
  const company_name = encodeURIComponent(user.user);
  // console.log(user.user);

  let productQuery = `PREFIX : <http://example.org/ontology#>
  

  SELECT ?product ?productName ?productInfo ?emissions ?energyConsumption ?renewableEnergyUsage ?materialEfficiency ?lifecycle ?company ?name
  WHERE {

    ?product a :Product ;
             :belongsToCompany :${company_name} ;
             :hasName ?productName ;
             :hasProductInfo ?productInfo .


    ?productInfo a :ProductInfo;
                  :emissions ?emissions ;
                  :energyConsumption ?energyConsumption ;
                  :renewableEnergyUsage ?renewableEnergyUsage ;
                  :materialEfficiency ?materialEfficiency ;
                  :lifecycle ?lifecycle .
  }`;

  let encoded_query = encodeURIComponent(productQuery);

  const url = `${apiUrl}?query=${encoded_query}`;
  // console.log(url);
  // console.log(encoded_query);s
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
      companyName: item.name.value,
    };
  });

  return parsedProducts;
}

export async function parseMyInfo(responseData) {
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
