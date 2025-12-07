import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" ")}`;

const commands = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};

export default commands;