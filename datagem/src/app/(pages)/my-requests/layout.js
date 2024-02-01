import Nav from "@/app/ui/Nav";

export default function MyRequestLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Nav />
      <section>{children}</section>;
    </>
  );
}
