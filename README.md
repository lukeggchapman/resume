<p align="center">
  <img alt="Gatsby" src="/src/images/chappo-icon.png" width="60" />
</p>
<h1 align="center">
  Luke Chapman's Résumé
</h1>

[![Build Status](https://travis-ci.org/lukeggchapman/resume.svg?branch=master)](https://travis-ci.org/lukeggchapman/resume)
[![Maintainability](https://api.codeclimate.com/v1/badges/9b5a073c72ef6a2c6b04/maintainability)](https://codeclimate.com/github/lukeggchapman/resume/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9b5a073c72ef6a2c6b04/test_coverage)](https://codeclimate.com/github/lukeggchapman/resume/test_coverage)

Résumé created using [React](https://reactjs.org/), and [React-PDF](https://react-pdf.org) demonstracting my programming and codebase management abilities. The original implementation using [Gatsby Framework](https://www.gatsbyjs.org/) can be viewed on the [gatsby branch](../../tree/gatsby).

## :rocket: Quick start

1.  **Run development environment.**

    This project uses the Yarn package manager. [Install it if you don't have it already](https://yarnpkg.com/en/docs/install).

    Navigate into the resume directory.
    Install project dependencies:

    ```sh
    yarn
    ```

    Run webpack development environment:

    ```sh
    yarn develop
    ```

    Your browser should open to [http://localhost:8080/](http://localhost:8080/).

2.  **Run unit tests.**

    Navigate into the resume directory.

    ```sh
    yarn test
    ```

3.  **Compile PDF**

    Navigate into the resume directory.

    ```sh
      yarn build
    ```

    LukeChapman-Resume.pdf will be created in the `dist` folder.

## :microscope: What's inside?

1.  **ESLint & Prettier combination**

    Prettier is an opinionated and hassle free tool for managing code formatting style. It's recommended to enable Prettier "Format On Save" using a tool similar to the [Prettier VS code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

    Eslint is useful for finding problematic patterns in the code as well as formatting style. I'm using the recommend settings from airbnb, typescript, react and prettier with [some minor adjustments](.eslintrc.js).
    Linting is ran each commit by a git hook thanks to husky.

2.  **Typescript**

    Everything is written using [TypeScript](https://www.typescriptlang.org/) with strict typing enabled.

3.  **Jest & Enzyme unit testing**

    Jest unit tests are used throughout and the pattern applied is that they live in a \_\_tests\_\_ child directory to the unit being tested. The files also have the extension .test.ts or .test.tsx for clear seperation when editing files.
    Unit tests are ran each commit by a git hook thanks to husky.

4.  **Content management**

    Content is seperated from the souce code in the [content directory](src/content), it is then loaded using webpack then transformed to a markdown abstract syntax tree (AST) then transformed into a HTML abstract syntax tree (or [HAST](https://github.com/syntax-tree/hast)) for which I've written a [basic transform](src/utils/hastToPDF/hastToPDF.tsx) to a format that can be used by React-PDF.

5.  **React generated PDF**

    My original goal was to create my resume PDF using React so that I would have full control over reusable components, JSX formatting and CSS styling. Kendo React UI has a [great tool](https://www.telerik.com/kendo-react-ui/components/pdfprocessing/) for transforming React into PDF, but the trial license is only for 30 days and I'd like to include the resume PDF generation in open source projects in the future. For these reasons I've chosen to use [React-PDF](https://react-pdf.org/). The implementation of the resume PDF can be see [here](src/Resume.tsx).

6.  **Customised typography**

    The final resume PDF uses 4 open licensed fonts that have been configured for use in React-PDF. 3 text fonts used for the [body and headings](src/components/typography/typography.ts), and Font Awesome Free for [icons](src/components/FAIcon.tsx).
