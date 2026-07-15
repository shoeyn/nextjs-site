import { relative } from "path";

const buildOxlintCommand = (filenames) =>
  `oxlint --fix ${filenames.map((f) => relative(process.cwd(), f)).join(" ")}`;

const buildOxfmtCommand = (filenames) =>
  `oxfmt --write ${filenames.map((f) => relative(process.cwd(), f)).join(" ")}`;

const commands = {
  "*.{js,jsx,ts,tsx}": [buildOxlintCommand, buildOxfmtCommand],
  "*.{css,json,md}": [buildOxfmtCommand],
};

export default commands;
