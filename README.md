# js-band-hw-task-7

Demo: http://marunyak.github.io/js-band-hw-task-7/#/todos

## Description
It is todo-list application. Which includes next functionality:
* Todo-item with a title, description, priority fields and a default status - open;
* Edit all todo-item fields;
* Move todo-item in done status;
* Delete todo-item
* Search todo-item by title;
* Filter todo-item by status;
* Filter todo-item by priority.

## Table of Contents
* [Project structure](#project-structure)
* [Installation](#installation)
* [Available console commands](#other-commands)
* [Technologies](#technologies)
* [Scripts description](#scripts-description)
* [Status](#status)
* [License](#license)

## Project structure
```sh
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── actions/
│   │   ├── filter.jsx
│   │   ├── index.jsx
│   │   ├── filter.jsx
│   │   ├── modal.jsx
│   │   ├── popup.jsx
│   │   └── todo.jsx
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Main.jsx
│   ├── pages/
│   │   ├── NotFoundPage/
│   │   │   └── index.jsx
│   │   └── TodosPage/
│   │       ├── components/
│   │       │   ├── CreateTask.jsx
│   │       │   ├── Filter.jsx
│   │       │   ├── Task.jsx
│   │       │   └── TaskList.jsx
│   │       └── index.jsx
│   ├── reducers/
│   │   ├── filter.jsx
│   │   ├── index.jsx
│   │   ├── filter.jsx
│   │   ├── modal.jsx
│   │   ├── popup.jsx
│   │   └── todo.jsx
│   ├── store/
│   │   └── index.jsx
│   └── index.jsx
├── .eslintrc
├── .gitignore
├── .travis.yml
├── package-lock.json
└── package.json
```
## Installation
1. Clone the reprository:
```sh
$ git clone https://github.com/marunyak/js-band-hw-task-6.git
```
2. Use [npm](https://npmjs.org/) to install node_modules
```sh
$ npm install
```
3. Run project:
```sh
$ npm start
```

## Available console commands
For build project:
```sh
$ npm run build
```
For test project:
```sh
$ npm test
```
For lint project:
```sh
$ npm run lint
```
For fix errors which lint found in project:
```sh
$ npm run fix
```

## Technologies
 - [React](https://reactjs.org/) - JavaScript library for building user interfaces
 - [Redux](https://redux.js.org/) - a predictable state container for JavaScript apps
 - [Babel](https://babeljs.io/) - toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers
 - [Webpack](https://webpack.js.org/) - tool for bundle scritps
 - [Travis](https://docs.travis-ci.com/user/customizing-the-build/) - tool for CI
 - [Eslint](https://eslint.org/) - tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
 - [Jest](https://jest.io/) - tool for testing
 - [Bootstrap](https://bootstrap-4.ru/docs/4.3.1/getting-started/introduction/) - toolkit for developing with HTML, CSS, and JS

## Scripts description
* `./public/index.html` - main html file;
* `./public/favicon.ico` - icon for html page;
* `./src/actions/filter.jsx` - consist all filter actions logic;
* `./src/actions/todo.jsx` - consist all actions logic;
* `./src/actions/filter.jsx` - consist filter actions;
* `./src/actions/modal.jsx` - consist modal actions;
* `./src/actions/popup.jsx` - consist popup actions;
* `./src/componetns/App.jsx` - file for routing;
* `./src/componetns/Header.jsx` - header component;
* `./src/componetns/Main.jsx` - main component;
* `./src/componetns/Footer.jsx` - footer component;
* `./src/pages/NotFoundPage/index.jsx` - render page not found;
* `./src/pages/TodosPage/components/CreateTask.jsx` - modal component for creating task;
* `./src/pages/TodosPage/components/Filter.jsx` - filter component;
* `./src/pages/TodosPage/components/Task.jsx` - task component;
* `./src/pages/TodosPage/components/TaskList.jsx` - tasklist component;
* `./src/pages/TodosPage/index.jsx` - root component TodosPage;
* `./src/reducers/filter.jsx` - consist all filter reducers logic;
* `./src/reducers/index.jsx` - combine all reducers files;
* `./src/reducers/todo.jsx` - consist reducer for todo;
* `./src/reducers/modal.jsx` - consist reducer for modal;
* `./src/reducers/popup.jsx` - consist reducer for popup;
* `./src/reducers/filter.jsx` - consist reducer for filter;
* `./src/store/index.jsx` - file createStore;
* `./src/index.jsx` - file which render all page;
* `./src/componetns/TodosPage.jsx` - our main component;
* `.eslintrc` - file for lint configuration;
* `.travis.yml` - file for CI configuration;
* `.gitignore` - ignore files when we push project in repo;
* `package-lock.json` - automatically generated for any operations where npm modifies either the node_modules tree, or package.json;
* `package.json` - file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

## Status
Project is: _in progress_

## License
[ISC]
