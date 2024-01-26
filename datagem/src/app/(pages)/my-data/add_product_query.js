import axios from "axios";
import { companyNameInput } from "@/app/ui/Form";
import config from "./config";

export async function getAccess(
  product_name,
  emissions,
  energy_consumption,
  renewable_energy,
  material_efficiency,
  lifecycle,
  belong_to
) {
  const apiUrl = "http://localhost:7200/repositories/repo_niels/statements";
  const prefix = "<http://example.org/ontology";
  const headers = {
    "Content-Type": "application/sparql-update",
  };

  const new_company_query = `PREFIX : <http://example.org/ontology#> 
  INSERT DATA { 
    :${company_name} a :Company ;
              :hasName "${company_name}" .
  }`;
  let encoded_query = encodeURIComponent(new_company_query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, new_company_query, { headers });
}
