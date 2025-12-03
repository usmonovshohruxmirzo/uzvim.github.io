import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
import { initVimMode } from "monaco-vim";
import type * as monaco from "monaco-editor";

export default function VimEditor() {
  const statusRef = useRef<HTMLDivElement>(null);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    initVimMode(editor, statusRef.current!);
  }

  return (
    <div>
      <Editor
        className="overflow-hidden rounded-t-lg border border-gray-200"
        height="300px"
        defaultLanguage="javascript"
        defaultValue={`// Vim rejimi yoqildi!`}
        onMount={handleEditorDidMount}
      />
      <div ref={statusRef} className="rounded-b-lg bg-[#309C34] p-2 text-sm text-white" />
    </div>
  );
}
