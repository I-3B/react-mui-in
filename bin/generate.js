#!/usr/bin/env node

const { execSync, exec } = require("child_process");
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
    fs.renameSync(`${projectPath}/source/*`, `${projectPath}/`);
    execSync("npx rimraf ./.git");
    fs.rmSync(path.join(projectPath, "bin"), { recursive: true });
    execSync("git init", { stdio: "inherit" });
    console.log("\x1b[32m", 'Done. do "yarn install" to install dependencies', "\x1b[0m");
  } catch (error) {
    console.log(error);
  }
}
main();
