import { resources } from "@/data/resources";
import { Book } from "lucide-react";
import Link from "next/link";

export default function Resources() {
  return (
    <section className="mt-4 mb-6 rounded-xl border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-4 lg:mt-6 lg:mb-8 lg:p-6">
      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-800 lg:text-xl">
        <Book className="text-purple-600" size={24} />
        Qo&apos;shimcha manbalar
      </h3>
      <ul className="space-y-2 text-sm text-gray-700 lg:space-y-3 lg:text-base">
        {resources.map((res) => (
          <li key={res.name} className="flex items-start gap-2">
            <span className="mt-1 shrink-0 font-bold text-purple-600">•</span>
            <span className="wrap-break-word">
              <Link
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                {res.name}
              </Link>{" "}
              - {res.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
