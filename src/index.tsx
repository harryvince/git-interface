import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

import Dashboard from "@templates/Dashboard";
import Commits from "@templates/Commits";

// import general from "./api/general";
import api from "./api/api";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Dashboard />);
});

app.get("/commits", (c) => {
  return c.html(<Commits />);
});

app.use(
  '/static/*',
  serveStatic({ root: './' })
)

// app.route("/general", general);
app.route("/api", api)

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
