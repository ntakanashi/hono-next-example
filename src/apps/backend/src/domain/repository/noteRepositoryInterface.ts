import type Note from "../entity/note";

export default interface NoteRepositoryInterface {
  findAll(): Promise<Note[]>;
  create(data: Note): Promise<Note>;
}
