export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/edit-data",
    "/my-data",
    "/my-requests",
    "/signup/1",
    "/signup/2",
    "/signup/3",
    "/signup/overview",
  ],
};
