import { FC } from "hono/jsx";

type props = {
  type: HTMLButtonElement["type"];
  text: string;
};

const Button: FC<props> = ({ type, text }) => {
  return (
    <button
      class="shadow-md rounded-lg p-3 text-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-100 focus:border-blue-500"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
