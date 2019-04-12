module.exports = ({
  name,
  url,
  lib,
}) => {
return `
{
  "name": "${name}",
  "version": "0.0.1",
  "description": "new project",
  "main": "./dist/${lib}.js",
  "module": "./dist/${lib}.esm.js",
  "sideEffects": false,
  "types": "declaration/index.d.ts",
  "scripts": {
    "start": "rollup -c -w",
    "build": "rollup -c && npm run declaration && print-sizes ./dist",
    "declaration": "rm -rf declaration && tsc -p tsconfig.declaration.json",
    "doc": "rm -rf ./doc && jsdoc -c jsdoc.json",
    "prerelease": "npm run build && prerelease --dirs=dist,doc",
    "release": "npm run build && npm run doc && release --dirs=dist,doc",
    "release:init": "npm run build && release -i --dirs=dist,doc"
  },
  "repository": {
    "type": "git",
    "url": "git+${url}.git"
  },
  "author": "Daybrush",
  "license": "MIT",
  "bugs": {
    "url": "${url}/issues"
  },
  "homepage": "${url}#readme"
}
`;
}
