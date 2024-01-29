// // import { getServerSession } from "next-auth";
// import SignupForm from "@/app/ui/SignUpForm";
// // import { redirect } from "next/navigation";

// // export default async function RegisterPage() {
// //   const session = await getServerSession();
// //   if (session) {
// //     redirect("/");
// //   }
// //   return <SignupForm />;
// // }

// export default async function SignUpPage() {
//   return <SignupForm />;
// }

import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
}
