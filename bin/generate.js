#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const gitRepo = "https://github.com/I-3B/react-mui-in.git";
const dependencies = [
  "@emotion/react",
  "@emotion/styled",
  "@hookform/resolvers",
  "@mui/icons-material",
  "@mui/material",
  "@tanstack/react-query",
  "@tanstack/react-query-devtools",
  "axios",
  "i18next",
  "i18next-browser-languagedetector",
  "react",
  "react-dom",
  "react-hook-form",
  "react-i18next",
  "react-router-dom",
  "stylis-plugin-rtl",
  "vite-tsconfig-paths",
  "yup",
];
const devDependencies = [
  "@types/react",
  "@types/react-dom",
  "@types/react-i18next",
  "@types/react-query",
  "@types/stylis",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "@vitejs/plugin-react",
  "@vitejs/plugin-react-swc",
  "eslint",
  "eslint-plugin-react",
  "typescript",
  "vite",
];
try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}
async function main() {
  try {
    console.log("Cloning git repository...");
    execSync(`git clone --depth 1 ${gitRepo} ${projectPath}`), { stdio: "inherit" };

    process.chdir(projectPath);

    console.log("Generating package.json...");

    execSync(`npx add-dependencies ${dependencies.join(" ")}`, { stdio: "inherit" });
    execSync(`npx add-dependencies ${devDependencies.join(" ")} --dev`, { stdio: "inherit" });

    // console.log("Removing useless files");
    // execSync("npx rimraf ./.git");
    // fs.rmSync(path.join(projectPath, "bin"), { recursive: true });
    execSync("git init", { stdio: "inherit" });
    console.log("\x1b[32m", 'Done. do "yarn install" to install dependencies', "\x1b[0m");
  } catch (error) {
    console.log(error);
  }
}
main();
