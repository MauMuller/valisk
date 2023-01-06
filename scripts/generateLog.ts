import { writeFile } from "fs";
import { exec } from "child_process";

interface ObjectType {
  commit: string;
  linkCommit: string;
  author: string;
  date: string;
  description: string;
}

exec("git log", (err, output) => {
  if (err) throw console.error("Erro ao executar o comando!");

  output = output.replaceAll(/commit(?=\s(\w*\d+))/g, "Commit:");

  const commitsArr = output.match(/((?<=Commit:\s)\w*(?=\n))/g);

  const linkToCommitsArr =
    commitsArr?.map((commit) => {
      return `https://github.com/MauMuller/valisk/commit/${commit}`;
    }) ?? [];

  const authorsArr = output.match(/((?<=Author:\s)\w+(?=\s))/g) ?? [];
  const datesArr = output.match(/(?<=Date:\s+).+(?=\n)/g) ?? [];
  const descriptionArr =
    output.match(/(?!\d)\n+\s+.+\n?\s+.+\n((?=\nCommit:)|$)/g) ?? [];

  const timeOfDate = datesArr.map(
    (data) => data.match(/(\d{2}:\d{2}:\d{2})/g)?.join("") ?? ""
  );
  const dayOfDate = datesArr.map(
    (data) => data.match(/(?<=\s)(\d{2}|\d{1})(?=\s)/g)?.join("") ?? ""
  );
  const monthOfDate = datesArr.map(
    (data) => data.match(/(?<=\s)[a-zA-Z]+(?=\s)/g)?.at(-1) ?? ""
  );
  const yearOfDate = datesArr.map(
    (data) => data.match(/(?<=\s)\d{4}(?=\s)/g)?.join("") ?? ""
  );

  const datesFormated = dayOfDate.map((day, indexDay) => {
    const month = monthOfDate[indexDay];
    const year = yearOfDate[indexDay];
    const time = timeOfDate[indexDay];

    const date: Date = new Date(`${month} ${day}, ${year} ${time}`);
    return `${date.toLocaleDateString()}`;
  });

  const removeOneBreakLineDescription = descriptionArr.map((desc) =>
    desc.replace("\n", "")
  );

  const arrayWithProperties =
    commitsArr?.reduce(
      (prev: Array<ObjectType>, current: string, index: number) => {
        const commit = { commit: current };
        const link = { linkCommit: linkToCommitsArr[index] };
        const author = { author: authorsArr[index] };
        const date = { date: datesFormated[index] };
        const description = {
          description: removeOneBreakLineDescription[index],
        };

        return [
          ...prev,
          { ...commit, ...link, ...author, ...date, ...description },
        ];
      },
      []
    ) ?? [];

  const templateBodyMarkdown = `## CHANGELOG\nAqui estão todos os commits realizados até o momento, acompanhe todos eles na lista abaixo!\n\n**Commits:**\n\n`;

  // const getPromisesAndReturnArray = async (
  //   arrayWithPromises: Array<Promise<Response>>
  // ) => {
  //   const response = [];

  //   for (const obj of arrayWithPromises) {
  //     response.push(await obj);
  //     console.log(response);
  //   }

  //   return response;
  // };

  // (async function () {
  //   const arrayWithPromises = arrayWithProperties.map((obj) =>
  //     fetch(
  //       `https://api.github.com/repos/maumuller/valisk/commits/${obj.commit}`
  //     )
  //   );

  //   const arrayData = await getPromisesAndReturnArray(arrayWithPromises);

  //   console.log(arrayData);

  // const statusFromURLs = arrayData.map((data) => data.status);

  // console.log(statusFromURLs);
  // })();

  const finalBody = arrayWithProperties.reduce(
    (prev: string, current: ObjectType) => {
      const { author, commit, date, description, linkCommit } = current;
      const linkAuthor = `https://github.com/${author}/`;

      return (
        prev +
        "- **" +
        commit +
        "**\n\n\tLink para o commit: [Ver modificações do commit](" +
        linkCommit +
        ")\n\n\tAutor: " +
        author +
        " - [" +
        linkAuthor +
        "](" +
        linkAuthor +
        ")\n\n\tData: " +
        date +
        "\n\n\t```" +
        description +
        "\t```\n\n<br />\n\n"
      );
    },
    templateBodyMarkdown
  );

  writeFile("CHANGELOG.md", finalBody, "utf8", (err) =>
    err
      ? console.log("Ocorreu um erro ao criar/modificar o CHANGELOG.md\n")
      : console.log("CHANGELOG.md criado/modificado com sucesso!\n")
  );
});
