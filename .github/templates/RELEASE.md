## Nova versão

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu.

## Enredo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu. Aenean lectus tellus, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultricies. Mauris lacinia at metus pulvinar tempor.

## Atualizações

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor lobortis massa, nec consectetur lectus ultricies eu. Aenean lectus tellus, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultricies. Mauris lacinia at metus pulvinar tempor.

### Lista de Atualizações

- Lorem ipsum dolor sit amet:

  aaaaaaaa

- Lorem ipsum dolor sit amet:

  bbbbbbbb

- Lorem ipsum dolor sit amet:

  cccccccc

## Bugs Corrigidos

us, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultrici

## Considerações Finais

us, rhoncus at est ut, rutrum vulputate neque. Ut ultricies semper turpis at lobortis. Curabitur gravida, dui nec finibus aliquam, est nisi maximus libero, sed euismod diam turpis fringilla purus. Fusce vehicula tellus non urna tempus elementum. Aliquam non velit fermentum, gravida leo at, interdum sem. Maecenas sagittis diam non pharetra ultrici

## Commits feitos nessa versão

<!--CutCommit-->

- **[3e9b2111150bcc1b8942f9b8341895ac7ffada5d](https://github.com/MauMuller/valisk/commit/3e9b2111150bcc1b8942f9b8341895ac7ffada5d)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 27 09:16:34 2023 -0300
	**Message**: 📝 (README.md): Atualização da documentação

    Adicionado novas features na documentação, com tags de 'novo', além de exemplificar com a sintaxe e descrição dos métodos

<br />

- **[1a59bf78cc4bfff3496b53396249811524811849](https://github.com/MauMuller/valisk/commit/1a59bf78cc4bfff3496b53396249811524811849)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 24 15:37:04 2023 -0300
	**Message**: 🔨 (generateRelease.ts & release.md): Refatoração do gerador de commits + release melhorada

    Precisei refatorar o código que havia feito com o generateRelease, agora usando async await com incremento de todos os commit feitos na versão atualizada, mostrando o link, commit, autor, data e mensagem realizada no commit, facilitando a maneira de localizar cada uma das features caso seja necessário

<br />

- **[2ba087d0be986fc6f5262a7d4e4c8a49de8b0de7](https://github.com/MauMuller/valisk/commit/2ba087d0be986fc6f5262a7d4e4c8a49de8b0de7)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Thu Feb 23 17:33:34 2023 -0300
	**Message**: ✨ (useValiskContext & ValiskProvider): Adição de contexto para os componentes da lib

    Foi incrementado duas funcionalidades novas, elas são usadas em conjunto, algo parecido com a funcionalidade de contexto do react-hook-form. Ela servirá para reutilização de métodos através de componentes, ou seja, é possivel trabalhar com os dados em arquivos separados e reutilizar esses métodos da biblioteca para atráves dos filhos e compoentes, fazendo a declaração do useValisk apenas no componente pai.

<br />

- **[c05e4e0fc7d4a77d3b42867c74ac04b54897301c](https://github.com/MauMuller/valisk/commit/c05e4e0fc7d4a77d3b42867c74ac04b54897301c)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Thu Feb 23 17:29:58 2023 -0300
	**Message**: 🐛 (useValisk): Adição de uma condição para não gerar erro

    Foi preciso adicionar uma condição dentro dos métodos 'masks' e 'forceUpdate' para que caso sejam informados em campos que não possuem configuração, apenas não executam nenhuma máscara, mas não retornaram erro algum, isso é útil para deixar dados em componentes e assim não precisar fazer condições desnecessárias para ter máscaras apenas em campos que foram cadastrados

<br />

- **[5b3d8144fa07375da607e958b63a0e7a32d079e6](https://github.com/MauMuller/valisk/commit/5b3d8144fa07375da607e958b63a0e7a32d079e6)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Thu Feb 23 10:56:53 2023 -0300
	**Message**: ✏️ (Geral): Ajuste das tipagens com nomes alterados em diversos arquivos

    Foi ajustado as tipagens para os arquivos que ainda estavam com os nomes antigos das tipagens alteradas no commit anterior, agora, com tudo funcionando.

<br />

- **[fff3124bde9c523d4a0ed595616d5036ec57b93c](https://github.com/MauMuller/valisk/commit/fff3124bde9c523d4a0ed595616d5036ec57b93c)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Thu Feb 23 10:23:09 2023 -0300
	**Message**: 🏷️ ((Nomes das tipagens)): Melhoria no nome das tipagens, deixando de uma forma mais intuitiva

    Ajustei os nome de todas as tipagens que estão, atualmente, disponiveis para utilização, mantendo elas de uma forma mais intuitiva, declarando as funções com o seu nome + 'type' e os parametros com o incremento do 'entry'

<br />

- **[6fbbf90665380ed89fd2b652f828dba74385937a](https://github.com/MauMuller/valisk/commit/6fbbf90665380ed89fd2b652f828dba74385937a)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Wed Feb 15 15:25:22 2023 -0300
	**Message**: ♻️ (configEntry): Mudança no nome da funcionalidade, adotando o padrão dos hooks modernos, com o "use"

    Mudanças no padrão de nome da nova funcionalidade criada, com ela, sendo assim possível identificar o hook

<br />

- **[9b68e0b826a48349a8e8216617d30e640b8337c6](https://github.com/MauMuller/valisk/commit/9b68e0b826a48349a8e8216617d30e640b8337c6)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Wed Feb 15 15:13:14 2023 -0300
	**Message**: ✨ (configEntry & types): Nova funcionalidade para lib e novas tipagens disponiveis

    Nessa atualização, foi criado uma funcionalidade de utilidade, o "configEntry" faz o papel de criar um novo estilo de estrutura de entrada para as configurações da lib, algo que serve para quem deseja separar todos os dados dos código, criando assim uma máscara para cada dado sem específicar o name dela diretamente dentro das máscaras. Isso será feito fora.\n\nEsse formato serve para criar campos que podem ou não ter máscaras, assim, gerando uma configuração do mesmo jeito, porém com um visual, para o densenvolvedor, de uma maneira muito mais simples de configurar.\n\nAlém disso, Ainda foram incrementados alguns tipos novos e renomeados outros, entre eles: MaskTypesParams, ForceUpdateParams, ObjectWithNameAndListProps e etc...

<br />

- **[2c859eb5f4c4774aa97bbb8080d4d69a8e5a0f43](https://github.com/MauMuller/valisk/commit/2c859eb5f4c4774aa97bbb8080d4d69a8e5a0f43)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 16:30:54 2023 -0300
	**Message**: 🏷️ (funtiction & hooks & lib & & templates & types): Incremento de novos tipos para serem utilizados

    Foi criado alguns tipos novos para ajudarem os desenvolvedores a possuirem mais liberdade de criação quando forem utilizar a lib, além da mudança de alguns nomes para facilitar o entendimento

<br />

- **[2340630891b4b36cdc8f8367577329e59b90bf5d](https://github.com/MauMuller/valisk/commit/2340630891b4b36cdc8f8367577329e59b90bf5d)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:56:40 2023 -0300
	**Message**: 📝 (readme): incremento do br

    Adição da tag no lugar certo agora

<br />

- **[98ecb7e0563518c85180f2041860fbb482750aac](https://github.com/MauMuller/valisk/commit/98ecb7e0563518c85180f2041860fbb482750aac)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:55:10 2023 -0300
	**Message**: 📝 (readme): incremento de uma tag br

    Atualização do menu, novamente, agora para incremento da tag

<br />

- **[388b34d0e6480ab693914861fa6896ec109884eb](https://github.com/MauMuller/valisk/commit/388b34d0e6480ab693914861fa6896ec109884eb)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:53:25 2023 -0300
	**Message**: 📝 (readme): Remoção de tags

    Apenas removi alguns tags br do mapa

<br />

- **[42f684c05e5fbb7e3ef7b6cfa00eab20e9acf150](https://github.com/MauMuller/valisk/commit/42f684c05e5fbb7e3ef7b6cfa00eab20e9acf150)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:45:30 2023 -0300
	**Message**: 🔥 (markdown.lint): Removido arquivo sem utilidade

    Foi removido esse arquivo por falta de importancia dentro do código

<br />

- **[7dcb0526d41e1d26ffbc3b2fc8450c70f29119c5](https://github.com/MauMuller/valisk/commit/7dcb0526d41e1d26ffbc3b2fc8450c70f29119c5)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:44:26 2023 -0300
	**Message**: 📝 (readme): Ajuste na formatação das frases iniciais da lib

    Incremento de um icone no lugar do mark do github, além de um br no final da frase

<br />

- **[99b1ec8d1e091b1941176b30f7b909f6f70674b5](https://github.com/MauMuller/valisk/commit/99b1ec8d1e091b1941176b30f7b909f6f70674b5)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:35:36 2023 -0300
	**Message**: 📝 (readme): Marketing da lib em forma de lista + Aumento nas tags

    Quando estava conferindo, percebi que a documentação  estava repetindo várias coisas, por isso decidi fazer uma listinha com observações mais importates sobre a lib. Além disso, ainda aumentei as tag dos casos de uso pois no github ficavam muito pequenas

<br />

- **[87852801177c3b86a3791d77f6b8d543176bfb93](https://github.com/MauMuller/valisk/commit/87852801177c3b86a3791d77f6b8d543176bfb93)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:21:58 2023 -0300
	**Message**: 📝 (README): Incremento dos casos de uso no mapa + formatação

    Adicionei as tags de título dentro dos casos de uso para que seja possível navegar direto em algum caso de uso. Além de colocar uma separação no menu de links

<br />

- **[6b52b6a56af80fe946d428d8e17cf9b08c6a1d9b](https://github.com/MauMuller/valisk/commit/6b52b6a56af80fe946d428d8e17cf9b08c6a1d9b)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 09:06:50 2023 -0300
	**Message**: 📝 (readme): Ajuste na formatação + Links para o mapa

    Realizei uma formatação melhorada para os tópicos dentro do @useValisk, agora estão todos  aninhados.\n\nAlém disso, Ainda removi dois itens dos mapas por não fazerem sentido.

<br />

- **[314abdd70de1468a8c61c9a44d13af5172a0c149](https://github.com/MauMuller/valisk/commit/314abdd70de1468a8c61c9a44d13af5172a0c149)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Tue Feb 14 08:51:01 2023 -0300
	**Message**: 📝 (readme): Finalizado os tópicos de 'retorno' e 'mapa da documentação'

    Foi então finalizado ambos tópicos citados no título, com ajustes na formatação da documentação, agora a ideia é realizar teste e o upload para o main

<br />

- **[2bab172578627c2d1c0438a8fcb9e5c74f2f06b9](https://github.com/MauMuller/valisk/commit/2bab172578627c2d1c0438a8fcb9e5c74f2f06b9)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 17:51:56 2023 -0300
	**Message**: 📝 (readme): Incremento do _clearValues

    Apenas finalizado mais um tópico após uma pequena refatoração dentro da lib

<br />

- **[62540c1307e976a34f35a04e9882bdfec96b75b6](https://github.com/MauMuller/valisk/commit/62540c1307e976a34f35a04e9882bdfec96b75b6)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 17:22:09 2023 -0300
	**Message**: 📝 (readme): atualização da maneira de utilização do '_getValues'

    Básicamente, foi modificado na documentação para manter o getValues igualmente o handleSubmit do 'react-hook-form.

<br />

- **[eb497c61263af75abdb90614ddd34158d135084e](https://github.com/MauMuller/valisk/commit/eb497c61263af75abdb90614ddd34158d135084e)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 16:43:26 2023 -0300
	**Message**: ♻️ (_cleanValues & _getValues): REFATORAMENTO PARA AMBOS MÉTODOS, PEGANDO VALORES FORA DA MÁSCARA

    Nesse refatoramento, tive que refazer a maneira de funcionamento do _getValues, isso pois eu não havia percebido que antes, caso fosse informado algum campo que não possuisse o '_masks', ele não mostrava quando houvesse a resposta do evento. Por conta disso, resolvi adotar a  maneira que o próprio react-hook-form faz para capturar os dados, criando assim um auxiliar entre a função que o usuário for passar e o evento, da mesma maneira que o 'handleSubmit', assim, retornando o próprio tipo dos inputs informados.\n\nJá em relaxação ao '_cleanValues', precisei alterar o retorno, pois, antes, ele tentava sempre procurar pela mascará que foi informado nas configurações do hook, coisa que gerava um erro caso fosse declaro algum input que não houve o método '_masks' da mesma forma que o anterior. Coisa que agora foi resolvido e todos os campos que não forem declarados no hook, ele não faz remoção de caracteres

<br />

- **[9676d327ac762a2d75c3662d92c5e2ec2bc84989](https://github.com/MauMuller/valisk/commit/9676d327ac762a2d75c3662d92c5e2ec2bc84989)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 14:33:21 2023 -0300
	**Message**: 📝 (README): TÓPICO DE ENTRADA + PARAMETROS + INICIO DO RETORNO

    Nessa atualização, foi finalizado o tópico de parametros e entrada com typescript.Ambos ficaram extremamente completos e fáceis de serem entendidos, com ilustrações práticas.\nAgora, estou dando andamento para o tópico de retorno, já iniciado com os dois principais métodos,faltando ainda: _getValues e _cleanValues

<br />

- **[d384aa36c26d2f128067b27b393fbb77171ce1f7](https://github.com/MauMuller/valisk/commit/d384aa36c26d2f128067b27b393fbb77171ce1f7)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 12:11:01 2023 -0300
	**Message**: 📝 (readme): API de referencia

    Incremento de todos os parametros utilizados dentro da lib, completando mais um tópico, agora restando apenas os retornos e o mapa

<br />

- **[492e35819821bbd206a9bbc97a43bd23f7f45a53](https://github.com/MauMuller/valisk/commit/492e35819821bbd206a9bbc97a43bd23f7f45a53)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Mon Feb 13 09:44:19 2023 -0300
	**Message**: 📝 (readme.md): Finalização dos casos de uso e inicio da API de REFERENCIA

    Terminei os principais casos de uso para os três tipos de uso da lib, realizando exemplo simples e complexos para demonstração, além de começar a realização da API de Referencia

<br />

- **[64e2a1ea4074287addd0040ff117d46bd3ad9e03](https://github.com/MauMuller/valisk/commit/64e2a1ea4074287addd0040ff117d46bd3ad9e03)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 17:54:15 2023 -0300
	**Message**: 📝 (readme): Atualização dos casos de uso e Introdução

    Apenas realizei mais exemplos para o caso de uso da biblioteca, atualizando todos os conceitos novamente, porém, só incluindo o a introdução por enquanto

<br />

- **[a1cef837811778cd747e758e0694216f95828805](https://github.com/MauMuller/valisk/commit/a1cef837811778cd747e758e0694216f95828805)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 11:33:05 2023 -0300
	**Message**: 🔧 (TSCONFIG & README): Alteração na configuração dos TSCONFIG + README

    Foi necessário colocar para o builder do ts a versão mais atual do navegador para que seja possível aceitar alguns metodos novos já incrementados no javascript

<br />

- **[42bd5c0a71c0c4717994c42d56b61500a6a19e20](https://github.com/MauMuller/valisk/commit/42bd5c0a71c0c4717994c42d56b61500a6a19e20)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 11:06:47 2023 -0300
	**Message**: ♻️ (many .tsx file): Realizei a mudança da extensão de vários arquivos

    Apenas ajustei algumas tipagens que estavam incorretas e troquei a extensão de alguns arquivos na qual não precisavam estar em tsx

<br />

- **[f85e290e5f2b470d46bb6ccc3e49cf628fed91d3](https://github.com/MauMuller/valisk/commit/f85e290e5f2b470d46bb6ccc3e49cf628fed91d3)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 10:52:49 2023 -0300
	**Message**: ⚰️ (Arquivos Usados pela versão antiga): Realizei a exclusão de vários arquivos da antiga versão que ainda estavam presentes nessa

    A partir de uma exclusão de arquivo 'mortos' foi possivel diminuir ainda mais o tamanho da lib

<br />

- **[4201d9a14073ab620ad6d59fd07cfb6b131c377b](https://github.com/MauMuller/valisk/commit/4201d9a14073ab620ad6d59fd07cfb6b131c377b)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 09:58:25 2023 -0300
	**Merge**: 08b54d3 1bd405a
	**Message**: 🚩 (changelog.md & release.md): Resolvido conflitos de merge

    Básicamente, linkei o que existia no remoto com o local

<br />

- **[08b54d30b3ce63493f09a995945d431880b87d29](https://github.com/MauMuller/valisk/commit/08b54d30b3ce63493f09a995945d431880b87d29)**

	**Author**: MauMuller <82516932+MauMuller@users.noreply.github.com>
	**Date**: Fri Feb 10 09:33:50 2023 -0300
	**Message**: 🧱 (packeage.json & release.md): Atualização no script + nova versão no RELEASE

    Tentei incrementar as 'aspas simples' para realizar o commit invés das 'aspas invetidas', além disso, nova versão disponivel no realease

<br />
