"use client";

import { useState, useEffect } from "react";

export default function CompanyName() {
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const storedCompanyName = localStorage.getItem(
      "local_storage_company_name"
    );
    if (storedCompanyName) {
      setCompanyName(storedCompanyName);
    }
  }, []);

  return companyName;
}
