import { FC } from "hono/jsx";

type props = {
    id: string,
    placeholder: string
}

const Input: FC<props> = ({ id, placeholder }) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      class="ring-1 ring-inset ring-gray-300 p-3 w-1/2 text-center shadow-md text-sm focus:z-10 focus:border-blue-500 hover:bg-slate-100"
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
