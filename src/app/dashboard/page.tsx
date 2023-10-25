"use client";
import React from "react";
import { usePathname } from "next/navigation";

const DashboardPage = () => {
    const pathname = usePathname();
    console.log(pathname);

    return <div>DashboardPage</div>;
};

export default DashboardPage;
