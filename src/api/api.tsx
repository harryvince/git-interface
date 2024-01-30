import { git } from "@lib/server";
import { Hono } from "hono";

const controller = new Hono();

controller.get("/checkout/:branch", async (c) => {
  const branch = c.req.param("branch");
  await git.checkout(branch);
  return c.redirect("/");
});

export default controller;
