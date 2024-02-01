import Nav from "@/app/ui/Nav";

export default function EditDataLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Nav />
      <section>{children}</section>;
    </>
  );
}
