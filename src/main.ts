import { App } from "octokit";
import { config } from "./config.js";
import { createDeployKeyIfNotExists } from "./deploy-key.js";

const app = new App({ appId: config.GH_APP_ID, privateKey: config.GH_PRIVATE_KEY });

await app.octokit.rest.apps.getAuthenticated();
const octokit = await app.getInstallationOctokit(config.GH_INSTALLATION_ID);
createDeployKeyIfNotExists(octokit);
