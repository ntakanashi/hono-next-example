import type { AppType } from "backend/src/presentation/controller";
import { hc } from "hono/client";

export const apiClient = hc<AppType>("http://localhost:3001");
