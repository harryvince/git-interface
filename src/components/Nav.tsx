import { FC } from "hono/jsx";

type selected = "repository" | "files" | "commits" | "branches" | "history";

const Nav: FC<{ currentlySelected: selected }> = ({ currentlySelected }) => {
  const isSelected = (name: string) => {
    const [selectedClass, normalClass] = [
      "font-bold",
      "text-gray-500 dark:text-gray-400",
    ];

    return currentlySelected === name ? selectedClass : normalClass;
  };

  return (
    <nav class="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="/"
      >
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
          class="w-6 h-6"
        >
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
          <circle cx="12" cy="13" r="2" />
          <path d="M14 13h3" />
          <path d="M7 13h3" />
        </svg>
        <span class="sr-only">Git Dashboard</span>
      </a>
      <a class={isSelected("repository")} href="/repository">
        Repository
      </a>
      <a class={isSelected("files")}href="/files">
        Files
      </a>
      <a class={isSelected("commits")}href="/commits">
        Commits
      </a>
      <a class={isSelected("branches")}href="/branches">
        Branches
      </a>
      <a class={isSelected("history")}href="/history">
        History
      </a>
    </nav>
  );
};

export default Nav;
