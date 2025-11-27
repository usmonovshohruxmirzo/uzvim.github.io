"use client";

import dynamic from "next/dynamic";

const Stars = dynamic(() => import("@/app/(routes)/stars/_components/StarsClient"), {
  ssr: false,
});

export default function StarsPage() {
  return <Stars />;
}
