import { FC } from "hono/jsx";
import _root from "./_root";
import Nav from "@components/Nav";
import Panel from "@components/Panel";
import { git } from "@lib/server";
import {
  get_branches_and_current,
  get_branches_remote,
  get_repository_names,
  getRelativeTimeSinceDate,
} from "@lib/utils";
import FileForm from "@components/FileForm";

const Dashboard: FC = async () => {
  const Icons = {
    Repository: (
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    ),
    Files: (
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    ),
    Commits: (
      <>
        <circle cx="12" cy="12" r="3" />
        <line x1="3" x2="9" y1="12" y2="12" />
        <line x1="15" x2="21" y1="12" y2="12" />
      </>
    ),
    Branches: (
      <>
        <line x1="6" x2="6" y1="3" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </>
    ),
  };

  // Template logic
  const [repository_folder_name, repository_path] =
    await get_repository_names();

  const [current_branch, branches] = await get_branches_and_current();
  const jsx_branches = branches.map((branch) => {
    if (!branch.includes("*")) {
      return (
        <a class="text-base font-bold" href={`/api/checkout/${branch}`}>
          {branch}
        </a>
      );
    } else return <>{branch}</>;
  });

  const remote_branches = await get_branches_remote();
  // const remote_branches = ["harry", "branch", "test"];
  let branches_message = "Remote branches: ";
  if (remote_branches.length > 0) {
    remote_branches.forEach((branch) => {
      branches_message += branch + ", ";
    });
    branches_message = branches_message.slice(0, -2);
  } else branches_message = "";

  const commit_messages_class =
    "transititext-primary text-xs text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600";
  let commitMessages: Array<JSX.Element> = [];
  const commits = (await git.log({ maxCount: 15 })).all;
  if (commits.length > 0) {
    commits.forEach((commit) => {
      commitMessages.push(
        <>
          <a
            class={commit_messages_class}
            data-te-toggle="tooltip"
            title={commit.hash}
            href={`/commit/${commit.hash}`}
          >
            {commit.hash.slice(0, 7)}
          </a>
          : {commit.message} |{" "}
          <small
            class={commit_messages_class}
            data-te-toggle="tooltip"
            title={commit.author_email}
          >
            {commit.author_name}
          </small>{" "}
          -{" "}
          <small
            class={commit_messages_class}
            data-te-toggle="tooltip"
            title={commit.date}
          >
            {getRelativeTimeSinceDate(new Date(commit.date))}
          </small>
        </>,
      );
    });
  }

  const files = await git.status();
  const number_of_changes =
    files.not_added.length +
    files.modified.length +
    files.renamed.length +
    files.deleted.length;
  const produce_files_jsx = (array: Array<string>, title: string) => {
    if (array.length > 0) {
      return (
        <>
          <p class="text-base font-bold">{title}</p>
          {array.map((item) => (
            <p class="text-xs font-light">{item}</p>
          ))}
        </>
      );
    }
  };
  const renamed_files_readable = files.renamed.map(
    (file) => `${file.from} => ${file.to}`,
  );
  const files_jsx = (
    <>
      {produce_files_jsx(files.not_added, "Not Added:")}
      {produce_files_jsx(files.modified, "Modified:")}
      {produce_files_jsx(renamed_files_readable, "Renamed:")}
      {produce_files_jsx(files.deleted, "Deleted:")}
    </>
  );

  return (
    <_root>
      <div class="flex flex-col w-full min-h-screen">
        <header class="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <Nav currentlySelected="repository" />
        </header>
        <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Panel
              title="Repository"
              svg={Icons.Repository}
              data={repository_folder_name}
              extra_info={`Path: ${repository_path}`}
            />
            <Panel
              title="Branches"
              svg={Icons.Branches}
              data={jsx_branches}
              extra_info={branches_message}
            />
            <Panel
              title="Files"
              svg={Icons.Files}
              data={files_jsx}
              extra_info=""
            >
              {number_of_changes > 0 ? <FileForm /> : <></>}
            </Panel>
            <Panel
              title="Commits"
              svg={Icons.Commits}
              data={commitMessages}
              reduce_data_text_size={true}
              extra_info=""
            />
          </div>
        </main>
      </div>
    </_root>
  );
};

export default Dashboard;
