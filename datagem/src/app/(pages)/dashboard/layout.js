import Nav from "@/app/ui/Nav";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Nav />
      <section>{children}</section>;
    </>
  );
}
