module.exports = ({ name, filename }) =>
`
<p align="middle" >Logo</p>
<h2 align="middle">${name}</h2>
<p align="middle">
<a href="https://www.npmjs.com/package/${name}" target="_blank"><img src="https://img.shields.io/npm/v/${name}.svg?style=flat-square&color=007acc&label=version" alt="npm version" /></a>
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/${name}/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/daybrush/${name}.svg?style=flat-square&label=license&color=08CE5D"/></a>
</p>
<p align="middle">description</p>

## 📄 API Documents
* [API documentation](https://daybrush.com/${name}/release/latest/doc/)

## ⚙️ Installation
### npm
${"```"}bash
$ npm install ${name}
${"```"}

### scripts
* Unpackaged

${"```"}html
<script src="//daybrush.com/${name}/release/latest/dist/${filename}.min.js"></script>
${"```"}

* Packaged
${"```"}html
<script src="//daybrush.com/${name}/release/latest/dist/${filename}.pkgd.min.js"></script>
${"```"}

## 🚀 How to use
code

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to ${"`"}${name}${"`"} or other packages, please write the [issue](https://github.com/daybrush/${name}/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/daybrush/${name}/issues) on GitHub.


## 📝 License

This project is [MIT](https://github.com/daybrush/${name}/blob/master/LICENSE) licensed.

${"```"}
MIT License

Copyright (c) ${new Date().getFullYear()} Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
${"```"}`;
