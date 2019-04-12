module.exports = ({
    lib,
}) => {
return `
import builder from "@daybrush/builder";

export default builder([
    {
        name: "${lib}",
        input: "src/index.umd.ts",
        output: "./dist/${lib}.js",
    },
    {
        name: "${lib}",
        input: "src/index.umd.ts",
        output: "./dist/${lib}.js",
        uglify: true,

    },
    {
        name: "${lib}",
        input: "src/index.umd.ts",
        output: "./dist/${lib}.pkgd.js",
        resolve: true,
    },
    {
        name: "${lib}",
        input: "src/index.umd.ts",
        output: "./dist/${lib}.pkgd.min.js",
        resolve: true,
        uglify: true,
    },
    {
        name: "${lib}",
        input: "src/index.ts",
        output: "./dist/${lib}.esm.js",
        exports: "named",
        format: "es",
    },
]);
`;
}
