module.exports = ({
    classname,
    filename,
}) => {
return `
import builder from "@daybrush/builder";

export default builder([
    {
        name: "${classname}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.js",
    },
    {
        name: "${classname}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.min.js",
        uglify: true,

    },
    {
        name: "${classname}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.pkgd.js",
        resolve: true,
    },
    {
        name: "${classname}",
        input: "src/index.umd.ts",
        output: "./dist/${filename}.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/index.ts",
        output: "./dist/${filename}.esm.js",
        exports: "named",
        format: "es",
    },
    {
        input: "src/index.ts",
        output: "./dist/${filename}.cjs.js",
        exports: "named",
        format: "cjs",
    },
]);
`;
}
