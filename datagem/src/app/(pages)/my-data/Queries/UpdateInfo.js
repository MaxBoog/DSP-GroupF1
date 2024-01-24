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
    console.log(url);
    console.log(encoded_query)
    const headers = {
        'Accept':'application/sparql-results+json', 
        'Content-Type':'application/sparql-results+json'
    };
  
    const response = await axios.get(url, {headers});
  
    return response.data.results.bindings;
  }
  