import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import alias from "rollup-plugin-alias";
import dts from "rollup-plugin-dts";
import multiEntry from "rollup-plugin-multi-entry";
import typescript from "rollup-plugin-typescript2";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
      dts(),
      json(),
      alias({
        applicationRoot: `${__dirname}`,
      }),
      peerDepsExternal(),
      commonjs(),
      resolve({
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
        preserveModules: true,
      },
    ],
    preserveModules: true,
    plugins: [
      json(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "tsconfig-rollup.json",
      }),
      multiEntry(),
    ],
  },
];
