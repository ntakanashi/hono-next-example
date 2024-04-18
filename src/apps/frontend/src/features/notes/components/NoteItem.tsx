import type React from "react";
import type { Note } from "../types/note";

interface NoteItemProps {
  note: Note;
}

export const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </div>
  );
};
