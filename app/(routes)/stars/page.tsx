"use client";

import dynamic from "next/dynamic";

const Stars = dynamic(() => import("@/components/stars/StarsClient"), {
  ssr: false,
});

export default function StarsPage() {
  return <Stars />;
}
