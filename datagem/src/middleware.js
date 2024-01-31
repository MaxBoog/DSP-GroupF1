export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/edit-data", "/my-data", "/my-requests"],
};
