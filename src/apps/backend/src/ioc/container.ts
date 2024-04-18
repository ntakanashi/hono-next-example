import { Container } from "inversify";
import "reflect-metadata";
import tokens from "./tokens";
import { NoteRepository } from "../infra/repository/noteRepository";
import type NoteRepositoryInterface from "../domain/repository/noteRepositoryInterface";
import CreateNoteService from "../domain/service/note/CreateNoteService";
import GetNotesService from "../domain/service/note/GetNotesServices";

const container = new Container();
// repository
container
  .bind<NoteRepositoryInterface>(tokens.NoteRepository)
  .to(NoteRepository)
  .inSingletonScope();

// service
container
  .bind<CreateNoteService>(tokens.CreateNoteService)
  .to(CreateNoteService)
  .inSingletonScope();
container
  .bind<GetNotesService>(tokens.GetNotesService)
  .to(GetNotesService)
  .inSingletonScope();

export default container;
