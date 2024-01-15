async function getData() {
  const res = await fetch(
    "https://sd-58d1da07.stardog.cloud:5820/admin/data_sources/tutorial-database/available"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <h1></h1>
    </>
  );
}
