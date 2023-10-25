"use client";
import React from "react";
import { usePathname } from "next/navigation";

const DashboardPage = () => {
    const pathname = usePathname();

    return <div>Dashboard Page</div>;
};

export default DashboardPage;
