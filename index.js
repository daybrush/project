#!/usr/bin/env node
'use strict';

const args = require('args');
const shell = require('./utils').shell;
const pkgFunction = require('./package');
const rollupFunction = require('./rollup.config');
const jsdocFunction = require("./jsdoc");
const utils = require("@daybrush/utils");
const fs = require("fs");


args.option('name', 'Project name');

const flags = args.parse(process.argv);
const url = shell(`git remote get-url origin`).trim();

const name = flags.name;
const lib = name.split("/").slice(-1).join("").toLowerCase();
const classname = utils.camelize(" " + lib);
const filename = lib.toLowerCase();
const pkg = pkgFunction({
  name: flags.name,
  url,
  filename,
});
const rollupConfig = rollupFunction({
    classname,
    filename,
});
const jsdocConfig = jsdocFunction({
    lib,
})


fs.writeFileSync("./package.json", pkg);
fs.writeFileSync("./jsdoc.json", jsdocConfig);
fs.writeFileSync("./rollup.config.js", rollupConfig);

[
    "tsconfig.json",
    "tsconfig.test.json",
    "tsconfig.declaration.json",
    "tslint.json",
    "1.gitignore",
    "1.npmignore",
    "1.editorconfig",
].forEach(filename => {
    fs.copyFileSync(`${__dirname}/${filename}`, `./${filename.replace(/^1/g, "")}`);
});

shell(`npm i @daybrush/utils --save`);
shell(`npm i typescript tslint print-sizes @daybrush/builder @daybrush/release @daybrush/jsdoc daybrush-jsdoc-template -D`);

