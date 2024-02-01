import axios from "axios";
// import { companyNameInput } from "@/app/ui/Form";
// import config from "./config";

// const my_name = "CompanyA";
const apiUrl = "http://localhost:7200/repositories/repo_niels/statements";
const headers = {
  "Content-Type": "application/sparql-update",
};

export async function addData(
  productName,
  emissions,
  energyConsumption,
  renewableEnergyUsage,
  materialEfficiency,
  lifecycle,
  user
) {
  const product_name = productName;
  const my_emissions = emissions;
  const my_energyConsumption = energyConsumption;
  const my_renewableEnergyUsage = renewableEnergyUsage;
  const my_materialEfficiency = materialEfficiency;
  const my_lifecycle = lifecycle;
  const company_name = user;
  console.log(company_name);

  // const apiUrl = process.env.INSERT_API;
  const query = `PREFIX : <http://example.org/ontology#>
    INSERT DATA { 
      
        :${product_name} a :Product ;
            :hasName "${product_name}" ;
            :belongsToCompany :${company_name} ;  # Assuming it belongs to CompanyX
            :hasProductInfo :${product_name}Info .
    
        :${product_name}Info a :ProductInfo ;
            :emissions "${my_emissions}"^^xsd:double ;      # Example emissions value
            :energyConsumption "${my_energyConsumption}"^^xsd:double ;  # Example energy consumption value
            :renewableEnergyUsage "${my_renewableEnergyUsage}"^^xsd:double ;  # Example renewable energy usage
            :materialEfficiency "${my_materialEfficiency}" ;  # Example material efficiency
            :lifecycle "${my_lifecycle}" .  # Example lifecycle

        :${company_name} :hasProduct :${product_name} .
    }
    `;
  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}

export async function deleteData(productName, user) {
  // const apiUrl = process.env.INSERT_API;
  const my_productName = productName.value;
  // console.log("---------------");
  // console.log(my_productName);
  // console.log(my_name);
  // console.log("---------------");
  console.log(user,"check_____________________________________________________________________");

  const query = `PREFIX : <http://example.org/ontology#>

  DELETE WHERE { 
    :${user} :hasProduct :${my_productName}.
    :${my_productName} a :Product ;
               :belongsToCompany :${user} ;
               :hasName ?name ;
               :hasProductInfo ?productInfo.
  
    ?productInfo a :ProductInfo ;
                 :emissions ?emissions ;
                 :energyConsumption ?energyConsumption ;
                 :renewableEnergyUsage ?renewableEnergyUsage ;
                 :materialEfficiency ?materialEfficiency ;
                 :lifecycle ?lifecycle.
  }`;

  console.log(query);
  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}

export async function editData(productName, newValue) {
  // const apiUrl = process.env.INSERT_API;
  console.log('check editData')
  const my_productName = productName.product;
  const my_dataType = productName.info;
  const my_newValue = newValue;

  const query = `PREFIX : <http://example.org/ontology#>
                PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

  DELETE {
    :${my_productName}Info :${my_dataType} ?oldvalue .
  } 
  INSERT {
    :${my_productName}Info :${my_dataType} "${my_newValue}"^^xsd:decimal .
  }
  WHERE {
    :${my_productName}Info :${my_dataType} ?oldvalue .
  }
      `;

  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}
