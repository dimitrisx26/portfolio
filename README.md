# Portfolio

This project uses Angular 21.

## Node.js setup

Use Node.js 24.22.1 (pinned in `.nvmrc`):

```sh
nvm install
nvm use
npm ci
```

The supported runtime range is `^22.23.4 || ^24.22.1`. These minimum versions
include the [October 21, 2026 Node.js security fixes](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).
The project enables npm's `engine-strict` setting to reject installations on
older vulnerable releases and unsupported major versions.

Configure hosting builds and CI to use Node.js 24.22.1 or a newer 24.x patch.
For hosts that select Node.js by major version, select 24.x and verify the build
logs report at least 24.22.1. Rebuild and redeploy after changing the build runtime.
This app builds static browser assets and does not configure a Node.js server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via Vitest.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
