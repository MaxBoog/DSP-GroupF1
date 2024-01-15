// async function getData() {
//   const res = await fetch(
//     "https://sd-58d1da07.stardog.cloud:5820/admin/data_sources/tutorial-database/available"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return (
//     <>
//       <h1></h1>
//     </>
//   );
// }
"use client";

import {
  dbName,
  columnData,
  conn,
  TableDataAvailabilityStatus,
  columnSelectors,
} from "../../../../helpers/constants";

import { useState } from "react";
import { query } from "stardog";

export default function Page() {
  const columnHeaders = columnData.map(({ label }) => (
    <th key={label}>{label}</th>
  ));
  const databaseName = dbName;
  const readQuery = `SELECT ?id ?name ?homePlanet ?kind ?movie {
     ?subject a ?kind ;
         :id ?id ;
         :name ?name ;
         :appearsIn ?movie .
     ?kind rdfs:subClassOf :Character .
     OPTIONAL { ?subject :homePlanet ?homePlanet }
 }`;
  const [dataState, setDataState] = useState(TableDataAvailabilityStatus);

  return (
    <>
      <h1>{databaseName}</h1>
      <table className="table-auto">
        <thead>
          <tr>{columnHeaders}</tr>
        </thead>
      </table>
    </>
  );
}
