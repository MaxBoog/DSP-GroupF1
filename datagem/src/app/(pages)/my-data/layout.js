import Nav from "@/app/ui/Nav";

export default function MyDataLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Nav />
      <section>{children}</section>;
    </>
  );
}
