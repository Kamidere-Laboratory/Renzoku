import { App, Octokit } from "octokit";
import { config } from "./config.js";

export const createDeployKeyIfNotExists = async (octokit: Octokit) => {
  const { data: keys } = await octokit.rest.repos.listDeployKeys({
    owner: config.GH_OWNER,
    repo: config.GH_REPO,
  });
  if (!keys.some((key) => key.key === config.GH_PUBLIC_DEPLOY_KEY)) {
    const { data: createdKey } = await octokit.rest.repos.createDeployKey({
      key: config.GH_PUBLIC_DEPLOY_KEY,
      owner: config.GH_OWNER,
      repo: config.GH_REPO,
      title: "Renzoku",
      read_only: false,
    });
    console.log(createdKey);
  }
};
