import concepts from "@/data/concepts";
import normalize from "@/utils/normalize";
import { redirect } from "next/navigation";

export default function page() {
  const concept = normalize(concepts[0].id);
  redirect(`/lesson/${concept}`);
}
