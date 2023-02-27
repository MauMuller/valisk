import { readFile, writeFile } from "fs/promises";
import { exec } from "child_process";

import { promisify } from "node:util";
const execComand = promisify(exec);

interface ObjectStructed {
  Commit: string;
  Author: string;
  Message: string;
  Merge?: string;
  Date: string;
}

try {
  const propsRegex = /(^[A-Z][a-z]+(?=\:))/;
  const valuesRegex = /(^[A-Z][a-z]+\:)/;
  const pathRelease = ".github/templates/RELEASE.md";

  const release = await readFile(pathRelease, {
    encoding: "utf-8",
  });

  const { stderr, stdout } = await execComand("git log");
  if (stderr != "") throw stderr;

  const logArrayStrings = stdout.split(/commit(?=\s\w+\n(Merge|Author))/);
  const arrayWithoutEmptyAndAuthorValues = logArrayStrings
    .filter((value) => !/Author(?!.+)/i.test(value))
    .filter((value) => value != "");

  const incrementCommitMessageOnHash = arrayWithoutEmptyAndAuthorValues.map(
    (value) => (/^\s\w+/i.test(value) ? `Commit:${value}` : value)
  );

  const formatedPropertiesToArray = incrementCommitMessageOnHash.map((item) => {
    const properties = item.split("\n");
    let messageFormated = "Message: ";

    properties.forEach((valueString) => {
      if (!propsRegex.test(valueString) && /(\S+)/.test(valueString))
        messageFormated += `${valueString}\n\n`;
    });

    const formedProperties = properties.filter((valueString) =>
      propsRegex.test(valueString)
    );

    return [...formedProperties, messageFormated];
  });

  const structedArrayWithCommitProperties: Array<ObjectStructed> =
    formatedPropertiesToArray.map(
      (arrayWithProperties) =>
        arrayWithProperties.reduce((prev, current) => {
          const key =
            current.match(new RegExp(propsRegex, "g"))?.join("") ?? "NoExist";

          const value = current.replaceAll(new RegExp(valuesRegex, "g"), "");
          const noFirstSpaceValue = value.replace(/\s+/, "");

          return { ...prev, [key]: noFirstSpaceValue };
        }, {}) as ObjectStructed
    );

  const cutValue = "<!--CutCommit-->";
  const previusCommitsIndex = release.indexOf(cutValue);
  const cuttedRelease = release.substring(
    0,
    previusCommitsIndex + cutValue.length
  );

  let formatedRelease = `${cuttedRelease}\n`;
  const lastVersionObjects = [];

  for (let structedObject of structedArrayWithCommitProperties) {
    if (/(^(\d\.\d\.\d)(?!\S+))/.test(structedObject.Message)) break;
    lastVersionObjects.push(structedObject);
  }

  lastVersionObjects.forEach((obj) => {
    const { Author, Commit, Date, Message, Merge } = obj;
    const linkCommit = `https://github.com/MauMuller/valisk/commit/${Commit}`;

    const existMerge = Merge ? `**Merge**: ${Merge} <br/>\n\t` : "";
    const existDate = Date ? `**Date**: ${Date} <br/>\n\t` : "";
    const existAuthor = Author ? `**Author**: ${Author} <br/>\n\t` : "";
    const existMessage = Message ? `**Message**: ${Message}` : "";

    const template = `\n- **[${Commit}](${linkCommit})**\n\n\t${existAuthor}${existDate}${existMerge}${existMessage}<br />\n`;
    formatedRelease += Commit ? template : "";
  });

  await writeFile(pathRelease, formatedRelease, "utf8");
  console.log("Arquivo criado/alterado com sucesso!");
} catch (err) {
  console.log(`Erro: ${err}`);
}
