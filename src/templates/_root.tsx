import type { FC } from "hono/jsx";

const _root: FC = (props) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/static/out.css"
        />
        <script src="https://unpkg.com/htmx.org@1.9.10" />
        <title>Git Management</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default _root;
