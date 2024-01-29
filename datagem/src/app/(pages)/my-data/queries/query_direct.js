// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from "axios";

export async function getPartners() {
  // const apiUrl = process.env.GET_API;
  const apiUrl = "http://localhost:7200/repositories/repo_niels";
  const my_name = "CompanyA";

  const prefix = "<http://example.org/ontology#";

  let new_query = `SELECT ?accessibleCompany ?companyName
    WHERE {
      ${prefix}${my_name}> ${prefix}canAccessDataOf> ?accessibleCompany .
      ?accessibleCompany ${prefix}hasName> ?companyName
    }`;

  let encoded_query = encodeURIComponent(new_query);

  const url = `${apiUrl}?query=${encoded_query}`;

  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  // console.log(response.data.results.bindings.length);
  let my_data = response.data.results.bindings;
  for (var i = 0; i < my_data.length; i++) {
    var companyName = my_data[i].companyName.value;

    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = companyName;
  }

  return response.data.results.bindings;
}
