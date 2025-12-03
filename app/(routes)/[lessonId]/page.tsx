"use client";

import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), { ssr: false });

export default function VimLearningDashboard() {
  return <Dashboard />;
}
