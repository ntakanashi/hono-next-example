import { inject, injectable } from "inversify";
import symbols from "../../../ioc/tokens";

import type { NoteRepository } from "../../../infra/repository/noteRepository";
import type Note from "../../entity/note";

@injectable()
export default class CreateNoteService {
  constructor(
    @inject(symbols.NoteRepository) private noteRepository: NoteRepository,
  ) {}

  async exec(note: { body: string; title: string }): Promise<Note> {
    return this.noteRepository.create(note);
  }
}
