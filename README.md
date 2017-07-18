# React Relay Modern Starter Kit

This expanded starter kit is based on Facebook's [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit) and the [React Hot Loader Minimal Boilerplate](https://github.com/wkwiatek/react-hot-loader-minimal-boilerplate).

This kit includes an front-end dev server, and references an external service (on port 4000), and a transpiler that you can use to get started building an app with Relay. For a walkthrough with a slightly larger schema, see the [Relay tutorial](https://facebook.github.io/relay/docs/tutorial.html).

## Docs

This version of the boiler plate code includes a handful of assembled components to help get started on your application faster:
* [Relay "Modern"](https://facebook.github.io/relay/docs/relay-modern.html): Latest release of relay with many improvements.
* [react-md](https://react-md.mlaursen.com): A Material Design React Component library
* [graphql-js-schema-fetch](https://github.com/graphcool/get-graphql-schema): A library for fetching graphql schema from a remote server
* [Found-Relay](https://github.com/4Catalyzer/found-relay/tree/next): Relay "Modern" routing layer (currently in prerelease)
* [CSS](https://github.com/webpack-contrib/css-loader), [SASS](https://github.com/webpack-contrib/sass-loader) & [style](https://github.com/webpack-contrib/style-loader) Webpack Loaders
* [Yarn](https://yarnpkg.com/): New package manager from Facebook with better dependency handling and less errors.
* [React Hot Loader](https://github.com/gaearon/react-hot-loader): Support for automatically loading code changes to the dev server.

## Try it out
```
# First, start compatible GraphQL API server on port 4000

# Then build the project
yarn

# Cache the GraphQL schema from the back-end API
yarn run fetch-schema

# Start your hot-reloading dev server
yarn dev
```
