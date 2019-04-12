module.exports = ({
  name,
  url,
  filename,
}) => {
return `
{
  "name": "${name}",
  "version": "0.0.0",
  "description": "",
  "main": "./dist/${filename}.js",
  "module": "./dist/${filename}.esm.js",
  "sideEffects": false,
  "types": "declaration/index.d.ts",
  "scripts": {
    "start": "rollup -c -w",
    "build": "rollup -c && npm run declaration && print-sizes ./dist",
    "declaration": "rm -rf declaration && tsc -p tsconfig.declaration.json",
    "prerelease": "npm run build && prerelease",
    "release": "npm run build && release",
    "release:init": "npm run build && release -i"
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
