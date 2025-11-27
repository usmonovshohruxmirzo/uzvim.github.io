'use client';

import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/app/_components/dashboard/Dashboard'), { ssr: false });

export default function VimLearningDashboard() {
  return <Dashboard />;
}
