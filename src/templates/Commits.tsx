import { FC } from "hono/jsx";

import _root from "@templates/_root";
import Nav from "@components/Nav";
import Panel from "@components/Panel";
import icons from "@lib/icons";
import { git } from "@lib/server";
import { getRelativeTimeSinceDate, get_branches_and_current } from "@lib/utils";

const Commits: FC = async () => {
  const [currentBranch, branches] = await get_branches_and_current();

  const commits = (await git.log()).all;

  const commit_messages = (
    <>
      {commits.map((commit) => {
        const class_attributes = "font-semibold";

        return (
          <div>
            <a
              data-te-toggle="tooltip"
              title={commit.hash}
              href={`/commit/${commit.hash}`}
              class={class_attributes}
            >
              {commit.hash.slice(0, 7)}
            </a>
            : {commit.message} |{" "}
            <small
              data-te-toggle="tooltip"
              title={commit.author_email}
              class={class_attributes}
            >
              {commit.author_name}
            </small>{" "}
            -{" "}
            <small
              data-te-toggle="tooltip"
              title={commit.date}
              class={class_attributes}
            >
              {getRelativeTimeSinceDate(new Date(commit.date))}
            </small>
          </div>
        );
      })}
      <div class="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
        <p />
        <h3 class="whitespace-nowrap tracking-tight text-sm font-medium">
          {currentBranch}
        </h3>
      </div>
    </>
  );

  return (
    <_root>
      <div class="flex flex-col w-full min-h-screen">
        <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <Nav currentlySelected="commits" />
        </header>
        <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            <Panel
              title="Commits"
              svg={icons.Commits}
              data={commit_messages}
              reduce_data_text_size={true}
              extra_info=""
            />
          </div>
        </main>
      </div>
    </_root>
  );
};

export default Commits;
