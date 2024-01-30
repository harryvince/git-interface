import { FC } from "hono/jsx";
import _root from "./_root";

const Dashboard: FC = () => {
  return (
    <_root>
      <div class="flex flex-col w-full min-h-screen">
        <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
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
            <a class="font-bold" href="/repository">
              Repository
            </a>
            <a class="text-gray-500 dark:text-gray-400" href="/files">
              Files
            </a>
            <a class="text-gray-500 dark:text-gray-400" href="/commits">
              Commits
            </a>
            <a class="text-gray-500 dark:text-gray-400" href="/branches">
              Branches
            </a>
            <a class="text-gray-500 dark:text-gray-400" href="/history">
              History
            </a>
          </nav>
        </header>
        <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Repository
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
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
                </svg>
              </div>
              <div class="p-6">
                <div class="text-base font-bold">Repo Name</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: 1 hour ago
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Files
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div class="p-6">
                <div class="text-base font-bold">File 1</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: 2 hours ago
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Commits
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
                  <circle cx="12" cy="12" r="3" />
                  <line x1="3" x2="9" y1="12" y2="12" />
                  <line x1="15" x2="21" y1="12" y2="12" />
                </svg>
              </div>
              <div class="p-6">
                <div class="text-base font-bold">Commit 1</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: 3 hours ago
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  Branches
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
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </div>
              <div class="p-6">
                <div class="text-base font-bold">Branch 1</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: 4 hours ago
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
                  History
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
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M12 7v5l4 2" />
                </svg>
              </div>
              <div class="p-6">
                <div class="text-base font-bold">Recent Activity</div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: 5 hours ago
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </_root>
  );
};

export default Dashboard;
