import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const plugins = [
    typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
    }),
    terser(),
]

export default {
    plugins: plugins,
    input: "src/index.ts",
    output: [
        { file: "dist/index.esm.js", format: "esm", name: "Tooltip", sourcemap: true },
        { file: "dist/index.umd.js", format: "umd", name: "Tooltip", sourcemap: true }
    ],
}