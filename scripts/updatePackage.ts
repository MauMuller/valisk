import { exec } from "child_process";

const version = process.env.npm_package_version ?? "";
const numbers = version.split(".");

const [major, minor, patch] = numbers;

const errorMessage = "Faça commit dos arquivos no modo staged.";
const sucessMessage = "A versão do pacote foi atualizada.";

if (patch.search(/[0-8]/g) != -1 && major.search(/[1-9]/g) != -1)
  exec("npm version patch", (err) =>
    console.log(err ? errorMessage : sucessMessage)
  );

if (patch === "9")
  exec("npm version minor", (err) =>
    console.log(err ? errorMessage : sucessMessage)
  );
if (minor === "9")
  exec("npm version major", (err) =>
    console.log(err ? errorMessage : sucessMessage)
  );
if (major === "0")
  exec("npm version major", (err) =>
    console.log(err ? errorMessage : sucessMessage)
  );
