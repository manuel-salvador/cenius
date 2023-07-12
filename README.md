# Cenius

Central system for intelligently managing your e-commerce

## Features

- Product management: Add, edit, and delete products, including details such as name, description, price, images, etc.
- Category management: Create and organize categories for better product organization.
- Inventory control: Track product stock and receive inventory shortage alerts.
- Order processing: View, update, and manage orders placed by customers.
- User management: Manage users with different roles and access permissions.
- Statistics and analytics: Generate reports and statistics on sales, visits, and other relevant metrics.

## System Requirements

- NODE >= 18.0
- npm

## Recommended IDE Configuration

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by following these steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Initial Project Setup

### 1. Clone the repository

```sh
git clone https://github.com/manuel-salvador/cenius.git
```

### 2. Install dependencies

```sh
npm install
```

### 3. Compile and Hot-Reload for Development

```sh
npm run dev
```

## Other commands

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
