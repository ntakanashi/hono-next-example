import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export class DbClient extends PrismaClient {
  constructor() {
    super({
      log: process.env.NODE_ENV === "development" ? ["query"] : [],
    });
  }
}
