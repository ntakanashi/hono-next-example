export default {
  // repository
  NoteRepository: Symbol.for("JobRepository"),

  // service
  GetNotesService: Symbol.for("GetNotesService"),
  CreateNoteService: Symbol.for("CreateNoteService"),

  // other
  DbClient: Symbol.for("DbClient"),
};
