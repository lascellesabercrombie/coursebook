---
title: Node & npm introduction
description: Learn how to use Node and npm to run JS on your machine
tags:
  - workshop
  - js
keywords:
  - js
  - node
  - npm
---

Node is a version of JavaScript that works outside of a web browser. It was created so web developers who already knew JS could use the same language to write HTTP servers, CLI programs and more.

## Node JS vs Browser JS

Node is basically the JS engine from the Chrome web browser, plus some extra features for things browsers cannot do, like making HTTP servers or accessing files on the computer.

Since Node uses the JS language it has the same syntax, keywords and features as JS in the browser. However (just like browsers) different versions of Node support different new language features. Something that was added to JS in Chrome may not be available in Node yet (and vice versa).

The main difference to browser-JS is that Node has no `window` or `document` global objects (and so none of the things inside them like `querySelector`), since those concepts only make sense in a browser.

## Installation

You'll need to have Node installed on your computer to follow this workshop. Check whether it is already installed by running this in your Terminal:

```shell
node --version
```

You should see a version number printed. If you get an error that means Node isn't installed. Follow [our installation guide](/course/handbook/installation/#node) then try again.

Our programme relies on some features that were only added in Node version 18 (the current version), so if you have an older version than that you should install the newer one with:

```shell
volta install node@18
```

## Using Node

The Node installation on your computer comes with a command-line program called `node`. This allows you to use the `node` command in your Terminal to run JS code.

### REPL

The quickest way to try Node out is with the "REPL". This stands for "read, eval, print, loop" and is a quick playground for running code (most languages come with one).

Run this command in your Terminal to start the REPL:

```shell
node
```

You should see something like:

```
Welcome to Node.js v18.5.0.
Type ".help" for more information.
>
```

You can type JS code in here, then hit "Enter" to execute it (just like a browser console).

### JS files

The REPL is mostly for playing around. To write a real program you need `.js` files. You can tell Node to run a JS file by passing its path as an argument:

```shell
node my-file.js
```

Node will parse the JS code in the file, execute it, and display anything logged in your terminal.

{% box %}

#### Try it

1. Create a folder called `node-intro`
1. Create a file inside named `add.js`
1. Define an `add` function that can add two numbers
1. Call the function and log the result
1. Run your file in your Terminal

You should see the result printed in your terminal.

{% disclosure %}

```shell
mkdir node-intro
cd node-intro
touch add.js
code .
```

```js
// add.js
function add(x, y) {
  return x + y;
}

console.log(add(4, 6)); // Logs: 10
```

```shell
node add.js
```

{% enddisclosure %}

{% endbox %}

## Node package manager

Node comes with a "package manager" called npm. This is a way to easily install and use code written by other people. This is generally more robust than just copy/pasting code from the internet.

The npm company maintain a registry that anyone can upload code to, containing thousands of 3rd party modules. They also have a command-line program for managing those modules in your project. This comes with Node, so you should already have this CLI available:

```shell
npm --version
```

### `package.json` file

Node projects usually have a configuration file called `package.json`. This is a special file that lists information about the project, including any _dependencies_. These are modules installed from npm that your project uses.

### `npm init`

This command will "initialise" your project by asking you some questions then creating the `package.json`.

You can pass the `-y` flag to skip all the questions and create the `package.json` with the defaults. You can edit the JSON file by hand later if you need to. You also don't _have_ to use this command—you can manually create an empty `package.json` if you'd prefer:

```shell
echo "{}" > package.json
```

### `npm install`

This is how you install 3rd party modules to use in your code. For example to install the very useless `cowsay` module:

```shell
npm install cowsay
```

npm will list the module in the `"dependencies"` field in your `package.json`:

```json
{
  "dependencies": {
    "cowsay": "^4.1.2"
  }
}
```

Now when another developer needs to work on your project they can clone your repo then run just this command:

```shell
npm install
```

npm will read the dependencies listed in the `package.json` and automatically download all the 3rd party modules required to run the project.

npm will also create a directory named `node_modules` and put all the 3rd party code in there. This will be quite large, since modules you install can have their own dependencies (and those dependencies can depend on _other_ modules...). Since this directory gets so big it's common to add it to the `.gitignore` file.

#### Development dependencies

Some 3rd party modules are only used for development purposes. E.g. a testing library or a linter. You can mark a module as a dev dependency with the `-D` flag when you install:

```shell
npm install -D cowsay
```

This will put it under the `"devDependencies"` field in the `package.json`. This helps during deployment—it's quicker not to install a bunch of modules that aren't actually needed for your production server.

#### Global modules

You can also install modules "globally" on your computer using the `-g` flag. This makes them available to use anywhere in your terminal, and so is sometimes used as an alternative to Homebrew or `apt-get`.

You shouldn't use global modules in your Node apps, since they aren't listed in the `package.json` and so won't be installed automatically if another developer clones your repo and runs `npm install`.

### npm scripts

It's common for modules you install to have command-line programs you can run in your terminal. E.g. the popular ESLint linter installs a CLI so you can check your code by running a command like `eslint add.js`.

npm installs dependency CLIs into `node_modules/.bin/`. This means you can run the `cowsay` CLI we just installed in our terminal like this:

```shell
node_modules/.bin/cowsay hello
```

However this is pretty awkward to type, especially if it's a command we need to use a lot (like "start the dev server"). Luckily npm scripts make this nicer.

npm automatically creates a field called `"scripts"` in your `package.json`. These are shortcuts for different tasks you might want to do while developing your app. They're like per-project command-line aliases.

npm will automatically add `./node_modules/.bin` to the path of any command you use in these scripts. So you could add a "greet" script like so:

```json
{
  "scripts": {
    "greet": "cowsay hello"
  }
}
```

You can run npm scripts in your terminal with `npm run <name>`. So in this case:

```shell
npm run greet
```

{% box %}

### Try it

1. Initialise your project to create a `package.json`
1. Install the `cowsay` module as a dev dependency
1. Look in the `node_modules` folder—can you see `cowsay`?
1. Run `node_modules/.bin/cowsay hello` in your terminal
1. Add `"greet": "cowsay hello"` to your npm scripts
1. Run `npm run greet` in your terminal

You should see something like this:

```shell
 _______
< hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

{% endbox %}
