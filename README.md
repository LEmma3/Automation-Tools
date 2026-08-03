# Automation Tools in Cypress

Cypress-based test automation project with mochawesome reporting, ESLint, and Prettier integration.

## Prerequisites

- Node.js (see `dependencies` in `package.json` for version)
- npm

## Installation

```bash
npm ci
```

## Available Scripts

### Testing

| Script | Description |
|---|---|
| `npm test` | Runs the full Cypress suite and generates the merged HTML report |
| `npm run cy:run` | Clears old reports and runs Cypress tests |
| `npm run report` | Merges and generates the mochawesome HTML report |
| `npm run report:merge` | Merges individual mochawesome JSON reports into one |
| `npm run report:generate` | Generates the final HTML report from the merged JSON |

### Linting & Formatting

| Script | Description |
|---|---|
| `npm run lint` | Runs ESLint against the project |
| `npm run lint:fix` | Runs ESLint and automatically fixes fixable issues |
| `npm run format` | Formats all Cypress files and the Cypress config with Prettier |
| `npm run format:check` | Checks whether files are already formatted (used in CI; does not modify files) |

## Linting & Formatting Setup

### ESLint

Configured via `eslint.config.js` (flat config format). Includes:

- `eslint:recommended` base rules
- `eslint-plugin-cypress` recommended rules and globals for files under `cypress/**/*.js`
- Node globals for `cypress.config.js`
- `eslint-config-prettier`, applied last, to disable stylistic rules that would conflict with Prettier

### Prettier

Configured via `.prettierrc.json`:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 4,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

Files and folders excluded from formatting are listed in `.prettierignore` (`node_modules`, `cypress/reports`, `cypress/downloads`, `cypress/screenshots`, `cypress/videos`).

> **Note:** Formatting is not auto-applied in CI. Run `npm run format` locally before committing, or set up a pre-commit hook (e.g. `husky` + `lint-staged`) to format staged files automatically.

## Continuous Integration

GitHub Actions workflow: `.github/workflows/lint.yml`

The pipeline runs two jobs:

1. **`lint`** — installs dependencies, then runs:
   - `npm run lint` (ESLint)
   - `npm run format:check` (Prettier, check-only — fails the build if files aren't formatted)
2. **`test`** — runs the Cypress test suite. This job depends on `lint` (`needs: lint`) and only starts once linting has passed successfully.

Both jobs trigger on push and pull requests to `main`/`master`.

### Why lint runs before tests

Running lint checks first means broken formatting or lint errors are caught early, before spending CI time and resources spinning up and running the full Cypress suite.
