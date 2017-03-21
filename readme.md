# Express REST API template

Express REST API with PostgreSQL database.

**This is a work in progress.**

## Install

Install dependencies with `yarn install`.

## Codestyle

[JavaScript Standard Style](https://standardjs.com) is enforced.

## Configs

All configs and secrets go to `config/config.js`. You can enter ENV variables to `.env` -file.

## Migrations

Generate database migrations from the CLI with `pg-migrate create migration_name`, this generates an unique file to `/migrations/[timestamp]_migration_name.js`. Add `up` and `down` functions to generated file.

Run migrations from the CLI with `yarn migrate`.

## Routes, Controllers, Models, and Helpers

Define routes in `config/routes.js`. Use common REST conventions.

Add controller logic to `app/contollers/[scope].js`. ie. `/foo` to `app/contollers/foo.js`.

Add database logic to `app/models/[table_name].js` when applicable. If queries include multiple tables figure out the most suitable file.

Modules that are not controllers or models are called "helpers" and their code goes to `app/helpers` -directory.

## Tests

Add controller tests `test/controllers/[scope]_test.js`. ie. `/foo` to `test/controllers/foo_test.js`.

Add model tests `test/models/[table_name]_test.js` and helper tests to `test/helpers/[helper_name]_test.js`.

Run tests with `yarn test`.

## Server

Start application with `yarn start`. Start application with nodemon with `yarn s`.
