"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import content from "@/data/contents";
import { useMemo } from "react";
import Lesson from "@/components/dashboard/lesson/Lesson";
import Tips from "@/components/sections/Tips/Tips";
import Resources from "@/components/sections/Resources/Resources";

export default function StarsClient() {
  const [favorites, setFavorites] = useLocalStorage<string[]>("vim_favorites", []);
  const [completedLessons] = useLocalStorage<string[]>("vim_completed", []);

  const allLessons = useMemo(() => {
    return Object.values(content).flatMap((concept) =>
      concept.lessons.map((lesson) => ({
        ...lesson,
        editor: concept.editor,
      })),
    );
  }, []);

  const favoriteLessons = allLessons.filter((lesson) => favorites.includes(lesson.id));

  const toggleFavorite = (lessonId: string) => {
    if (favorites.includes(lessonId)) {
      setFavorites(favorites.filter((id) => id !== lessonId));
    } else {
      setFavorites([...favorites, lessonId]);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50 lg:flex-row">
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
          <header className="mb-6 lg:mb-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              Sevimlilar
            </h2>
            <p className="text-sm text-gray-600">Saqlangan sevimli darslaringiz</p>
          </header>

          {favoriteLessons.length === 0 && (
            <div className="py-20 text-center text-lg text-gray-500">
              Hozircha sevimlilarga hech narsa qo‘shilmagan.
            </div>
          )}

          <div className="space-y-4 lg:space-y-6">
            {favoriteLessons.map((lesson, index) => (
              <Lesson
                key={lesson.id}
                lesson={lesson}
                editor={lesson.editor}
                index={index}
                isCompleted={completedLessons.includes(lesson.id)}
                isFavorite={favorites.includes(lesson.id)}
                toggleLesson={() => {}}
                toggleFavorite={toggleFavorite}
                copyCommand={() => {}}
                copiedCommand=""
              />
            ))}
          </div>

          <Tips />
          <Resources />
        </div>
      </main>
    </div>
  );
}
