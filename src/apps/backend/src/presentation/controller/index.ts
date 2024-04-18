import { cors } from "hono/cors";
import { notesController } from "./notesController";
import { Hono } from "hono";
import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();
// TODO: CORS対応
app.use("*", cors());
const route = app.route("/notes", notesController);

export type AppType = typeof route;
export default app;
