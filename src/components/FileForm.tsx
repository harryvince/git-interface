import { FC } from "hono/jsx";

const FileForm: FC = () => {
  return (
    <form hx-post="/api/asc">
      <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
        <input
          type="text"
          id="message"
          name="message"
          class="ring-1 ring-inset ring-gray-300 p-3 w-1/2 text-center shadow-md text-sm focus:z-10 focus:border-blue-500 hover:bg-slate-100"
          placeholder="feat: example commit message"
        ></input>
        <button
          class="shadow-md rounded-lg p-3 text-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-100 focus:border-blue-500"
          type="submit"
        >
          Add, Stage + Commit
        </button>
      </div>
    </form>
  );
};

export default FileForm;
