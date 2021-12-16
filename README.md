# Startsiden Guides web

Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature + [WordPress](https://wordpress.org) as the data source.

## How to use

### Prerequisites

First, make sure you have `Node.js` (**npm** or **yarn**) installed.

```
$ node -v
v12.x.x
```

Also, you can use `nvm` as a helpful tool to install the correct **node** and **npm**/**yarn** version.

### Installing the application

```
$ git clone https://github.com/vbrajcic/hackathon-2021 <my-project-name>
$ cd <my-project-name>
$ yarn
```

_This command will install all of the latest dependencies. Installation might take some time._

### Running the application

```
$ yarn dev
```

_Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser._

### Building the application

```
$ yarn build
```

_Builds the application for production usage._

---

## Built with

- [Next.js](https://github.com/vercel/next.js) as a [React](https://github.com/facebook/react/) framework for Static Generation and Server-side Rendering
- [TypeScript](https://github.com/microsoft/TypeScript) as a language for application-scale JavaScript
- [Sass](https://github.com/sass/dart-sass) as CSS pre-processor
- [Material-UI](https://github.com/mui-org/material-ui) as component library

## Libraries

In addition several smaller libraries are used. Instructions on how to use them are linked below.

| Library                                                 | Purpose                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- |
| [Nodemailer](https://github.com/nodemailer/nodemailer/) | for email sending                                       |
| [date-fns](https://github.com/date-fns/date-fns)        | for manipulating JavaScript dates                       |
| [clsx](https://github.com/lukeed/clsx)                  | for constructing `className` strings conditionally      |
| [ESLint](https://github.com/eslint/eslint)              | for making code more consistent and avoiding bugs       |
| [Stylelint](https://github.com/stylelint/stylelint)     | for avoiding errors and enforcing conventions in styles |
| [Prettier](https://github.com/prettier/prettier)        | for code formatting                                     |
| [Husky](https://github.com/typicode/husky)              | for preventing bad commit or push                       |

See `package.json` for a complete overview.

---

## Folder structure

```
.
├── components                                 # place for all reusable components
│   └── {ComponentName}                        # reusable component
│   │   ├── {ComponentName}.module.scss        # component styles
│   │   ├── {ComponentName}.tsx                # component
│   │   └── index.ts                           # for root component of a directory
├── config                                     # place to store all config data
├── lib                                        # place to store services, config, etc.
│   ├── api.ts                                 # API functions
│   ├── constants.ts                           # place to store all app constants
│   ├── fragments.ts                           # place to store all GraphQL fragments
│   └── queries.ts                             # place to store all GraphQL queries
├── pages                                      # place to store pages (routes); each page should match a route
│   ├── api                                    # API routes
│   ├── {page}                                 # place for page (route)
│   │   ├── [param].tsx                        # dynamic page (route)
│   │   └── index.tsx                          # page (route)
│   ├── _app.tsx                               # custom App
|   └── _document.tsx                          # custom Document
├── public                                     # place to store static files, like images
├── styles                                     # place to store global styles
├── types                                      # place to store all types
└── utils                                      # place to store all utility functions that are shared across the app

```

## Style Guide

As a "base" style guide, we'll be using the Airbnb's style guide ([website](https://airbnb.io/javascript/react) or [GitHub](https://github.com/airbnb/javascript)). Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

Full Style Guide: [https://github.com/profico/react-boilerplate-typescript/blob/master/style-guide.md](https://github.com/profico/react-boilerplate-typescript/blob/master/style-guide.md)

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket.org/profico/react-profico-web/).

## Contributing

If you're interested in contributing to this project, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before submitting a pull request.
