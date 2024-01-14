export default function SignupLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex flex-1 flex-col px-6 py-12 lg:px-8 bg-indigo-950 items-center h-screen">
      {children}
    </section>
  );
}
