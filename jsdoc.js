module.exports = ({
    lib,
}) => `
{
    "plugins": [],
	"recurseDepth": 10,
	"opts": {
		"template": "./node_modules/daybrush-jsdoc-template",
		"destination": "./doc/"
    },
    "source": {
		"include": ["./src", "README.md"],
        "includePattern": "(.+\\\\.js(doc|x)?|.+\\\\.ts(doc|x)?)$",
        "excludePattern": "(^|\\\\/|\\\\\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    },
    "linkMap": {
        "IObject": "http://daybrush.com/utils/release/latest/doc/global.html#ObjectInterface"
    },
    "docdash": {
        "menu": {
            "Github repo": {
                "href": "https://github.com/daybrush/${lib}",
                "target": "_blank",
                "class": "menu-item",
                "id": "repository"
            }
        }
    }
}`;
