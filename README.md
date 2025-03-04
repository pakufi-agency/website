# Pakufi Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), build on top of [StartP theme](https://themeforest.net/item/startp-react-next-it-solutions-software-and-saas-template/23634564).
The project is bootstrapped with

- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Nextjs
- Typescript
- Bootstrap
- Sass
- Dynamic Contact Form
- Stripe

The project works in connection with a Headless CMS which can be found here: https://github.com/pakufi-agency/cms

## Before starting:

Before starting you will need:

- `Nodejs v.18+` (global)
- `npm` (global)
- `TypeScript v4.5.2`
- Env variables in .env.development

If you want to see the content and work on content, you will need to set up the (Headless CMS)[https://github.com/pakufi-agency/cms]

## Getting Started

1.

```bash
npm i
```

2. Then run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Good to know

- `next-env.d.ts.` is autogenerated so do not edit it. If you need to eclare custom type use `custom-types.d.ts`
- Check `scrpit` in `package.json` to learn which other useful scripts you can run.
- Next.js includes a [custom TypeScript plugin](https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin) and type checker, which VSCode and other code editors can use for advanced type-checking and auto-completion.

You can enable the plugin in VS Code by:

    Opening the command palette (Ctrl/⌘ + Shift + P)
    Searching for "TypeScript: Select TypeScript Version"
    Selecting "Use Workspace Version"

## Helpful resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Development Process

#### Before starting to work

1. sync `main` and `develop` branch with remote repository
2. run `npm i` again to be sure packages are in sync
3. If you need content remember to check out (cms repo)[https://github.com/pakufi-agency/cms] to see how to
4. create a new branch from `develop` and give it a meaningful name following best practice

#### After working

1. push your branch to `develop`
2. Open a PR and wait to be merge
3. each PR will have a preview link. Please review your code in production-like envirnoment
4. If you have to change content remember to check out (cms repo)[https://github.com/pakufi-agency/cms] to see how to

## Deployment pipeline

This repo is connected and automatically deployed to Netlify.
Whenever a new commit is pushed, a Preview link will be created and shared in Gituhub.
Whenever a code is merged in `main` it will be automatically be pushed on production.
Production configuration are saved in Netlify.
You can try the production configuration filling in the `.env.production` file and
running the production server with:

```bash
npm run build
npm start
```
