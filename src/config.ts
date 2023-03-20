import { z } from "zod";

const configSchema = z.object({
  GH_APP_ID: z.coerce.string(),
  GH_PRIVATE_KEY: z.coerce.string(),
  GH_INSTALLATION_ID: z.coerce.number(),
  GH_OWNER: z.coerce.string(),
  GH_REPO: z.coerce.string(),
  GH_BRANCH: z.coerce.string(),
  GH_PUBLIC_DEPLOY_KEY: z.coerce.string(),
});

export const config = await configSchema.parseAsync(process.env);
export interface Config extends z.infer<typeof configSchema> {}
