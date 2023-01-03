import { exec } from "child_process";

const version = process.env.npm_package_version ?? "";
const numbers = version.split(".");

const [major, minor, patch] = numbers;

if (patch.search(/[0-8]/g) != -1 && major.search(/[1-9]/g))
  exec("npm version patch", (err) =>
    err ? "Erro ao atualizar o patch" : "Patch atualizado com sucesso!"
  );

if (patch === "9")
  exec("npm version minor", (err) =>
    console.log(
      err ? "Erro ao atualizar o minor" : "Minor atualizado com sucesso!"
    )
  );

if (minor === "9")
  exec("npm version major", (err) =>
    console.log(
      err ? "Erro ao atualizar o major" : "Major atualizado com sucesso!"
    )
  );

if (major === "0") {
  exec("npm version major", (err, output) => {
    if (err) throw new Error("Erro");

    console.log(output);
  });
}
