'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import normalize from '@/utils/normalize';
import concepts from '@/data/concepts';
import content from '@/data/contents';
import NavigationItem from './NavigationItem';

interface ConceptNavProps {
  selectedConcept: string;
  setSelectedConcept: (id: string) => void;
  setSidebarOpen: (open: boolean) => void;
  completedLessons: Set<string>;
}

export default function Navigation({
  setSelectedConcept,
  setSidebarOpen,
  completedLessons,
}: ConceptNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.slice(1).replace(/\/$/, '');
    const matched = concepts.find((c) => normalize(c.title) === slug);
    if (matched) setSelectedConcept(matched.id);
  }, [pathname, setSelectedConcept]);

  const conceptMetadata = useMemo(() => {
    return concepts.map((concept) => {
      const normalized = normalize(concept.title);
      const isActive = pathname === `/${normalized}` || pathname === `/${normalized}/`;
      const lessons = content[concept.id]?.lessons || [];
      const completedCount = lessons.filter((l) => completedLessons.has(l.id)).length;

      return {
        concept,
        isActive,
        completedCount,
        totalCount: lessons.length,
      };
    });
  }, [pathname, completedLessons]);

  const handleItemClick = (id: string) => {
    setSelectedConcept(id);
    setSidebarOpen(false);
  };

  return (
    <nav className="flex-1 overflow-y-auto p-3 lg:p-4">
      {conceptMetadata.map(({ concept, isActive, completedCount, totalCount }) => (
        <NavigationItem
          key={concept.id}
          concept={concept}
          isActive={isActive}
          completedCount={completedCount}
          totalCount={totalCount}
          onClick={() => handleItemClick(concept.id)}
        />
      ))}
    </nav>
  );
}
