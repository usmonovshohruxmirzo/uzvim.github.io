"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import concepts from "@/data/concepts";
import normalize from "@/utils/normalize";

interface NavigationItemProps {
  concept: (typeof concepts)[0];
  isActive: boolean;
  completedCount: number;
  totalCount: number;
  onClick: () => void;
}

export default function NavigationItem({
  concept,
  isActive,
  completedCount,
  totalCount,
  onClick,
}: NavigationItemProps) {
  const Icon = concept.icon;
  const slug = normalize(concept.id);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
    window.history.pushState(null, "", `/lesson/${slug}`);
  };

  return (
    <Link
      href={`/lesson/${slug}`}
      onClick={handleClick}
      prefetch={false}
      className={`mb-2 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#309C34] focus-visible:ring-offset-2 lg:py-3 ${
        isActive
          ? "bg-[#309C34] text-white"
          : "text-gray-700 hover:bg-green-50 hover:text-[#309C34]"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <div className={`rounded-lg p-2 ${isActive ? "bg-white/20" : "bg-green-100"}`}>
        <Icon size={18} className={isActive ? "text-white" : "text-[#309C34]"} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1 text-left">
        <span className="block truncate text-sm font-medium lg:text-base">{concept.title}</span>

        {totalCount > 0 && (
          <span className={`text-xs font-medium ${isActive ? "text-white/70" : "text-gray-400"}`}>
            {completedCount}/{totalCount}
          </span>
        )}
      </div>
    </Link>
  );
}
