import axios from "axios";
import config from "./config";

const apiUrl = " http://localhost:7200/repositories/repo_niels/statements";
const headers = {
  "Content-Type": "application/sparql-update",
};

export async function insertCompanies(my_company_name) {
  config.my_company_name = my_company_name;
  console.log(
    "----------------------------------------------- ",
    config.my_company_name
  );

  const company_name = my_company_name;
  const prefix = "<http://example.org/ontology";

  //// company type ////
  const new_company_query = `PREFIX : <http://example.org/ontology#> 
  INSERT DATA { 
    :${company_name} a :Company ;
              :hasName "${company_name}" .
  }`;
  let encoded_query = encodeURIComponent(new_company_query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, new_company_query, { headers });
}

export async function addProduct(
  productName,
  emissions,
  energyConsumption,
  renewableEnergyUsage,
  efficiency,
  lifecycle
) {
  const new_query = `PREFIX : <http://example.org/ontology#> 
                INSERT DATA{
                  :${productName} a :Product ;
                      :hasName "${productName}";
                      :belongsToCompany: :${config.my_company_name} ;
                      :hasProductInfo :${productName}Info .
                  
                      :${productName} a :${productName}Info;
                      :emissions ${emissions} ;
                      :energyConsumption  ${energyConsumption};
                      :renewableEnergyUsage ${renewableEnergyUsage};
                      :materialEfficiency "${efficiency}" ;
                      :lifecycle "${lifecycle}".
                  
                    :${my_company_name} :hasProduct :${productName}.
                    }
                    `;

  console.log(new_query);
  let encoded_query = encodeURIComponent(new_query);
  const url = `${apiUrl}?update=${encoded_query}`;

  const response = await axios.post(url, new_query, { headers });
}
