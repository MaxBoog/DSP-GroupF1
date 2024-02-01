// deze query moet meteen geladen worden en laat alle bedrijven laten zien die geconnect zijn

import axios from "axios";
// import { companyNameInput } from "@/app/ui/Form";
// import config from "../../1/config";
// import { companyName } from "@/app/ui/CompanyName";
import { getServerSession } from "next-auth";

export default async function getAllCompanies() {
  const session = await getServerSession();
  const company_name = encodeURIComponent(session.user.name);

  // console.log(company_name);
  // const apiUrl = process.env.GET_API;
  const apiUrl = "http://localhost:7200/repositories/repo_niels";
  const prefix = "<http://example.org/ontology#";

  let all_companies_query = `PREFIX : <http://example.org/ontology#>
  SELECT ?company ?companyName
  WHERE {
    ?company a :Company ;
             :hasName ?companyName .
    FILTER (?company != :${company_name})
  }`;
  // let all_companies_query = `PREFIX : <http://example.org/ontology#>
  // SELECT ?company ?companyName
  // WHERE {
  //   ?company a :Company ;
  //            :hasName ?companyName .

  // }`;
  console.log(all_companies_query);
  let encoded_query = encodeURIComponent(all_companies_query);

  const url = `${apiUrl}?query=${encoded_query}`;

  const headers = {
    Accept: "application/sparql-results+json",
    "Content-Type": "application/sparql-results+json",
  };

  const response = await axios.get(url, { headers });

  return response.data.results.bindings;
}
