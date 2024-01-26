import axios from "axios";
import { companyNameInput } from "@/app/ui/Form";
import config from "./config";

export function getAccess(companies_can_access) {
  console.log("----", companies_can_access);
  const apiUrl = process.env.INSERT_API;
  // const apiUrl = "http://localhost:7200/repositories/repo_niels/statements";
  //   const company_name = my_company_name;
  const prefix = "<http://example.org/ontology";
  const headers = {
    "Content-Type": "application/sparql-update",
  };

  //// company x can access data of company y ////
  for (let i = 0; i < companies_can_access.length; i++) {
    const x_access_y_query = `PREFIX : <http://example.org/ontology#> 
      INSERT DATA { 
        :${config.my_company_name} :canAccessDataOf :${companies_can_access[i].value} .
      }`;
    let encoded_query = encodeURIComponent(x_access_y_query);
    const url = `${apiUrl}?update=${encoded_query}`;
    const response = axios.post(url, x_access_y_query, { headers });
  }

  //console.log(response.data);  // Output the response data if needed
  // return response.data.results.bindings;
}

export async function giveAccess(companies_can_access) {
  const apiUrl = " http://localhost:7200/repositories/repo_niels/statements";
  //   const company_name = my_company_name;
  const prefix = "<http://example.org/ontology";
  const headers = {
    "Content-Type": "application/sparql-update",
  };

  //// company x can access data of company y ////

  for (let i = 0; i < companies_can_access.length; i++) {
    const y_gives_x_query = `PREFIX : <http://example.org/ontology#> 
    INSERT DATA { 
      :${companies_can_access[i].value} :canAccessDataOf :${config.my_company_name} .
    }`;
    let encoded_query = encodeURIComponent(y_gives_x_query);
    const url = `${apiUrl}?update=${encoded_query}`;
    const response = await axios.post(url, y_gives_x_query, { headers });
  }

  //console.log(response.data);  // Output the response data if needed
  // return response.data.results.bindings;
}

// http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23%23pietpaulusmarip%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
// http://localhost:7200/repositories/repo_niels/statements?update=INSERT%20DATA%20%7B%3Chttp%3A%2F%2Fexample.org%2Fontology%23CompanyKerstman%3E%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%3E%20%3Chttp%3A%2F%2Fexample.org%2Fontology%23Company%3E%7D
