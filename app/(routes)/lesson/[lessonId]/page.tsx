"use client";

import React from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import concepts from "@/data/concepts";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), {
  ssr: false,
});

export default function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = React.use(params);

  const exists = concepts.some((c) => c.id === lessonId);

  if (!exists) return notFound();

  return <Dashboard initialConcept={lessonId} />;
}
