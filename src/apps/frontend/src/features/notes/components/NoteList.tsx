import type React from "react";
import { useNotes } from "../hooks/useNotes";
import { NoteItem } from "./NoteItem";

export const NoteList: React.FC = () => {
  const notes = useNotes();

  if (!notes) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </main>
  );
};
