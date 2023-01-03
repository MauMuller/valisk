import { exec } from "child_process";

const version = process.env.npm_package_version ?? "";
const numbers = version.split(".");

const [major, minor, patch] = numbers;

const alertMessage =
  "\nCaso a versão não tenha sido atualizada, verifique se existe algum arquivo que necessita ser commitado!";

if (patch.search(/[0-8]/g) != -1 && major.search(/[1-9]/g) != -1)
  exec("npm version patch", () => console.warn(alertMessage));

if (patch === "9") exec("npm version minor", () => console.log(alertMessage));
if (minor === "9") exec("npm version major", () => console.log(alertMessage));
if (major === "0") exec("npm version major", () => console.log(alertMessage));
