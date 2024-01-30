import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

import Dashboard from "@templates/Dashboard";

import general from "./api/general";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Dashboard />);
});

app.use(
  '/static/*',
  serveStatic({ root: './' })
)

app.route("/general", general);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
