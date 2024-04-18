import type { Note as NoteType } from "@prisma/client";

export default class Note implements NoteType {
  id: string;
  title: string;
  body: string;

  constructor(note: NoteType) {
    this.id = note.id;
    this.title = note.title;
    this.body = note.body;
  }
}
