import { FC } from "hono/jsx";
import _root from "./_root";

const Home: FC = () => {
  return (
    <_root>
      <div class="container mt-6">
        <div class="grid mb-4">
          <h1>Git</h1>
          <h1 class="text-right" hx-get="/general/version" hx-trigger="load">
            Loading...
          </h1>
        </div>
        <p hx-get="/general/valid" hx-trigger="load">
          Loading...
        </p>
      </div>
    </_root>
  );
};

export default Home;
