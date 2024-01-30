import { FC } from "hono/jsx";

type Props = {
  title: string;
  svg: JSX.Element;
  data: string | JSX.Element | Array<string> | Array<JSX.Element>;
  reduce_data_text_size?: boolean;
  extra_info: string;
};

const Panel: FC<Props> = ({
  title,
  svg,
  data,
  extra_info,
  reduce_data_text_size,
  children,
}) => {
  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between"
      data-v0-t="card"
    >
      <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
        <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
          {title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
        >
          {svg}
        </svg>
      </div>
      <div class="p-6">
        {typeof data === "string" || !Array.isArray(data) ? (
          reduce_data_text_size ? (
            <p class="text-xs">{data}</p>
          ) : (
            <div class="text-base font-bold">{data}</div>
          )
        ) : (
          data.map((item, index: number) => {
            return reduce_data_text_size ? (
              <p key={index} class="text-xs">
                {item}
              </p>
            ) : (
              <div key={index} class="text-base font-bold">
                {item}
              </div>
            );
          })
        )}
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {extra_info}
        </p>
      </div>
      {children && children}
    </div>
  );
};

export default Panel;
