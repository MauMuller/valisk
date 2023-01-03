import { writeFile } from "fs";
import { exec } from "child_process";

exec("node -v", (err, output) => {
  if (err) return Error("Erro ao atualizar/criar a RELEASE\n");

  console.log(output);
  // writeFile("./.github/template/RELEASE.md", body, "utf8", (err) =>
  //   err
  //     ? console.log("Ocorreu um erro ao criar/modificar a RELEASE.md\n")
  //     : console.log("RELEASE.md criada/modificada com sucesso!\n")
  // );
});
