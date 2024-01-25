import axios from "axios";

const apiUrl = " http://localhost:7200/repositories/DataGemDeluxe/statements";
const company_name = "CompanyA";
const headers = {
  "Content-Type": "application/sparql-update",
};


export async function getCompanies(my_company_name) {

  // const new_query = `INSERT DATA {${prefix}jannsen> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/ontology#Company>}`;

  const new_query= `PREFIX : <http://example.org/ontology#>

                    DELETE WHERE {
                      :CompanyNiels ?p ?o .
                    }
  
                    `

  let encoded_query = encodeURIComponent(new_query);
  const url = `${apiUrl}?update=${encoded_query}`;

  console.log(url);

  const response = await axios.post(url, new_query, { headers });

}

// http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23%23pietpaulusmarip%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
// http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23CompanyKerstman%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
export async function addProduct(my_company_name, productName, emissions, energyConsumption, renewableEnergyUsage, efficiency, lifecycle) {
  const new_query= 
  `PREFIX : <http://example.org/ontology#> 
                INSERT DATA{
                  :${productName} a :Product ;
                      :hasName "${productName}";
                      :belongsToCompany: :${my_company_name} ;
                      :hasProductInfo :${productName}Info .
                  
                      :${productName} a :${productName}Info;
                      :emissions ${emissions} ;
                      :energyConsumption  ${energyConsumption};
                      :renewableEnergyUsage ${renewableEnergyUsage};
                      :materialEfficiency "${efficiency}" ;
                      :lifecycle "${lifecycle}".
                  
                    :${my_company_name} :hasProduct :${productName}.
                    }
                    `

  console.log(new_query)                 
  let encoded_query = encodeURIComponent(new_query);
  const url = `${apiUrl}?update=${encoded_query}`;


  const response = await axios.post(url, new_query, { headers });
}