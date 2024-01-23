// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from 'axios';

export async function getCompanies() {

    const apiUrl = "http://localhost:7200/repositories/repo_niels";
    const my_name = "CompanyA"

    const prefix = "<http://example.org/ontology#"

    let new_query = `SELECT ?accessibleCompany ?companyName
    WHERE {
      ${prefix}${my_name}> ${prefix}canAccessDataOf> ?accessibleCompany .
      ?accessibleCompany ${prefix}hasName> ?companyName
    }`                

    let encoded_query = encodeURIComponent(new_query)
    
    const url = `${apiUrl}?query=${encoded_query}`;
    console.log(url);
    console.log(encoded_query)
    const headers = {
        'Accept':'application/sparql-results+json', 
        'Content-Type':'application/sparql-results+json'
    };

    const response = await axios.get(url, {headers});

    return response.data.results.bindings;
}
