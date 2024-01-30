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
    const local_branches = (await git.branchLocal()).all
    const remote_branches = (await git.branch()).all

    for (let index = 0; index < local_branches.length; index++) {
        const element = local_branches[index];
        const position = remote_branches.indexOf(element)
        if (position !== -1) {
            remote_branches.splice(position, 1)
        }
    }

    return remote_branches
};
