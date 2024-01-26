import axios from "axios";

export async function getCompanies() {
  const apiUrl = process.env.GET_API;
  // const apiUrl = "http://localhost:7200/repositories/repo_niels";

  if (!input) {
    throw new Error("Ingredient not defined");
  }

  //let query = "SELECT%20*%20WHERE%20%7B%20?s%20%3Chttp://www.w3.org/1999/02/22-rdf-syntax-ns%23type%3E%20%3Chttp://example.org/ontology%23Company%3E%20.%7D" ;
  //let query = "SELECT * WHERE {?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://example.org/ontology#Company>}"

  let new_query = `SELECT ?company ?nameCompany WHERE {?company a ${prefix}Company> . 
    ?company ${prefix}hasName> ?nameCompany}`;

  let encoded_query = encodeURI(new_query)
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/{/g, "%7B")
    .replace(/}/g, "%7D");

  //let encoded_query = encodeURI(new_query).replace(/#/g, '%23').replace(/</g, '%3C')
  //.replace(/>/g, '%3E').replace(/{/g, '%7B').replace(/}/g, '%7D')

  // opslaan werkende query let query = "SELECT%20*%20WHERE%20%7B%20?s%20?p%20%3Chttp://example.org/ontology%23Company%3E%20.%7D" ;
  //query = encodeURI(query).replace(/#/, '%23'); //deze lijn alleen bij fontology

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}
