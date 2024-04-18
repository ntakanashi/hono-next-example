import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import type CreateNoteService from "../../domain/service/note/CreateNoteService";
import container from "../../ioc/container";
import tokens from "../../ioc/tokens";
import type GetNotesService from "../../domain/service/note/GetNotesServices";

const app = new OpenAPIHono();

export const getNotesRouteResponse = z
  .object({
    notes: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        body: z.string(),
      }),
    ),
  })
  .openapi("GetNotesResponse");
const getNotesRoute = createRoute({
  path: "/",
  method: "get",
  description: "ノート一覧",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: getNotesRouteResponse,
        },
      },
    },
  },
});

export const createNoteRequest = z
  .object({
    note: z.object({
      title: z.string(),
      body: z.string(),
    }),
  })
  .openapi("CreateNoteResponse");
export const createNotesResponse = z
  .object({
    note: z.object({
      id: z.string(),
      title: z.string(),
      body: z.string(),
    }),
  })
  .openapi("GetNoteResponse");
const createNoteRoute = createRoute({
  path: "/",
  method: "post",
  description: "ノートを作成する",
  request: {
    body: {
      required: true,
      content: {
        "application/json": {
          schema: createNoteRequest,
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: createNotesResponse,
        },
      },
    },
  },
});

export const notesController = app
  .openapi(getNotesRoute, async (c) => {
    const notes = await container
      .get<GetNotesService>(tokens.GetNotesService)
      .exec();
    return c.json({ notes: notes }, 200);
  })
  .openapi(
    createNoteRoute,
    async (c) => {
      const body = await c.req.valid("json");
      const note = await container
        .get<CreateNoteService>(tokens.CreateNoteService)
        .exec(body.note);
      return c.json({ note: note });
    },
    (result, c) => {
      if (!result.success) {
        return c.json(
          {
            code: 400,
            message: "Validation Error",
          },
          400,
        );
      }
    },
  );
