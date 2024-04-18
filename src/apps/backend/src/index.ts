import { serve } from "@hono/node-server";
import app from "./presentation/controller";
import { swaggerUI } from "@hono/swagger-ui";
import * as dotenv from "dotenv";
import { cors } from "hono/cors";
dotenv.config();

const port = 3001;
if (process.env.NODE_ENV === "development") {
  app
    .doc("/docs/api/specification", {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "test-app-api",
      },
    })
    .get(
      "/docs/api/swagger",
      swaggerUI({
        url: "/docs/api/specification",
      }),
    );
}
serve({
  fetch: app.use("*", cors()).fetch,
  port,
});

console.log(`Server is running on port ${port}`);
