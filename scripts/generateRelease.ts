import { writeFile } from "fs";
import { exec } from "child_process";

interface ObjectType {
  commit: string;
  linkCommit: string;
  author: string;
  date: string;
  description: string;
}

exec("cat ./.github/templates/RELEASE.md", (err, releaseTemplate) => {
  if (err) return Error("Erro ao capturar a RELEASE\n");

  exec("git log main..development", (err, comandOutput) => {
    if (err) return Error("Erro ao capturar o log\n");

    const inicialString = releaseTemplate ?? "";
    const firstCommit = inicialString.search(/(\-\s\*\*\[\w+\])/gim);

    const removedOldCommits =
      firstCommit != -1
        ? inicialString.substring(0, firstCommit)
        : inicialString;

    const outputResponse = comandOutput.replaceAll(
      /commit(?=\s(\w*\d+))/g,
      "Commit:"
    );
    const commitsArr = outputResponse.match(/((?<=Commit:\s)\w*(?=\n))/g);

    const linkToCommitsArr =
      commitsArr?.map((commit) => {
        return `https://github.com/MauMuller/valisk/commit/${commit}`;
      }) ?? [];

    const authorsArr = outputResponse.match(/((?<=Author:\s)\w+(?=\s))/g) ?? [];
    const datesArr = outputResponse.match(/(?<=Date:\s+).+(?=\n)/g) ?? [];
    const descriptionArr =
      outputResponse.match(/(?!\d)\n+\s+.+\n?\s+.+\n((?=\nCommit:)|$)/g) ?? [];

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

    const finalBody = arrayWithProperties.reduce(
      (prev: string, current: ObjectType) => {
        const { author, commit, date, description, linkCommit } = current;
        // const linkAuthor = `https://github.com/${author}/`;

        return (
          prev +
          "- **[" +
          commit +
          "](" +
          linkCommit +
          ")**\n\n\tData: " +
          date +
          "\n\n<br />\n\n"
        );
      },
      removedOldCommits
    );

    writeFile("./.github/templates/RELEASE.md", finalBody, "utf8", (err) =>
      err
        ? console.log("Ocorreu um erro ao criar/modificar a RELEASE.md\n")
        : console.log("RELEASE.md criada/modificada com sucesso!\n")
    );
  });
});
