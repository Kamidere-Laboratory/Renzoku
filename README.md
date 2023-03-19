# Renzoku

## Usage
1. Setup envs that should be always same in [Dockerfile](./docker/Dockerfile)
2. Create image with `$ pnpm run build:image ${TAG}`
3. Setup rest of envs in your CI/CD
4. Add deploy keys in repository manually or via `$ pnpm run start`
5. Test commit and push
6. ...
7. Profit
