import { git } from "@lib/server";

/**
 * Gets the name of a git repository
 * @returns folderName, path
 */
export const get_repository_names = async (): Promise<[string, string]> => {
  const repository_name_full_path = await git.revparse("--show-toplevel");
  const repository_name_split = repository_name_full_path.split(/[\\/]/);
  const repository_name_short =
    repository_name_split[repository_name_split.length - 1];

  return [repository_name_short, repository_name_full_path];
};

/**
 * Gets the local branches and marks the currently checked out one
 * @returns currentBranch, branches
 */
export const get_branches_and_current = async (): Promise<
  [string, Array<string>]
> => {
  const branches = await git.branchLocal();
  const branchesWithCurrentMarked = branches.all.map((branch) =>
    branch === branches.current ? `${branches.current} *` : branch,
  );

  return [branches.current, branchesWithCurrentMarked];
};

/**
 * Gets the remote branches excluding current local ones
 * @returns branches
 */
export const get_branches_remote = async (): Promise<Array<string>> => {
  const local_branches = (await git.branchLocal()).all;
  const remote_branches = (await git.branch()).all;

  for (let index = 0; index < local_branches.length; index++) {
    const element = local_branches[index];
    const position = remote_branches.indexOf(element);
    if (position !== -1) {
      remote_branches.splice(position, 1);
    }
  }

  return remote_branches;
};

/**
 * Gets the relative time since a date
 * @returns relative_time_string
 */
export const getRelativeTimeSinceDate = (date: Date) => {
  const now = new Date();
  // @ts-ignore
  const difference = now - date;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}
