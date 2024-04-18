import { useState, useEffect } from "react";
import { getNotes } from "../api/getNotes";
import type { Note } from "../types/note";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await getNotes();
      setNotes(res.notes);
    };

    fetchNotes();
  }, []);

  return notes;
};
