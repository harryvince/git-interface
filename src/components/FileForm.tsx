import { FC } from "hono/jsx";
import Input from "@components/units/Input";
import Button from "@components/units/Button";

const FileForm: FC = () => {
  return (
    <form hx-post="/api/asc">
      <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
        <Input id="message" placeholder="feat: example commit message" />
        <Button text="Add, Stage + Commit" type="submit" />
      </div>
    </form>
  );
};

export default FileForm;
