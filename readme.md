# Flights Project

## Demo

https://flights-git-main-yusuferenayas.vercel.app/

## Folder Structure

- `pages/` - contains all app pages
- `src/api/` - contains api calls
- `src/components/` - contains simple reusable components
- `src/containers/` - contains more complex reusable components with side-effects
- `src/pages/` - contains individual components for every page (if the child component is used only on one page, place it nested under its parent page)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

- `styled-components` - fully setup SSR and theming
- `jest` - unit testing. Run by command `yarn test`

## Code Quality Tools

Project uses: Eslint, Stylelint, Prettier.

All of them are run as `pre-commit` and `pre-push` hooks using Husky and LintStaged.

Respect these tools and do not push non-formated code to the repository.

- `yarn format` - runs prettier on all files
- `yarn format:check` - only checks formating issues using prettier
- `yarn lint:ts` - lints JS and TS file using eslint
- `yarn lint:css` - lints .CSS files and styled-components using stylelint
