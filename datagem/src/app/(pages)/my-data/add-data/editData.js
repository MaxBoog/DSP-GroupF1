import axios from "axios";
import { companyNameInput } from "@/app/ui/Form";
// import config from "./config";

const my_name = "CompanyA";
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
  lifecycle
) {
  const product_name = productName;
  const my_emissions = emissions;
  const my_energyConsumption = energyConsumption;
  const my_renewableEnergyUsage = renewableEnergyUsage;
  const my_materialEfficiency = materialEfficiency;
  const my_lifecycle = lifecycle;

  // const apiUrl = process.env.INSERT_API;
  const query = `PREFIX : <http://example.org/ontology#>
    INSERT DATA { 
      
        :${product_name} a :Product ;
            :hasName "${product_name}" ;
            :belongsToCompany :${my_name} ;  # Assuming it belongs to CompanyX
            :hasProductInfo :${product_name}Info .
    
        :${product_name}Info a :ProductInfo ;
            :emissions "${my_emissions}"^^xsd:double ;      # Example emissions value
            :energyConsumption "${my_energyConsumption}"^^xsd:double ;  # Example energy consumption value
            :renewableEnergyUsage "${my_renewableEnergyUsage}"^^xsd:double ;  # Example renewable energy usage
            :materialEfficiency "${my_materialEfficiency}" ;  # Example material efficiency
            :lifecycle "${my_lifecycle}" .  # Example lifecycle

        :${my_name} :hasProduct :${product_name} .
    }
    `;
  console.log(query);
  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}

export async function deleteData(
  productName
  //   emissions,
  //   energyConsumption,
  //   renewableEnergyUsage,
  //   materialEfficiency,
  //   lifecycle
) {
  // const apiUrl = process.env.INSERT_API;
  const query = `PREFIX : <http://example.org/ontology#>
      DELETE DATA { 
        :${my_name} :hasProduct :${productName}.

        :${productName} a :Product ;
           :belongsToCompany : ;
           :hasName "${productName}" ;
           :hasProductInfo ?productInfo .
        ?productInfo :emissions ?emissions ;
               :energyConsumption ?energyConsumption ;
               :renewableEnergyUsage ?renewableEnergyUsage ;
               :materialEfficiency ?materialEfficiency ;
               :lifecycle ?lifecycle .
      }
      WHERE {
        :${my_name} :hasProduct :${productName}

        :${productNam} a :${productName} ;
        :belongsToCompany :${my_name} ;
        :hasName ?name ;
        :hasProductInfo ?productInfo .
     ?productInfo :emissions ?emissions ;
            :energyConsumption ?energyConsumption ;
            :renewableEnergyUsage ?renewableEnergyUsage ;
            :materialEfficiency ?materialEfficiency ;
            :lifecycle ?lifecycle .
      }
      `;
  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}

export async function editData(productName, dataType, newValue) {
  // const apiUrl = process.env.INSERT_API;
  const query = `PREFIX : <http://example.org/ontology#>

  DELETE {
    :${productName} :${dataType} ?oldvalue .
  } 
  INSERT {
    :${productName} :${dataType} :${newValue} .
  }
  WHERE {
    :${productName} :${dataType} ?oldvalue .
  }
      `;
  let encoded_query = encodeURIComponent(query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, query, { headers });
}
