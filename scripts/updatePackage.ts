import { exec } from "child_process";

const version = process.env.npm_package_version ?? "";
const numbers = version.split(".");

const [major, minor, patch] = numbers;

if (patch.search(/[0-8]/g) != -1 && major.search(/[1-9]/g) != -1)
  exec("npm version patch");

if (patch === "9") exec("npm version minor");
if (minor === "9") exec("npm version major");
if (major === "0") exec("npm version major");

console.log(major);
