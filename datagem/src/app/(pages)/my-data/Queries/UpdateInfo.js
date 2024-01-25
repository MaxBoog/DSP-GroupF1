
import axios from 'axios';


const my_name = "CompanyA"
const apiUrl = " http://localhost:7200/repositories/DataGemDeluxe/statements";


export async function updateInfo(product, productInfo, newValue) {

    let productQuery = 
    `PREFIX : <http://example.org/ontology#>

    DELETE {
      <${product}> <${productInfo}> ?oldValue .
    } 
    INSERT {
      <${product}> <${productInfo}> ${newValue} .
    }
    WHERE {
      <${product}> <${productInfo}> ?oldValue .
    }`
  
    let encoded_query = encodeURIComponent(productQuery)
    
    const url = `${apiUrl}?query=${encoded_query}`;
    // console.log(url);
    console.log(productQuery)
    const headers = {
        "Content-Type": "application/sparql-update",
      };
  
    const response = await axios.post(url, productQuery, { headers });
  
  }
  
  export async function getCompanies(my_company_name) {
    
    const my_name = "my_inserted_company"; // variable company
    const company_name = my_company_name;
    
    // const new_query = `INSERT DATA {${prefix}jannsen> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/ontology#Company>}`;
  
    const new_query= `PREFIX : <http://example.org/ontology#>
  
                      DELETE WHERE {
                        :CompanyNiels ?p ?o .
                      }
    
                      `
  
    let encoded_query = encodeURIComponent(new_query);
    const url = `${apiUrl}?update=${encoded_query}`;
  
    console.log(url);
  
    const headers = {
      "Content-Type": "application/sparql-update",
    };
  
    const response = await axios.post(url, new_query, { headers });
    //console.log(response.data);  // Output the response data if needed
    // return response.data.results.bindings;
  }
  
  // http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23%23pietpaulusmarip%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
  // http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23CompanyKerstman%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
  