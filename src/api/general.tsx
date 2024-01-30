import { Hono } from "hono";
import { git } from "src/lib/server";

const controller = new Hono();

controller.get("/version", async (c) => {
  const version = await git.version();

  return c.html(
    <h1 class="text-right">
      Current Version: {version.major}.{version.minor}.{version.patch}
    </h1>,
  );
});

controller.get("/valid", async (c) => {
  const isRepo = await git.checkIsRepo();
  const message = isRepo ? "Within a git directory" : "No git directive found.";

  return c.html(<p>{message}</p>);
});

export default controller;
