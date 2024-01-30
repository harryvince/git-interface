import { git } from "@lib/server";
import { Hono } from "hono";

const controller = new Hono();

controller.get("/checkout/:branch", async (c) => {
  const branch = c.req.param("branch");
  await git.checkout(branch);
  return c.redirect("/");
});

controller.post("/asc", async (c) => {
  const body = await c.req.formData();
  await git.add("-A");
  await git.commit(body.get("message") as string);
  return c.body("Success", 200, { "HX-Redirect": "/" });
});

controller.post("/push", async (c) => {
  await git.push();
  return c.body("Success", 200, { "HX-Redirect": "/" });
});

export default controller;
