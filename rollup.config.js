module.exports = ({
    filename,
}) => {
return `
import builder from "@daybrush/builder";

export default builder([
    {
        name: "${filename}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.js",
    },
    {
        name: "${filename}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.js",
        uglify: true,

    },
    {
        name: "${filename}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.pkgd.js",
        resolve: true,
    },
    {
        name: "${filename}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        name: "${filename}",
        input: "src/index.ts",
        output: "./dist/${filename}.esm.js",
        exports: "named",
        format: "es",
    },
]);
`;
}
