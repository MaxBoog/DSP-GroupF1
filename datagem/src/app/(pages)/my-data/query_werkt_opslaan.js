import axios from "axios";

export async function getCompanies() {
  const apiUrl = "http://18.205.29.167:7200/repositories/repo_niels";

<<<<<<< HEAD:datagem/src/app/(pages)/my-data/query.js
  const prefix = "<http://example.org/ontology#";
=======
    const apiUrl = "http://localhost:7200/repositories/repo_niels";
    
    if (!input) {
        throw new Error('Ingredient not defined');
    }
>>>>>>> 36c62cceaba2e04830545bb9c18588dcbaa78327:datagem/src/app/(pages)/my-data/query_werkt_opslaan.js

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

<<<<<<< HEAD:datagem/src/app/(pages)/my-data/query.js
  // opslaan werkende query let query = "SELECT%20*%20WHERE%20%7B%20?s%20?p%20%3Chttp://example.org/ontology%23Company%3E%20.%7D" ;
  //query = encodeURI(query).replace(/#/, '%23'); //deze lijn alleen bij fontology

  const url = `${apiUrl}?query=${encoded_query}`;
  //   console.log(url);
  //   console.log(encoded_query);
  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };
=======
    //let encoded_query = encodeURI(new_query).replace(/#/g, '%23').replace(/</g, '%3C')
    //.replace(/>/g, '%3E').replace(/{/g, '%7B').replace(/}/g, '%7D')

    let encoded_query = encodeURIComponent(new_query)
    
    // opslaan werkende query let query = "SELECT%20*%20WHERE%20%7B%20?s%20?p%20%3Chttp://example.org/ontology%23Company%3E%20.%7D" ;
    //query = encodeURI(query).replace(/#/, '%23'); //deze lijn alleen bij fontology
>>>>>>> 36c62cceaba2e04830545bb9c18588dcbaa78327:datagem/src/app/(pages)/my-data/query_werkt_opslaan.js

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}
