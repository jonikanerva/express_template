# Express REST API template

## Install

Install dependencies with `yarn install`.

## Configs

All configs and secrets go to `config/config.js`. You can enter ENV variables to `.env` -file.

## Migrations

Generate database migrations from the CLI with `pg-migrate create migration_name`, this generates an unique file to `/migrations/[timestamp]_migration_name.js`. Add `up` and `down` functions to generated file.

Run migrations from the CLI with `yarn migrate`.

## Routes

Define routes in `routes/routes.js` and add controller logic to `routes/[scope].js`. ie. `/foo` to `routes/foo.js`.

## App logic

Shared code goes to `/src`.

## Tests

Add controller tests `test/[scope]_test.js`. ie. `/foo` to `test/foo_test.js`.

Run tests with `yarn test`.

## Server

Start application with `yarn start`.
