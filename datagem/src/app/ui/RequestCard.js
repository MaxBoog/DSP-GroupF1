import { Card } from "flowbite-react";

export default function RequestCard({ children, className }) {
  return (
    <Card className={`${className} my-5 bg-gray-100 text-gray-600`}>
      {children}
    </Card>
  );
}
