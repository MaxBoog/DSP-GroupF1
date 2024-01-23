// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from 'axios';

export async function getCompanies(company_name, product_name) {

    const apiUrl = "http://localhost:7200/repositories/repo_niels";
    const prefix = "<http://example.org/ontology#"

    company_name = 'CompanyA' //dit moet dynamisch worden uit de functie
    product_name = 'Product1' //moet ook dynamisch worden uit de functie

    let new_query = `SELECT ?product ?data 
                    WHERE {
                        ${prefix}CompanyA> ${prefix}hasProduct> ?product.
                        ?product ?value ?data
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
