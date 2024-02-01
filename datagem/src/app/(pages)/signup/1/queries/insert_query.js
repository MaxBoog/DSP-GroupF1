import axios from "axios";
// import config from "../config";
// import { getServerSession } from "next-auth";

// const apiUrl = process.env.INSERT_API;
const apiUrl = "http://localhost:7200/repositories/repo_niels/statements";
const headers = {
  "Content-Type": "application/sparql-update",
};

// Retrieve from local storage
// export function getCompanyName() {
//   return localStorage.getItem("myCompanyName") || null;
// }

export async function insertCompanies(userName) {
  // config.my_company_name = my_company_name;
  // const session = await getServerSession();
  // const company_name = userName.replace(/\s+/g, "%20");
  const company_name = encodeURIComponent(userName);
  // const company_name_iri = encodeURIComponent(userName);
  // console.log(company_name_iri);
  const company_name_human_readable = userName;
  // console.log(company_name);
  const prefix = "<http://example.org/ontology";

  //// company type ////
  const new_company_query = `PREFIX : <http://example.org/ontology#> 
  INSERT DATA { 
    :${company_name} a :Company ;
              :hasName "${company_name_human_readable}"^^xsd:string .
  }`;
  let encoded_query = encodeURIComponent(new_company_query);
  const url = `${apiUrl}?update=${encoded_query}`;
  const response = await axios.post(url, new_company_query, { headers });
}

// export async function addProduct(
//   productName,
//   emissions,
//   energyConsumption,
//   renewableEnergyUsage,
//   efficiency,
//   lifecycle
// ) {
//   const session = await getServerSession();
//   const company_name = session.user.name;
//   const new_query = `PREFIX : <http://example.org/ontology#>
//                 INSERT DATA{
//                   :${productName} a :Product ;
//                       :hasName "${productName}";
//                       :belongsToCompany: :${company_name} ;
//                       :hasProductInfo :${productName}Info .

//                       :${productName} a :${productName}Info;
//                       :emissions ${emissions} ;
//                       :energyConsumption  ${energyConsumption};
//                       :renewableEnergyUsage ${renewableEnergyUsage};
//                       :materialEfficiency "${efficiency}" ;
//                       :lifecycle "${lifecycle}".

//                     :${my_company_name} :hasProduct :${productName}.
//                     }
//                     `;

//   // console.log(new_query);
//   let encoded_query = encodeURIComponent(new_query);
//   const url = `${apiUrl}?update=${encoded_query}`;

//   const response = await axios.post(url, new_query, { headers });
// }
