import Note from "../../domain/entity/note";
import type NoteRepositoryInterface from "../../domain/repository/noteRepositoryInterface";
import { inject, injectable } from "inversify";
import { DbClient } from "../DbClient";
import tokens from "../../ioc/tokens";

@injectable()
export class NoteRepository implements NoteRepositoryInterface {
  constructor(@inject(tokens.DbClient) readonly dbClient: DbClient) {}

  async findAll(): Promise<Note[]> {
    const notes = await this.dbClient.note.findMany();

    return notes.map((note) => new Note(note));
  }

  async create(note: { title: string; body: string }): Promise<Note> {
    const newNote = await this.dbClient.note.create({
      data: {
        body: note.body,
        title: note.title,
      },
    });

    return new Note(newNote);
  }
}
