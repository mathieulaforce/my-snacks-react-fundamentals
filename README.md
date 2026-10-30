> **Note:** this README was generated with AI (Claude) from the contents of the repository.

# My Snacks: React fundamentals

A hands-on training app that teaches the basics of React by building a **snack tier list**: snacks are ranked from S (best) to D (worst), can be moved between tiers, debated and added through a form.

Each lesson lives in its own folder under `src/` and is shown as a tab in the app, so you can walk through the concepts one step at a time.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173) and click through the tabs.

| Script             | What it does                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start the dev server with hot reload  |
| `npm run build`    | Type-check and build for production   |
| `npm run preview`  | Serve the production build locally    |
| `npm run lint`     | Run ESLint (includes Prettier checks) |
| `npm run lint:fix` | Fix lint and formatting issues        |

## Lessons

| Tab           | Folder                 | What it covers                                                                                                                                                                |
| ------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intro         | `src/00-intro`         | What JSX really is: the same heading written with `createElement` and with JSX, and embedding JavaScript expressions with `{}`.                                               |
| Components    | `src/01-components`    | Writing a component as a function that returns JSX, and reusing it.                                                                                                           |
| Props         | `src/02-props`         | Passing data into components with typed props, and conditional rendering.                                                                                                     |
| List          | `src/03-lists`         | Rendering lists with `map`, grouping snacks per tier, and why `key` matters. The **Demo** shows what goes wrong when you use the array index as key.                          |
| State         | `src/04-state`         | `useState`, state as a snapshot, updater functions (`c => c + 1`), pure updaters, and immutable updates versus mutating state.                                                |
| Rendering     | `src/05-rendering`     | When components re-render: children of a parent, components with their own state, `children` passed through a wrapper, `memo` and `useCallback`. Boxes flash on every render. |
| Forms         | `src/06-forms`         | Controlled inputs, `onSubmit` with `preventDefault`, and adding a new snack to the list.                                                                                      |
| Lifting state | `src/07-lifting-state` | Moving state up to a shared parent so siblings can use it, and deriving data (the "Hottest takes" leaderboard) instead of storing it in extra state.                          |
| Effects       | `src/09-effects`       | `useEffect` with a popcorn machine: setting up an interval, dependencies, and why cleanup matters. A log shows when effects run and clean up.                                 |

The List and State tabs have an **Example / Demo** switch: _Example_ shows the concept in the tier list, _Demo_ is a small experiment to try live.

## Project structure

```
src/
├── 00-intro … 09-effects   one folder per lesson, each with an index.tsx
├── shared/snacks.ts        the snack data, tiers and the Snack type
├── App.tsx                 the tab navigation that switches between lessons
├── App.css                 shared styles for all lessons
└── index.css               global styles and colour tokens (light and dark mode)
```

## Tech stack

- [React 19](https://react.dev) with TypeScript
- [Vite](https://vite.dev) for the dev server and build
- ESLint with the React Hooks rules, and Prettier for formatting
