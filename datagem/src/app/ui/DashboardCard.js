// imports

import { Card } from "flowbite-react";

export default function DashboardCard({ children, className }) {
  return <Card className={`${className} my-5`}>{children}</Card>;
}
