"use client";

import React from "react";
import { CheckCircle, Star, Copy, Terminal, Book, CircleQuestionMark } from "lucide-react";
import { LessonCardProps } from "@/types";
import VimEditor from "../editor/VimEditorInner";

const Lesson: React.FC<LessonCardProps> = ({
  lesson,
  index,
  isCompleted,
  isFavorite,
  toggleLesson,
  toggleFavorite,
  copyCommand,
  copiedCommand,
  editor,
}) => {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 transition-all sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold lg:h-12 lg:w-12 ${
              isCompleted ? "bg-[#309C34] text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {isCompleted ? (
              <CheckCircle size={20} />
            ) : (
              <span className="text-base lg:text-lg">{index + 1}</span>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 hidden items-start justify-between sm:flex">
            <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">{lesson.title}</h3>
            <button
              onClick={() => toggleFavorite(lesson.id)}
              className="shrink-0 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
            >
              <Star
                size={20}
                className={isFavorite ? "fill-[#309C34] text-[#309C34]" : "text-gray-400"}
              />
            </button>
          </div>

          <p className="mb-4 text-sm text-gray-600 lg:text-base">{lesson.desc}</p>

          {lesson.doc && (
            <div className="mb-4 rounded border-l-4 border-[#309C34] bg-green-50 p-3 lg:p-4">
              <div className="flex items-start gap-2">
                <Book size={18} className="mt-0.5 shrink-0 text-[#309C34]" />
                <p className="text-xs leading-relaxed text-gray-700 lg:text-sm">{lesson.doc}</p>
              </div>
            </div>
          )}

          {lesson.commands && lesson.commands?.length > 0 && (
            <div className="mb-4 rounded-lg bg-gray-50 p-3 lg:p-4">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 lg:text-base">
                <Terminal size={16} />
                Buyruqlar
              </h4>
              <div className="space-y-2">
                {lesson.commands.map((command, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-2 rounded border border-gray-200 bg-white p-3 transition-colors hover:border-[#309C34] sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0 flex-1">
                      <code className="block font-mono text-xs font-semibold break-all text-[#309C34] lg:text-sm">
                        {command.cmd}
                      </code>
                      <p className="mt-1 text-xs text-gray-500">{command.desc}</p>
                    </div>
                    <button
                      onClick={() => copyCommand(command.cmd)}
                      className="shrink-0 cursor-pointer self-end rounded p-2 transition-colors hover:bg-green-50 sm:self-center"
                      title="Nusxa olish"
                      aria-label="Buyruqni nusxa olish"
                    >
                      {copiedCommand === command.cmd ? (
                        <CheckCircle size={16} className="text-[#309C34]" />
                      ) : (
                        <Copy size={16} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {editor && (
            <div className="mb-4 rounded-lg bg-gray-50 p-3 lg:p-4">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 lg:text-base">
                <button
                  type="button"
                  className="shrink-0 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
                  onClick={() =>
                    alert(
                      "Eslatma: Ba'zi commands (:help, :w, :q) faqat real terminal Vimda ishlaydi!",
                    )
                  }
                >
                  <CircleQuestionMark />
                </button>
                Vimni sinab ko‘rishingiz mumkin, yuklamasdan!
              </h4>
              <VimEditor />
            </div>
          )}
          <button
            onClick={() => toggleLesson(lesson.id)}
            className={`w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:w-auto lg:text-base ${
              isCompleted
                ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                : "bg-[#309C34] text-white hover:bg-[#2a7a2c]"
            }`}
          >
            {isCompleted ? "Bajarildi" : "Bajarilgan deb belgilash"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Lesson;
