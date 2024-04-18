import type React from "react";
import { NoteList } from "../features/notes/components/NoteList";

const NotesPage: React.FC = () => {
  return (
    <div>
      <h1>Notes</h1>
      <NoteList />
    </div>
  );
};

export default NotesPage;
