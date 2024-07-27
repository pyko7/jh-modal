import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    postcss({
      extensions: [".css"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
  ],
  external: ["react", "react-dom"],
};
