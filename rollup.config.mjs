import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.jsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    postcss({
      extensions: [".css"],
    }),
    babel({
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
