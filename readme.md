# Express API template

Express API template written in in [TypeScript](https://www.typescriptlang.org). It uses [tslint](https://palantir.github.io/tslint/) for static analysis, [Prettier](https://prettier.io) for code formatting, [Jest](https://jestjs.io) for running tests, and [Supertest](https://github.com/visionmedia/supertest) for integration testing. Configured to be deployable to [Heroku](https://www.heroku.com).

It's recommended to use [nvm](https://github.com/creationix/nvm) to manage your Node versions.

## Install

Set the correct Node version with `nvm use`.

Install dependencies with `yarn install`.

## Configs

All configs go to `config/config.ts`. You can enter ENV variables to `.env` -file for local environment.

## Code conventions

Define routes in `app/app.ts`. Use common REST conventions.

Add controller logic to `app/contollers` directory. ie. `GET /foo` to `app/contollers/getFoo.ts`.

Separate other code to proper directories or put common code to `app/modules`.

## Tests

Add tests to same directories as the code. ie. Tests for `app/controllers/getFoo.ts` goes to `test/controllers/getFoo.ts`.

Run tests with `yarn test` or in watch mode with `yarn watch:test`.

Run static analysis and linters with `yarn lint`.

## Server

Start application with `yarn start`.

Start application in watch mode with `yarn s`.