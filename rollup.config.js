import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from "@rollup/plugin-json";
import alias from "rollup-plugin-alias";
import multiEntry from "rollup-plugin-multi-entry";
const { nodeResolve } = require("@rollup/plugin-node-resolve");
export default [
  {
    input: "index.ts",
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
      {
        file: "build/index.es.js",
        format: "esm",
      },
    ],
    plugins: [
      json(),
      alias({
        applicationRoot: `${__dirname}`,
      }),
      peerDepsExternal(),
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
        mainFields: ["browser", "jsnext:main", "module", "main"],
      }),
      inject({
        window: "global/window",
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "tsconfig-rollup.json",
      }),
    ],
  },
  {
    input: ["index.ts", "**/*.tsx"],
    output: [
      {
        dir: "build",
        format: "cjs",
        sourcemap: true,
      },
    ],
    preserveModules: true,
    plugins: [
      json(),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "tsconfig-rollup.json",
      }),
      multiEntry(),
    ],
  },
];
