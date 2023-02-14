## CHANGELOG
Aqui estão todos os commits realizados até o momento, acompanhe todos eles na lista abaixo!

**Commits:**

- **87852801177c3b86a3791d77f6b8d543176bfb93**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/87852801177c3b86a3791d77f6b8d543176bfb93)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 14/02/2023

	```
    📝 (README): Incremento dos casos de uso no mapa + formatação
    
    Adicionei as tags de título dentro dos casos de uso para que seja possível navegar direto em algum caso de uso. Além de colocar uma separação no menu de links
	```

<br />

- **6b52b6a56af80fe946d428d8e17cf9b08c6a1d9b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6b52b6a56af80fe946d428d8e17cf9b08c6a1d9b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 14/02/2023

	```
    📝 (readme): Ajuste na formatação + Links para o mapa
    
    Realizei uma formatação melhorada para os tópicos dentro do @useValisk, agora estão todos  aninhados.\n\nAlém disso, Ainda removi dois itens dos mapas por não fazerem sentido.
	```

<br />

- **314abdd70de1468a8c61c9a44d13af5172a0c149**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/314abdd70de1468a8c61c9a44d13af5172a0c149)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 14/02/2023

	```
    📝 (readme): Finalizado os tópicos de 'retorno' e 'mapa da documentação'
    
    Foi então finalizado ambos tópicos citados no título, com ajustes na formatação da documentação, agora a ideia é realizar teste e o upload para o main
	```

<br />

- **2bab172578627c2d1c0438a8fcb9e5c74f2f06b9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2bab172578627c2d1c0438a8fcb9e5c74f2f06b9)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    📝 (readme): Incremento do _clearValues
    
    Apenas finalizado mais um tópico após uma pequena refatoração dentro da lib
	```

<br />

- **62540c1307e976a34f35a04e9882bdfec96b75b6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/62540c1307e976a34f35a04e9882bdfec96b75b6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    📝 (readme): atualização da maneira de utilização do '_getValues'
    
    Básicamente, foi modificado na documentação para manter o getValues igualmente o handleSubmit do 'react-hook-form.
	```

<br />

- **eb497c61263af75abdb90614ddd34158d135084e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/eb497c61263af75abdb90614ddd34158d135084e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    ♻️ (_cleanValues & _getValues): REFATORAMENTO PARA AMBOS MÉTODOS, PEGANDO VALORES FORA DA MÁSCARA
    
    Nesse refatoramento, tive que refazer a maneira de funcionamento do _getValues, isso pois eu não havia percebido que antes, caso fosse informado algum campo que não possuisse o '_masks', ele não mostrava quando houvesse a resposta do evento. Por conta disso, resolvi adotar a  maneira que o próprio react-hook-form faz para capturar os dados, criando assim um auxiliar entre a função que o usuário for passar e o evento, da mesma maneira que o 'handleSubmit', assim, retornando o próprio tipo dos inputs informados.\n\nJá em relaxação ao '_cleanValues', precisei alterar o retorno, pois, antes, ele tentava sempre procurar pela mascará que foi informado nas configurações do hook, coisa que gerava um erro caso fosse declaro algum input que não houve o método '_masks' da mesma forma que o anterior. Coisa que agora foi resolvido e todos os campos que não forem declarados no hook, ele não faz remoção de caracteres
	```

<br />

- **9676d327ac762a2d75c3662d92c5e2ec2bc84989**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9676d327ac762a2d75c3662d92c5e2ec2bc84989)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    📝 (README): TÓPICO DE ENTRADA + PARAMETROS + INICIO DO RETORNO
    
    Nessa atualização, foi finalizado o tópico de parametros e entrada com typescript.Ambos ficaram extremamente completos e fáceis de serem entendidos, com ilustrações práticas.\nAgora, estou dando andamento para o tópico de retorno, já iniciado com os dois principais métodos,faltando ainda: _getValues e _cleanValues
	```

<br />

- **d384aa36c26d2f128067b27b393fbb77171ce1f7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d384aa36c26d2f128067b27b393fbb77171ce1f7)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    📝 (readme): API de referencia
    
    Incremento de todos os parametros utilizados dentro da lib, completando mais um tópico, agora restando apenas os retornos e o mapa
	```

<br />

- **492e35819821bbd206a9bbc97a43bd23f7f45a53**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/492e35819821bbd206a9bbc97a43bd23f7f45a53)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 13/02/2023

	```
    📝 (readme.md): Finalização dos casos de uso e inicio da API de REFERENCIA
    
    Terminei os principais casos de uso para os três tipos de uso da lib, realizando exemplo simples e complexos para demonstração, além de começar a realização da API de Referencia
	```

<br />

- **64e2a1ea4074287addd0040ff117d46bd3ad9e03**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/64e2a1ea4074287addd0040ff117d46bd3ad9e03)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    📝 (readme): Atualização dos casos de uso e Introdução
    
    Apenas realizei mais exemplos para o caso de uso da biblioteca, atualizando todos os conceitos novamente, porém, só incluindo o a introdução por enquanto
	```

<br />

- **a1cef837811778cd747e758e0694216f95828805**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a1cef837811778cd747e758e0694216f95828805)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    🔧 (TSCONFIG & README): Alteração na configuração dos TSCONFIG + README
    
    Foi necessário colocar para o builder do ts a versão mais atual do navegador para que seja possível aceitar alguns metodos novos já incrementados no javascript
	```

<br />

- **42bd5c0a71c0c4717994c42d56b61500a6a19e20**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/42bd5c0a71c0c4717994c42d56b61500a6a19e20)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    ♻️ (many .tsx file): Realizei a mudança da extensão de vários arquivos
    
    Apenas ajustei algumas tipagens que estavam incorretas e troquei a extensão de alguns arquivos na qual não precisavam estar em tsx
	```

<br />

- **f85e290e5f2b470d46bb6ccc3e49cf628fed91d3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f85e290e5f2b470d46bb6ccc3e49cf628fed91d3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    ⚰️ (Arquivos Usados pela versão antiga): Realizei a exclusão de vários arquivos da antiga versão que ainda estavam presentes nessa
    
    A partir de uma exclusão de arquivo 'mortos' foi possivel diminuir ainda mais o tamanho da lib
	```

<br />

- **4201d9a14073ab620ad6d59fd07cfb6b131c377b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4201d9a14073ab620ad6d59fd07cfb6b131c377b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    🚩 (changelog.md & release.md): Resolvido conflitos de merge
    
    Básicamente, linkei o que existia no remoto com o local
	```

<br />

- **08b54d30b3ce63493f09a995945d431880b87d29**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/08b54d30b3ce63493f09a995945d431880b87d29)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    🧱 (packeage.json & release.md): Atualização no script + nova versão no RELEASE
    
    Tentei incrementar as 'aspas simples' para realizar o commit invés das 'aspas invetidas', além disso, nova versão disponivel no realease
	```

<br />

- **f4a87788889fe152140e3af4b607cc36f770637a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f4a87788889fe152140e3af4b607cc36f770637a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    1.0.4
	```

<br />

- **b5eaceb81812beeb9e18d5bca039d4a03bb11e75**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b5eaceb81812beeb9e18d5bca039d4a03bb11e75)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/02/2023

	```
    ✨ ((All files)): Criação de uma nova versão para a lib, agora, renovando completamente o conceito e a regra de negócios | REACT-HOOK-FORMS INTEGRATION...
    
    Após começar a realização de vários testes com a biblioteca, percebi que ela não era uma boa opção para vários cenários atuais da programação, principalmente com a integração de outras bibliotecas, isso pois ela se limitada a ser um hook que renderizava toda vez que digitado. Por conta disso e com todos os testes, resolvi dar um tempo de realizar commmits, focando principalmente na funcionalidade, ou seja, refiz toda a biblioteca com uma ideia diferente do convencional. Agora, ela possui o poder de trabalhar com UNCONTROLLED e CONTROLLED, além de uma integração FOD* COM O REACT-HOOK-FORMS.
	```

<br />

- **1bd405a6f1a28f1ab26fa2cded45272dfec41b1c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1bd405a6f1a28f1ab26fa2cded45272dfec41b1c)

	Autor: maumuller - [https://github.com/maumuller/](https://github.com/maumuller/)

	Data: 11/01/2023

	```
    💡 (Markdown Templates): Incremento de templates prontos para automatização
    
    apenas estou upando o conteúdo anterior que não foi trakeado
	```

<br />

- **b1d338842fa6b2c179389f56c546f7d3a5c46ede**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b1d338842fa6b2c179389f56c546f7d3a5c46ede)

	Autor: maumuller - [https://github.com/maumuller/](https://github.com/maumuller/)

	Data: 11/01/2023

	```
    🔨 (generateRelease.ts): Implementação de commits realizados dentro do release para upload de versão
    
    Realizei um script para mostrar apenas um link e a data de todas as alterações feitas dentro da lib
	```

<br />

- **24b5d1f460adaf158716b1dd25030ced02efeda8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/24b5d1f460adaf158716b1dd25030ced02efeda8)

	Autor: maumuller - [https://github.com/maumuller/](https://github.com/maumuller/)

	Data: 11/01/2023

	```
    :memo: Adição de link e mensagem com linguagens no README e ajuste no release de template
    
    No geral, coloquei o link do PNPM e uma mensagem dizendo a possibilidade de usar a lib em js e ts e um pequeno ajuste no release
	```

<br />

- **d8d2af1cacf2f5ca5c40386287e70ff6239fa0ad**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d8d2af1cacf2f5ca5c40386287e70ff6239fa0ad)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/01/2023

	```
    (RELEASE.md)Script: Ajuste no script para realizar o commit do RELEASE
	```

<br />

- **2ba5112e3dddfbbaa1e521d41e2f47680302154e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2ba5112e3dddfbbaa1e521d41e2f47680302154e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/01/2023

	```
    1.0.3
	```

<br />

- **cdbd8a1eb7c51c3266cf1893f904eefd4c7d3c44**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cdbd8a1eb7c51c3266cf1893f904eefd4c7d3c44)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/01/2023

	```
    ♻️ (useMasks): Refatoração: Arrumado o hook useMasks, agora contando com a tipagem de ponta a ponta e 100% de funcionanmento
    
    Esse hook me fez perder muito tempo, principalmente pra descrobrir qual era o problema dele não funcionar, já que o typescript não apontava nenhum erro de sintaxe e muito menos de tipagens, além de funcionar de forma normal quando importado a biblioteca no mesmo projeto.\n\nEsses detalhes me fizeram refatorar toda a parte de construção, o que me fez entender que o real problema estava no build.\nIsso acontece porque o vite acaba mudando o nome de todas as váriaveis e funções, e como eu dependia dos nomes, ele nunca conseguia encontrar o hook certo, retornando um array vazio sempre.\n\nPara resolver, precisei pegar um dado dentro da função, o lugar aonde eu declaro qual será o tipo de mascará, fazendo assim, ele sempre pegar todas as mascarás, sem eu precisar incrementar um array a mais nisso.
	```

<br />

- **faa130f3d1080438afd75c88c2cac5e91365fc36**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/faa130f3d1080438afd75c88c2cac5e91365fc36)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 10/01/2023

	```
    ♻️ (UseMasks - Hook): Refactor: Realizei uma refatoração ao hook 'useMasks', fazendo o mesmo possuir todas as tipagaens de todos os hooks em um só, algo que ainda está gerando alguns erros, porém atualização das tipgaens nos arquivos foram concluidas com sucesso!
    
    Com essa refatoração, era esperado que o hook voltasse a funcionar, porém não foi o caso, por conta disso será necessário realizar mais teste e verificar qual é a causa de não pode realizar sua utilziação
	```

<br />

- **89fa235f254aa00d176e0a909c532b135933e185**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/89fa235f254aa00d176e0a909c532b135933e185)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    🐛 (publish_package.yml): Mudança no evento para ativar workflow
    
    Foi incrementado o workflow_dispatch novamente para que seja executado de forma manual essa parte de publicação da biblioteca, já que a API do github não consegue acionar o evento de forma automática
	```

<br />

- **0a2266c4b83244257e51f28d088aa824c0a1b11a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0a2266c4b83244257e51f28d088aa824c0a1b11a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    💚 (publish-package.yml): Geração de arquivo de build quando o YML é executado para enviar para o NPM
    
    Foi apenas adicionado uma linha de build para gerar uma biblioteca minificada para o NPM
	```

<br />

- **fc74da2bda74f5066619637ec6d34d80a328fb42**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fc74da2bda74f5066619637ec6d34d80a328fb42)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    🔖 (package.json): Incremento de versionamento
    
    Atualização do pacote para uma outra versão, essa especializada no build da lib, d possibilitando oa instalação através de PNPM e YARN
	```

<br />

- **e4dbbd5a88d6a2a6f662d1a544b1930daf27aff0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e4dbbd5a88d6a2a6f662d1a544b1930daf27aff0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    1.0.2
	```

<br />

- **662bd6d6153928256b886ec81c43b82f9c8283de**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/662bd6d6153928256b886ec81c43b82f9c8283de)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    🐛 (publish_package.yml): Remoção de um evento
    
    Apenas remove o evento de disparar manualmente o evento de publicação do pacoote, visando a  automatização disso toda vez que ser lançada  uma nova release
	```

<br />

- **104db0be50bdd5ace79e6add9bab2a6815a6fa4d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/104db0be50bdd5ace79e6add9bab2a6815a6fa4d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    🔖 (package.json): Incremento da lib gitmoji como dependencia de desenvolvimento
    
    Básicamente a lib de forma global não estava funcionando e como é necessário apenas para o desenvolvimento, realizaei a instalação
	```

<br />

- **a93522c66e3559071f267041001b6468f13f82ea**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a93522c66e3559071f267041001b6468f13f82ea)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 06/01/2023

	```
    📝 (README.md & package.json): DOCS: incremento do YARN e PNPM
    
    Adição de novas formas de realizar a instalação da biblioteca
	```

<br />

- **5526821fc1901630d19348d3949562af52489441**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5526821fc1901630d19348d3949562af52489441)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 05/01/2023

	```
    📦️ (Aquivos para build de js e ts): Realizada um script para build do pro0jeot
    
    Com as configurações do vite e mais um plugin para converter ts em js, criei uma pasta apenas para fazer essa publição do pacote dentro do NPM
	```

<br />

- **193c3785f89dec839c27d26687f9653c22150b02**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/193c3785f89dec839c27d26687f9653c22150b02)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 05/01/2023

	```
    📦️ (package.json): adição da propriedade de 'types'
    
    Apenas adicionei o caminho para as tipagans que utilizei dentro do sistema
	```

<br />

- **9b30a3042510a7b7eacec61d45375ec6e363403f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9b30a3042510a7b7eacec61d45375ec6e363403f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 05/01/2023

	```
    🔨 (CHANGELOG.md & generateLog.ts): Incremento do '\n' para os textos
    
    Apenas incrementei o '\n' no gerador de log para que no github fique tudo separadinho e possa ser mais visivel de olhar
	```

<br />

- **6b96a13c2f9858e334afc44e81fc3248b9b9520e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6b96a13c2f9858e334afc44e81fc3248b9b9520e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 05/01/2023

	```
    📝 (pull_request_template.md): Ajustes na formatação do template
    
    Foi utilizado algumas tags em HTML para deixar centralizado algumas informações menos importantes dentro do template, isso para  deixar mais chamativo justamente as três principais perrguntas assim como as respostas
	```

<br />

- **62c9fe4a5089bbdaeae2bb57293616e217b1c2d1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/62c9fe4a5089bbdaeae2bb57293616e217b1c2d1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (scripts): Ajuste no path para executar os scripts
    
    Apenas ajustei o path dos scripts para serem executados na lib
	```

<br />

- **916add0ab6a7506bcfd61122ebccb031fe85c789**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/916add0ab6a7506bcfd61122ebccb031fe85c789)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    1.0.1
	```

<br />

- **e6366bf1f58f6982e32299c465b56e8ddf555a96**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e6366bf1f58f6982e32299c465b56e8ddf555a96)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (Utilização dos hooks): Adição dos hooks quando importado a lib
    
    Antes, quando tentei acessar os hooks, não consegui ver nada dentro, tanto que apontava até um erro, mas agora, criei um arquivo com todos os imports para os hooks, possibilitando ter o acesso a todos apenas importando a lib
	```

<br />

- **d3b134dedd2b1e6f9612e0cb60a0b3080b5cdf78**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d3b134dedd2b1e6f9612e0cb60a0b3080b5cdf78)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🔨 (package.json): Ajuste de scripts, colocando o git apenas para o arquivo modificado
    
    Antes, toda vez que era digitado o script 'commit' e 'update', além de gerar/modificar os arquivos ele adicionava todos outros na lista de trackeamento, por conta disso, apenas colocar para adicionar o arquivo em específico que foi trackeado
	```

<br />

- **953b33c50f65975522672a9d3eb38da8964cb671**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/953b33c50f65975522672a9d3eb38da8964cb671)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    📝 (README.md): Remoção do link 'github' no menu
    
    Básicamente como a postagem do pacote no github estava em conflito com a postagem no npm, preferi remover do github por ser algo que não estáva funcionando 100%
	```

<br />

- **46621c951399bc44becc387fe5f96218e4dcfe90**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/46621c951399bc44becc387fe5f96218e4dcfe90)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (npmignore & readme]): Remoção de arquivos desnecessários como o main.tsx e ajuste do pacote no readme
    
    Basicamente junto com os arquivo da lib foi o arquivo main.tsx, algo que não é necssário pois apenas o hooks são importates para a lib, além disso, fiz a atualização de todos os comandos da lib dentro do readme, subsituindo o '@maumuller' por '@libsdomau'
	```

<br />

- **c6e04b471b4c198899651b8eb93d949344354014**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c6e04b471b4c198899651b8eb93d949344354014)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    publish & package.json
	```

<br />

- **ebbcb228a778e3aa1a0dced7b9f07285bc8e229a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ebbcb228a778e3aa1a0dced7b9f07285bc8e229a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update npm-unpublish.yml
	```

<br />

- **2876ad69249658c137b9cc3a874ca9e33611812a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2876ad69249658c137b9cc3a874ca9e33611812a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update package.json
	```

<br />

- **4133a43c143454893012d78efc31ab233c0ac85f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4133a43c143454893012d78efc31ab233c0ac85f)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update publish-package.yml
	```

<br />

- **da319c0732465e7c3c90dde71c059f76ad3f0fdd**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/da319c0732465e7c3c90dde71c059f76ad3f0fdd)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update publish-package.yml
	```

<br />

- **31478369fc8e07d08dff1445f3152786b48c88a9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/31478369fc8e07d08dff1445f3152786b48c88a9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Delete .npmrc
	```

<br />

- **09dbdcd27db14c328fc410bddc453ec302def521**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/09dbdcd27db14c328fc410bddc453ec302def521)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update publish-package.yml
	```

<br />

- **a241bc73fb1a87565a5d2f77f1cd66e535769caf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a241bc73fb1a87565a5d2f77f1cd66e535769caf)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update package.json
	```

<br />

- **3a7b2ac2ef8456f5fb9561f0ad2411eb3f9933cf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3a7b2ac2ef8456f5fb9561f0ad2411eb3f9933cf)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update publish-package.yml
	```

<br />

- **865dc7967dac0734922b758064e0d516da1b8717**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/865dc7967dac0734922b758064e0d516da1b8717)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update package.json
	```

<br />

- **3fff1ec7e72aab0a6f701b304ec531e9b15e6f41**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3fff1ec7e72aab0a6f701b304ec531e9b15e6f41)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update package.json
	```

<br />

- **dd3bfb1f725548e021739ca758f62cb027678708**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/dd3bfb1f725548e021739ca758f62cb027678708)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Update publish-package.yml
	```

<br />

- **b3e8f9e2affebc13c304e41b646a8d384daeb6d7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b3e8f9e2affebc13c304e41b646a8d384daeb6d7)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Merge pull request #17 from MauMuller/development
    
    🐛 (create-release.yml): Erro ao path do template
	```

<br />

- **ea119575c447e4abcde53a404144adfe41c4851c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ea119575c447e4abcde53a404144adfe41c4851c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (create-release.yml): Erro ao path do template
    
    Básicamente ajustei o path de maneira correta até o template do RELEASE.md, o erro era básicamente a adição do 'template' no lugar do 'templates' dentro do .github
	```

<br />

- **fa81947cdbcb125710201d83067800490746ec99**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fa81947cdbcb125710201d83067800490746ec99)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Merge pull request #16 from MauMuller/development
    
    Primeira versão do projeto
	```

<br />

- **84861e0388b12c1ae941e840b54d9194f527f5b7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/84861e0388b12c1ae941e840b54d9194f527f5b7)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🔖 (release.md & package.json): Primeira versão da lib de forma oficial sendo liberada
    
    Versão v0.0.1 da biblioteca, além de geração de release e ajuste no arquivo de geração de release
	```

<br />

- **a1f94e872adccd507e8e9cf44d143e51cb9821ef**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a1f94e872adccd507e8e9cf44d143e51cb9821ef)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (generateRelease.ts): Colocando diretório da release
    
    clear
	```

<br />

- **9e0acd7b47a73e202f2f193d4355c528060cf4b0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9e0acd7b47a73e202f2f193d4355c528060cf4b0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    1.0.0
	```

<br />

- **89bface55cf8f84d825944895f64d9427c7ca13f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/89bface55cf8f84d825944895f64d9427c7ca13f)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Merge pull request #15 from MauMuller/development
    
    README + PUBLISH PACKAGE
	```

<br />

- **325e6fc94f951c0efb5413b29b5e954953e2b43c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/325e6fc94f951c0efb5413b29b5e954953e2b43c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    📝 (publish-package and readme): Adição de outro evento para o yml e ajuste no badge do readme
    
    Foi inserido dentro o 'publish-package.yml' um evento de disparar de maneira manual. E além disso, foi ajsutado obadge do readme
	```

<br />

- **2cb44279666ee1e15e51f58461bebfc60c6da832**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2cb44279666ee1e15e51f58461bebfc60c6da832)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Merge pull request #14 from MauMuller/development
    
    DOCS + BUGS
	```

<br />

- **5ea52287956b01bde17f57c0ea852e072177807a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5ea52287956b01bde17f57c0ea852e072177807a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    📝 (pull_request_template.md): Atualização do template para PR
    
    Incremento de atualizações de escrita na PR
	```

<br />

- **d234b38c934aa1a701958b92c096b3772b5aa069**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d234b38c934aa1a701958b92c096b3772b5aa069)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    📝 (pull_request_template.md): Atualização do template para o pullrequest
    
    Foi incrementado mais texto e exemplos básicos de como realizar esse pull request para dentro do respositório
	```

<br />

- **ac80adb70330438383002c47cf43a596a8cc53c1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ac80adb70330438383002c47cf43a596a8cc53c1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🐛 (publish-package.yml): Bug: Ajuste de dependencia do yml para publicação
    
    Foi removido um job a mais que existia nas dependencias do 'package_to_npm' aonde estavam apontando para um job que não existia mais
	```

<br />

- **19dd5d7384fe9a180cbd1988632961cd98fdf8f5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/19dd5d7384fe9a180cbd1988632961cd98fdf8f5)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    Merge pull request #13 from MauMuller/development
    
    AUTOMATIZAÇÕES & CÓDIGO & DOCS
	```

<br />

- **a00a3b3a0a103a3f2451109a5c0510fb16e98ca7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a00a3b3a0a103a3f2451109a5c0510fb16e98ca7)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    ✨ (create-release.yml & publish-package.yml & PULL_REQUEST_TEMPLATE.md & package.json ): YAML para release e publicação e template para PR
    
    Foi decidido deixar a criação da release e a publicação dos pacotes em YAML separados, isso porque o vevento para executar ambos mudou, agora, a ideia é justametnte fazer esse disparo manualmente pois assim não existe o perigo de realizar publicações de pacotes de maneiraira insegura ou instavél. E foi criado um template para o pull request com o arquivo 'PULL_REQUEST_TEMPLATE.md' para facilitar na criação do PR
	```

<br />

- **f9b771b43516d8958a0234ca3ca1f2b5c323f34a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f9b771b43516d8958a0234ca3ca1f2b5c323f34a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    0.0.0
	```

<br />

- **abbb7dfd052d149f3fce3289184c4a5e6babfe91**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/abbb7dfd052d149f3fce3289184c4a5e6babfe91)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    🚩 (create-PR-templte.yml): Removido essa yml
    
    Foi removido essa yml pois realizei a criação do arquivo diretamente dentro do repositório
	```

<br />

- **f1d4c1d9674e8d040bfb9e80e3bfe1f358106c3e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f1d4c1d9674e8d040bfb9e80e3bfe1f358106c3e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    Merge branch 'main' into development
	```

<br />

- **54ce0496a0b90776d0cc3651c129dab9ed59c632**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/54ce0496a0b90776d0cc3651c129dab9ed59c632)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 04/01/2023

	```
    ✨ (PR.md & create-PR-template.yml): Criando template para pull request
    
    Adicionando templates as pull requests do projeto
	```

<br />

- **d94c257b735d8dc54a63c0fedef2de2e7d36480d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d94c257b735d8dc54a63c0fedef2de2e7d36480d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 04/01/2023

	```
    action to generate an PR to project
	```

<br />

- **cb4e0a9a10a5aa2121d9e2e8943bde4881eecac0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cb4e0a9a10a5aa2121d9e2e8943bde4881eecac0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🧪 (files): testandop alguns arquivos
    
    cripstips de arquivos
	```

<br />

- **55feacc07d35cc5ae6aff95fe0e594bcd77e87ba**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/55feacc07d35cc5ae6aff95fe0e594bcd77e87ba)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🐛 (package.json): Bug: Ajustes de scripts
    
    Foi preciso utilizar o commit convencional para fazer a criação padrão de commits, além de tirar algumas quebras de linhas para ajustar todo o markdown
	```

<br />

- **b462d8f76239200a64fcd7c52bde2eeed11ff938**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b462d8f76239200a64fcd7c52bde2eeed11ff938)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **e32465731207c1de70939e7a10a0fc34bf8cbf64**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e32465731207c1de70939e7a10a0fc34bf8cbf64)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    0.0.0
	```

<br />

- **cfece971d62ad3a38a3d6499ae84ed750dc471c1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cfece971d62ad3a38a3d6499ae84ed750dc471c1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🐛 (generateRelease.ts): Ajustes: Correção de bug para capturar versão do pacote
    
    Apenas mandei o próprio npm executar o retorno da versão atual do package.json
	```

<br />

- **bea75c7e9e6c0179fcfc2f935e1db0eaab1ecc9b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bea75c7e9e6c0179fcfc2f935e1db0eaab1ecc9b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **b544d2781951bedc6c35c9f720b0c45bab6aec55**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b544d2781951bedc6c35c9f720b0c45bab6aec55)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🐛 (generateRelease.ts): Bug: Ajuste ao bug para capturar a versão do package.json
    
    Utilizado um await top level para capturar a versão do package.json
	```

<br />

- **d8519a9500e351cdf57e73787a9f2ba019c52865**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d8519a9500e351cdf57e73787a9f2ba019c52865)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    0.0.0
	```

<br />

- **5e1e345a8d5f499709ab8d6a17324b89e880824d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5e1e345a8d5f499709ab8d6a17324b89e880824d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **954e88abf0d60cbbd3135088509ea782f4c28b85**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/954e88abf0d60cbbd3135088509ea782f4c28b85)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    0.0.0
	```

<br />

- **af607fd84d192f315f56f4cf0a98a65083fc038a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/af607fd84d192f315f56f4cf0a98a65083fc038a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔖 (package.json & release.md $ generaterelease.md): Mudanças: script update, release e gerador
    
    Foi incrementado um script pra toda vez que a atualização for gerada, ser adicionado a mudaça e já comitada, dentro do gerador, foi trocado a variavel de  ambiente por um tentativa de capturar de forma direta a versão do jsomn
	```

<br />

- **3f251d3521f89ef707df664a82e24ae26dbfce04**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3f251d3521f89ef707df664a82e24ae26dbfce04)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **74464a15cc3300774dcf092991c268a2de8d2382**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/74464a15cc3300774dcf092991c268a2de8d2382)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    0.0.0
	```

<br />

- **17a65e3d7f8874aea80e2fe6047476cbe491f0e4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/17a65e3d7f8874aea80e2fe6047476cbe491f0e4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (generate*.ts): Mudanças: Foi atualizado as mensagens de cada um dos geradores.ts
    
    Essa mudança deve-se a identificação de cada um dos scripts, isso acontece principalmente para entender qual arquivo foi criado/modificado através dos geradores
	```

<br />

- **dc3e7b456bdcb5297cb895369317da8a4a7c3d7c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/dc3e7b456bdcb5297cb895369317da8a4a7c3d7c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔖 (REALEASE.md): Atualização: Criação de uma release para publicação da lib
    
    A partir do gerador de release foi possível criar uma release com a versão do pacote e assim upublicar
	```

<br />

- **e0f0df58e5f572b1e4111c1b48f9ed231e32bd29**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e0f0df58e5f572b1e4111c1b48f9ed231e32bd29)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.1
	```

<br />

- **19dc79f2479d115a0b99ee48ec48d3b681eeb8ed**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/19dc79f2479d115a0b99ee48ec48d3b681eeb8ed)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    ✨ (generateRealese.ts & generateLog.ts): Atualizações: criação de realease e ajuste no texto do gerador de logs
    
    Nessa criação de 'releases' eu apenas peguei um a versão do pacote e incrementei um body para markdown
	```

<br />

- **b872cb3066b2388f601f204d14c45393166188b4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b872cb3066b2388f601f204d14c45393166188b4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **df136f1d0ae775291bc9f9d42af8bd12f20d2ee3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/df136f1d0ae775291bc9f9d42af8bd12f20d2ee3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    ✅ (CHANGELOG.md): Ajuste e testes: Atualização de testes e incremento de ajuste de horário
    
    Ajuste das datas, colocando as numerações corretas agora e realização de vários testes
	```

<br />

- **6ffc84cc581dfb3ab2c965eea3a473a73707c585**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6ffc84cc581dfb3ab2c965eea3a473a73707c585)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    ✅ (CHANGELOG.mD): Testes: Criação de testes para script, fazendo assim a criação do arquivo, adicionadndo ele a area de stage e por fim, dando commit
    
    A ideia foi realizar testes em cima do commit, fazendo o arquivo e assim adicionando ele a area de commit
	```

<br />

- **09977bcd0eaddf732002040de78a0517ff06908a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/09977bcd0eaddf732002040de78a0517ff06908a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (CHANGELOG.md): Atualização: Incremento de mudanças no arquivo
    
    Apenas foi rodado o script para gerar um changelog automático para todo histório do projeto
	```

<br />

- **5323f629a8c06efd31883c06dc00abad9b5a911b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5323f629a8c06efd31883c06dc00abad9b5a911b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (CHNAGELOG.MD & package.json): Atualização: incremento de scripts para execução simultanea
    
    Tentei realizar uma execução de dois scripts ao mesmo tempo, ou um seguido do outro, para nãop precisasar ficar digitando dois comandondos toda vez. Entre eles : 'gitmoji -c' e 'ts-node-esm negeratelog.ts
	```

<br />

- **7b275de3cef55696a5c7f87c4a4150624b63febf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7b275de3cef55696a5c7f87c4a4150624b63febf)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (updatepackage.ts): Remoção: Foi removido o comando git
    
    Ele não estava funcionando, não imprimia o último commit, apenas deixava um espaço em branco no teminal, por isso a sua remoção
	```

<br />

- **c0fc955a5d38c651368d4944de2ce0186bbb7d1d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c0fc955a5d38c651368d4944de2ce0186bbb7d1d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.3
	```

<br />

- **fc2290966e8697756e33dd219233e6b365314a48**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fc2290966e8697756e33dd219233e6b365314a48)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.2
	```

<br />

- **587feb739c085f874d00beda310d143d16d309f9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/587feb739c085f874d00beda310d143d16d309f9)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (UpdatePackage.ts): Atualização: Remoção da mensagem de erro e incremento de outro comando junto
    
    A remoção foi necessária pois mesmo que o comando funcionasse, sempre retornanva uma mensagem de erro, poir conta disso, f.Também incrementei uma comando de git para mostrar o u´lúltimo commit realizado]
	```

<br />

- **5be080f29075b905c0bb1afd8d425a97630e312f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5be080f29075b905c0bb1afd8d425a97630e312f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.1
	```

<br />

- **8f26c4b26ddc48ddfb1f07c29261fc0c1c76759e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8f26c4b26ddc48ddfb1f07c29261fc0c1c76759e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔨 (updatePackeage.json): Incremento de mensagem de erro e sucesso para script
    
    A ideia é mostrar qual foi a situação gerada pelo script, mostrando o que é preciso fazer
	```

<br />

- **7fc4c7037f0e1bde63c37c4a82627644fb1a9ce1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7fc4c7037f0e1bde63c37c4a82627644fb1a9ce1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    1.0.0
	```

<br />

- **fcb558da827957ee81c9f3411c9e9e79cf2809cd**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fcb558da827957ee81c9f3411c9e9e79cf2809cd)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    🔖 (updatePackage.ts & package.json): Tentativa de realizar um script em ts para upgrade de versão do package
    
    A ideia desse script é substituir a necessidade de possuir dois scripts, um para cada SO
	```

<br />

- **4cb9341c354d19c704993458a6efc6eedb4a58ad**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4cb9341c354d19c704993458a6efc6eedb4a58ad)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 03/01/2023

	```
    0.0.1
	```

<br />

- **fabce43d095b75f08faa6182ecd128681e760fe9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fabce43d095b75f08faa6182ecd128681e760fe9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 02/01/2023

	```
    Adição de um script para aumentar a versão em ts
	```

<br />

- **3251fbf3222f60b31174527cd31f67c27757c2cc**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3251fbf3222f60b31174527cd31f67c27757c2cc)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 02/01/2023

	```
    ✨ (CHANGELOG.md e Script): Incrtemento de script para gerar um changelog com todo histórico de commits
    
    ba´sicamente um histório completo memso offline e diretamente no projeto com link, data, comentáerio e pessoa que realizou
	```

<br />

- **4eee035fccf03b76c08b31ce7a08088f0975bc01**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4eee035fccf03b76c08b31ce7a08088f0975bc01)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 02/01/2023

	```
    ✨ (README.MD & package.json): Atualização da documentação e incremento de script para commits padronizados
    
    Nessa atualização, realizei apenas alguns ajustes no nome da lib, básicamente preferi tirar o 'react' do nome, essa mudança foi mais pela estética de pesquisa. Já o script foi feito para ser introduzido toda vez que digitado 'npm run commit', assim, gerando um commit padronizado!
	```

<br />

- **ecb5afd80b5bdfb7db07c52a3f5ab40c21b9e4cf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ecb5afd80b5bdfb7db07c52a3f5ab40c21b9e4cf)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    ♻️ (frontend): teste de commit
    
    estou testando o commit e tentando descobrir porque o terminal esta meio bugado
	```

<br />

- **68b50d9aaa80f9ffb0bd4cd4b206825864957d12**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/68b50d9aaa80f9ffb0bd4cd4b206825864957d12)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    :sparkles: atualização de padronização de commits
	```

<br />

- **ee3d87aebf8fae66148df4af82453b649f7e1db2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ee3d87aebf8fae66148df4af82453b649f7e1db2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    a
	```

<br />

- **4ea17703bb2533a13a4cb9cd5f6f8cf2b741ff75**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4ea17703bb2533a13a4cb9cd5f6f8cf2b741ff75)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    DOCS: Atualização dos links para ilustrações dos exemplos de utilização da biblioteca
	```

<br />

- **419f52821d4d78c4bf0a5fdc4969b17fb699137e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/419f52821d4d78c4bf0a5fdc4969b17fb699137e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    Atualização no nome da lib, mantendo agora apenas o 'VALISK'
	```

<br />

- **f858c8924aa151c6815130a5ac2af2d1f332a448**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f858c8924aa151c6815130a5ac2af2d1f332a448)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 30/12/2022

	```
    Atualização do README
	```

<br />

- **ed670d28ad103330ed2ae0f0af38786b3b7b396c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ed670d28ad103330ed2ae0f0af38786b3b7b396c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    DOCS: Criação de um exemplo um pouco mais complexo para utilização no README
	```

<br />

- **bad433f1a12b9458db8404a5067fcb415e23e501**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bad433f1a12b9458db8404a5067fcb415e23e501)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    DOCS: Ajuste de link
	```

<br />

- **7e38521c449ba1710a53301601509d17c11645b6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7e38521c449ba1710a53301601509d17c11645b6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    DOCS: Criação de uma sessão de 'Dúvidas' para resolver questões frequentes sobre a lib. Também foi criado o primeiro caso de uso, com um exemplo mais básico de sua utilização.
	```

<br />

- **f36ee6c4dbeb3c778763bbd75081c37023d136fc**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f36ee6c4dbeb3c778763bbd75081c37023d136fc)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    Ajustes relacionados a links dentro do readme
	```

<br />

- **aa61401a9437647d5e7e912624f681b4d90ee39a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/aa61401a9437647d5e7e912624f681b4d90ee39a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    Finalização a adição de valores dentro das tabelas, além de ajustar alguns links com anchor tag papor conta do target _blank
	```

<br />

- **ffa53859c6ff24257e50b57c01b1336675124e79**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ffa53859c6ff24257e50b57c01b1336675124e79)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    DOCS: ajuste em todos os 'parâmetros' e 'retornos' das funcionalidades
	```

<br />

- **1ba89648c6bfcdd79757a3433373780c6a0eea3c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1ba89648c6bfcdd79757a3433373780c6a0eea3c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    Incremento de melhorias, e futuro 'useMasks'
	```

<br />

- **31ce0713f05990e1aadebfa826f67bd09a4488c6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/31ce0713f05990e1aadebfa826f67bd09a4488c6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 29/12/2022

	```
    Atualização do README
	```

<br />

- **5fb117d1dd3cee2209938d590f371b26fa13abe6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5fb117d1dd3cee2209938d590f371b26fa13abe6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Atualização de tabela na documentação de password e incremento de image nova
	```

<br />

- **3a432574059fcaa73ca77713e1a9cbbc30cee1c0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3a432574059fcaa73ca77713e1a9cbbc30cee1c0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Incremento do último hook com funcionalidade específica, o 'useMaskPassword', com toda sua documentação inclusão em várias tabelas
	```

<br />

- **42f92e6f2d84d1c3f3d45c978b17916ab9b91ee3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/42f92e6f2d84d1c3f3d45c978b17916ab9b91ee3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Incremento de 'em breve' dentro da documentação para que haja algumas visões do que pode ser incrementado no futuro nessa funcionalidade
	```

<br />

- **d863edff69324c72da4bb832b3554d635b5f14a1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d863edff69324c72da4bb832b3554d635b5f14a1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Atualização do README | Incremento de API para refência do 'useMaskMoney'
	```

<br />

- **d1b9d2aaded98b19789bbd10a643a3119168f337**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d1b9d2aaded98b19789bbd10a643a3119168f337)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Realização de testes para a documentação da API
	```

<br />

- **16ac5d04c8440fc290adc451fe6efdac22c3edba**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/16ac5d04c8440fc290adc451fe6efdac22c3edba)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Arrumando aninhamento dentro do código
	```

<br />

- **5de68ea14a57bf4a724de467d13764a57af8745e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5de68ea14a57bf4a724de467d13764a57af8745e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Incremento da lista padrão do markdown para organização de API do CPF
	```

<br />

- **5f26e215a933d38f26a8b35fb7049a9894c3b8bc**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5f26e215a933d38f26a8b35fb7049a9894c3b8bc)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    testando paragráfos dos details no github
	```

<br />

- **bf919cf481dd4c5fd655299ef3b8c60448339640**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bf919cf481dd4c5fd655299ef3b8c60448339640)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Ajuste na organização dos títulos dos hooks, adicionando um '#' a mais para dar destaque maior para o título além de incrementar a lista diretamente no tópico do hook, sem haver nenhum texto antes
	```

<br />

- **66123a5974ab06c1e846d70955c726eb30e58216**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/66123a5974ab06c1e846d70955c726eb30e58216)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    ATUALIZAÇÃO! Adicionado nova API na documentação, agora com o foco no CEP, 'useMaskCEP', funcionando igualmente as anteriores
	```

<br />

- **88af953e134578565a09a17d307a97d1e2896ee6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/88af953e134578565a09a17d307a97d1e2896ee6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Atualização do código, realizando alguns testes com o hook 'useMaskCNPJ', usado de refência para criação da documentação do hook dentro do README, somando assim | 2 API completas
	```

<br />

- **b8a10dba62f6acb793dfc4a61a9a4e0ea4521bf6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b8a10dba62f6acb793dfc4a61a9a4e0ea4521bf6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Incremento no readme
	```

<br />

- **c16b5485f1dfed3eeeab067c9280faa53667c5ea**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c16b5485f1dfed3eeeab067c9280faa53667c5ea)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Ajuste de tipos, realizando o retorno específico do 'isValid' para cada um
	```

<br />

- **551c49117672331f59ef93542314251152d9f6b2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/551c49117672331f59ef93542314251152d9f6b2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Atualização na mostragem do README
	```

<br />

- **b60436282505da1169ea83ff352567e351024da4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b60436282505da1169ea83ff352567e351024da4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 28/12/2022

	```
    Realização de testes dentro do App e README Atualizado e mais organizado com o primeiro hook documentado
	```

<br />

- **5383b4b83d3d4bd30dd38221b2ee5d6a9801ba32**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5383b4b83d3d4bd30dd38221b2ee5d6a9801ba32)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização no menu com outras formas de instalação e remoção da redundancia nas instalações
	```

<br />

- **7c9e3cf6f046bf1e582b26d74555fb943bf362df**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7c9e3cf6f046bf1e582b26d74555fb943bf362df)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização de formatação do texto do README
	```

<br />

- **c5750533af6553f7fbab735fbf437d0387ba38e8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c5750533af6553f7fbab735fbf437d0387ba38e8)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização dos conceitos de API Referencia, incremento de mais links no menu e descrição mais detalhada com inclusão do link do repositório no Github e NPM
	```

<br />

- **73c766e1f291532adc79d9aa3fbdc482b4cd47a2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/73c766e1f291532adc79d9aa3fbdc482b4cd47a2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização da imagem do logo
	```

<br />

- **2f77e339298599ee7935eb672cccfc9ef4c7af02**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2f77e339298599ee7935eb672cccfc9ef4c7af02)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Incremento de mais espaçamentos e atualização do nome para header 2
	```

<br />

- **45e167415c1a37f75dd59ad944766c6b3ebc88ee**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/45e167415c1a37f75dd59ad944766c6b3ebc88ee)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização do espaçamentos do projeto
	```

<br />

- **40c422f46bc269b91a99919258231cca702d2f36**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/40c422f46bc269b91a99919258231cca702d2f36)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Aumento no tamanho dos badges e incremneto de #### para titulo
	```

<br />

- **da1c3d276013aefaf9c0b0aee7c577e38c07b585**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/da1c3d276013aefaf9c0b0aee7c577e38c07b585)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    remoção da tag 'font'
	```

<br />

- **9ca737bde85e1aa13320e9fee9134aaef2983c7e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9ca737bde85e1aa13320e9fee9134aaef2983c7e)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização na estrutura do texto
	```

<br />

- **a11f5dac5b4b1df545f19776162beba2789a814c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a11f5dac5b4b1df545f19776162beba2789a814c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Ajuste no README novamente
	```

<br />

- **c94163fa13f955cfa9b945a12a496943bb68fcf8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c94163fa13f955cfa9b945a12a496943bb68fcf8)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Atualização do README
	```

<br />

- **9c193e566fe24302c5e28be109de924f95965fc4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9c193e566fe24302c5e28be109de924f95965fc4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Atualizações
	```

<br />

- **944b4771e4058d14d3c6cda8236da816d7b0c710**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/944b4771e4058d14d3c6cda8236da816d7b0c710)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Ajuste de design para ilustração da biblioteca
	```

<br />

- **3c01d75572bd2501f54f9b8fd148ee163213a0ef**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3c01d75572bd2501f54f9b8fd148ee163213a0ef)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Atualização do workflow para ser utilizado
	```

<br />

- **bc022d51c0012efb19a0ff0c6821e1069e2a0834**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bc022d51c0012efb19a0ff0c6821e1069e2a0834)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Atualização da variavel que obtem a API
	```

<br />

- **5cb2c46b0efb9263b01a08bf4fa3bce12be1319b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5cb2c46b0efb9263b01a08bf4fa3bce12be1319b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Renomeação das ações dentros os jobs
	```

<br />

- **e8eaff0aec6ac5894fd3ce0c0a9c4c9c66192630**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e8eaff0aec6ac5894fd3ce0c0a9c4c9c66192630)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Merge branch 'main' of https://github.com/MauMuller/react-input-validation
	```

<br />

- **b3742f928c1f66baba6d72272e70fa3a9932f3ca**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b3742f928c1f66baba6d72272e70fa3a9932f3ca)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    remove condicional for 'test'
	```

<br />

- **e1eb5cca315e559a8fa94a9b0ac530574d983c99**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e1eb5cca315e559a8fa94a9b0ac530574d983c99)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Update delete-last-release.yml
	```

<br />

- **63eef205744c5c8145e0d81bbd2ac1db68fb9fa4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/63eef205744c5c8145e0d81bbd2ac1db68fb9fa4)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Update delete-last-release.yml
	```

<br />

- **ace06a6c5caac41bd124e62fa821d016a6446c05**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ace06a6c5caac41bd124e62fa821d016a6446c05)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Update delete-last-release.yml
	```

<br />

- **c49cd237cbc851540380f5ff98ef110e13858af9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c49cd237cbc851540380f5ff98ef110e13858af9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Update delete-last-release.yml
	```

<br />

- **10d2ba9552b1befd49bf21a230df9b7789588b62**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/10d2ba9552b1befd49bf21a230df9b7789588b62)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 27/12/2022

	```
    Update delete-last-release.yml
	```

<br />

- **e3dd5a15639062f75c262957653e2a86e8a520fc**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e3dd5a15639062f75c262957653e2a86e8a520fc)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.0.0
	```

<br />

- **08333a3304c15c714f5ec230840aaf364948689f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/08333a3304c15c714f5ec230840aaf364948689f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Criação de um novo yml para deletar últimas releases criadas
	```

<br />

- **3b1e58cf60c65ba447c8bdccf1d275c808435b35**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3b1e58cf60c65ba447c8bdccf1d275c808435b35)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.0
	```

<br />

- **712751cbf469d965594473d6a4847da8575dee6b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/712751cbf469d965594473d6a4847da8575dee6b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    criação do '.npmrc' e package.json, além de incremento do yaml
	```

<br />

- **17e0146bac249a9e5cc9322f18e048f0e9133b7a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/17e0146bac249a9e5cc9322f18e048f0e9133b7a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.0.0
	```

<br />

- **1c8a642e572b810a540db0920d13dfc744b05c65**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1c8a642e572b810a540db0920d13dfc744b05c65)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.1
	```

<br />

- **0fa68e2824cd545443a05b6dcd25fd87c89bf6e0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0fa68e2824cd545443a05b6dcd25fd87c89bf6e0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.0
	```

<br />

- **f2b7e25b569c9eb0815b91edae02bde3fd103604**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f2b7e25b569c9eb0815b91edae02bde3fd103604)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Atualização do arquivo ps1
	```

<br />

- **4fd24de749be210d9f8776131e9af0915343542d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4fd24de749be210d9f8776131e9af0915343542d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.0.0
	```

<br />

- **afe82a3379ba4accaf0b0fe43e940b1d3f640778**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/afe82a3379ba4accaf0b0fe43e940b1d3f640778)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    increment bash
	```

<br />

- **e50b8cf90c6caf3d680d70903e767006867756c3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e50b8cf90c6caf3d680d70903e767006867756c3)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 27/12/2022

	```
    remove bash
	```

<br />

- **4699f734455d837d77fb9041cd3b7551bba47b73**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4699f734455d837d77fb9041cd3b7551bba47b73)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 27/12/2022

	```
    1.0.1
	```

<br />

- **b5b99c358fd26d4900c4efa668d7a10aa4292103**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b5b99c358fd26d4900c4efa668d7a10aa4292103)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 27/12/2022

	```
    testeee
	```

<br />

- **f04c5462b6b35c8949440ece4dd1316d96a3c189**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f04c5462b6b35c8949440ece4dd1316d96a3c189)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.0
	```

<br />

- **de10cb7107eaa1395400637b991509a12e24c410**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/de10cb7107eaa1395400637b991509a12e24c410)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.1.0
	```

<br />

- **16d0e2b3000ac6ef8a905d523ce3c0a4c2b811e4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/16d0e2b3000ac6ef8a905d523ce3c0a4c2b811e4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Rodandando scripts para sistemas operacionais
	```

<br />

- **61a42742d99cd2c3c7be403ad9e3218045913d77**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/61a42742d99cd2c3c7be403ad9e3218045913d77)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Modificações nos scripts
	```

<br />

- **f08660c64f1408ed4c2e12e23d5afb3f93d3d6ef**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f08660c64f1408ed4c2e12e23d5afb3f93d3d6ef)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.0.0
	```

<br />

- **18230147312175a2250d8ed16728665776a4ccc3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/18230147312175a2250d8ed16728665776a4ccc3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.0
	```

<br />

- **97096db4202d3aeff61a9a249e9b3804756be54f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/97096db4202d3aeff61a9a249e9b3804756be54f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.1.0
	```

<br />

- **12185ef86b9af3eda009df8b9d1c851c3dc66a64**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/12185ef86b9af3eda009df8b9d1c851c3dc66a64)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    criação de dois scripts para aumentar a versão do pacote
	```

<br />

- **6a5239fd0d5a8d9890dffc2cf316cc1a5de118e5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6a5239fd0d5a8d9890dffc2cf316cc1a5de118e5)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.0.0
	```

<br />

- **c5020d0b9e533a80bb3fd87029df61fda71f56c6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c5020d0b9e533a80bb3fd87029df61fda71f56c6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Atualização de scripts para rodar ambos
	```

<br />

- **564c176442169addd677f0f9036ac0d5736d87a1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/564c176442169addd677f0f9036ac0d5736d87a1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.1
	```

<br />

- **be78193e7e43e7ea86a1567c3901f8c753e07544**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/be78193e7e43e7ea86a1567c3901f8c753e07544)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    1.0.0
	```

<br />

- **0b0032c2ae25862e3d30f7023807ec6c746946de**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0b0032c2ae25862e3d30f7023807ec6c746946de)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    0.1.0
	```

<br />

- **219377f274af70a07ff0953ae23cc16a4887d0bf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/219377f274af70a07ff0953ae23cc16a4887d0bf)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 27/12/2022

	```
    Incremento de publicação do pacote no github também
	```

<br />

- **e68636fd88ddbbccb882b6f2c55f9521dc44cf65**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e68636fd88ddbbccb882b6f2c55f9521dc44cf65)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Corrigido sintaxe do workflow
	```

<br />

- **c0dfc68b955910f97779b43341fcd23b1af65a04**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c0dfc68b955910f97779b43341fcd23b1af65a04)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    condicional para verificaçaõ
	```

<br />

- **7dfb391d82c02e4f0e0253d2956fe12991c5fc57**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7dfb391d82c02e4f0e0253d2956fe12991c5fc57)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Incremento de condicional para publicação do pacote e ajuste no script de windows
	```

<br />

- **569ad3c1a3e676144e57b317efd806af0398aa0d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/569ad3c1a3e676144e57b317efd806af0398aa0d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **bc84dfef1a41e718ee5a89565798adac33ec3f5f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bc84dfef1a41e718ee5a89565798adac33ec3f5f)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.2
	```

<br />

- **81e466a6e13edf59bc42d75fb5b9846438ddb1b2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/81e466a6e13edf59bc42d75fb5b9846438ddb1b2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **56bbaeeec0950fd663858da6802712d639d82587**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/56bbaeeec0950fd663858da6802712d639d82587)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **39f09c4322649358032b19cf10c6b68fdc6e363d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/39f09c4322649358032b19cf10c6b68fdc6e363d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **ec1f154ae7c78f13013ec15a2cb30f65c3eb7fcb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ec1f154ae7c78f13013ec15a2cb30f65c3eb7fcb)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    alteração na ordem das condicionais
	```

<br />

- **c9ba8d258b9670486fe3845a5c7432b707558ff5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c9ba8d258b9670486fe3845a5c7432b707558ff5)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    incremento de operador maior ou igual
	```

<br />

- **c4f4c69f76ba401df6ed91e045da3dba0e83c86f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c4f4c69f76ba401df6ed91e045da3dba0e83c86f)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **ae06c23987d0605164a9e680aa6a6646b4f921d6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ae06c23987d0605164a9e680aa6a6646b4f921d6)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **d165e0c7861f63310dc8e0eb706aad6910067817**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d165e0c7861f63310dc8e0eb706aad6910067817)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Atualização para incremental mais um apenas depois da segunda chamada
	```

<br />

- **dcb00bec5ed6ab31d45597b972654e95f300d9e0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/dcb00bec5ed6ab31d45597b972654e95f300d9e0)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **04b1c9563f806b63989595a5ab32eb72f983bbea**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/04b1c9563f806b63989595a5ab32eb72f983bbea)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **a16204839251e6fd8a97ea4a37e9f757d357407a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a16204839251e6fd8a97ea4a37e9f757d357407a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **47ff3f756444e872a3f3358c63ecc267a1910850**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/47ff3f756444e872a3f3358c63ecc267a1910850)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    COndicionais do script atualizadas, agoa podendo ser usadas com a versão 'v1.0.0'
	```

<br />

- **15f6543edcdac466a51050cc775d5ac51edf7e7c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/15f6543edcdac466a51050cc775d5ac51edf7e7c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.1.0
	```

<br />

- **73a2fb8984e5e4c417ccd9c917bc14d652981f07**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/73a2fb8984e5e4c417ccd9c917bc14d652981f07)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **5090b7f78f748b66670b789afca6ba6675017cc0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5090b7f78f748b66670b789afca6ba6675017cc0)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **ffc937a0003b78f2d362bd41373ddaadf2fb3f41**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ffc937a0003b78f2d362bd41373ddaadf2fb3f41)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Atualização do script de upgrade
	```

<br />

- **343e4474c4ebb02b411799a885a93455ad26b210**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/343e4474c4ebb02b411799a885a93455ad26b210)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **920b59781b41cdad432381c6c884b5b6d9fb69b6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/920b59781b41cdad432381c6c884b5b6d9fb69b6)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **4c0a39f0bc43ffd0969fa8d38dd16a9b09a7362d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4c0a39f0bc43ffd0969fa8d38dd16a9b09a7362d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **062c86bd9eeaf77f9f492f095c914ce6f76feca3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/062c86bd9eeaf77f9f492f095c914ce6f76feca3)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.1.0
	```

<br />

- **8c0c3702eb1745a845e88e879989b1f08965049e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8c0c3702eb1745a845e88e879989b1f08965049e)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Ajuste na versão do script
	```

<br />

- **6abc8c2e5532356fa78c9ca5a3d9c3aed34a4cf1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6abc8c2e5532356fa78c9ca5a3d9c3aed34a4cf1)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Atualização de workflow, changelog e template
	```

<br />

- **0da8f5ec0e602e1f4897a502504684287509c08e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0da8f5ec0e602e1f4897a502504684287509c08e)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **bc7f8f27b6272310e54fcea2e01a8699776a27e6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bc7f8f27b6272310e54fcea2e01a8699776a27e6)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Updates about workflows and package json
	```

<br />

- **3fef718f0005a0746411e404571b558fd3129d48**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3fef718f0005a0746411e404571b558fd3129d48)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização de scripts
	```

<br />

- **1bd8c092a8aeb05480959a48279273910972f90a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1bd8c092a8aeb05480959a48279273910972f90a)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.2
	```

<br />

- **bbba58951db7c17a3fc60f1f30eaf3b7acfc0431**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bbba58951db7c17a3fc60f1f30eaf3b7acfc0431)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    Atualização de arquivos
	```

<br />

- **092db293623f159ad69cfd0b3059bf1baa5a6ae1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/092db293623f159ad69cfd0b3059bf1baa5a6ae1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização de YML e script
	```

<br />

- **fd20c4e5a5a984cee486ebbb5b140fbf54faa7af**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fd20c4e5a5a984cee486ebbb5b140fbf54faa7af)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Junção de pacotes para o publicamento da biblioteca
	```

<br />

- **05020ee6f0d026d5bf992ff9c7a686f213ddadfd**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/05020ee6f0d026d5bf992ff9c7a686f213ddadfd)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **fcfbc77953612a07914643c82e794c840a0f8682**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fcfbc77953612a07914643c82e794c840a0f8682)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **eb0b88da58e1490fea5eb9b4d54c1c3ca7681d76**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/eb0b88da58e1490fea5eb9b4d54c1c3ca7681d76)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    incremento de 'zerar' a versão
	```

<br />

- **30749aa3e0055a292ff9a77f03600d921d82cf64**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/30749aa3e0055a292ff9a77f03600d921d82cf64)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **924162661598bf0b65f376a090f6a7195d83881b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/924162661598bf0b65f376a090f6a7195d83881b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do new-release yml
	```

<br />

- **a8127465b8acaf1c2b578c449110bad4108ece26**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a8127465b8acaf1c2b578c449110bad4108ece26)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **8ba14d9a8183dad8a16b4578c3b96fa47a0707d4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8ba14d9a8183dad8a16b4578c3b96fa47a0707d4)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **2177b8a2072030185c24f6df4a8053511a4647ce**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2177b8a2072030185c24f6df4a8053511a4647ce)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **5ec7b6c247f90024bd08477c4adbad792f65c964**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5ec7b6c247f90024bd08477c4adbad792f65c964)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.1.0
	```

<br />

- **d963aa275231964b439721fd6c7a661e8049398d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d963aa275231964b439721fd6c7a661e8049398d)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.9
	```

<br />

- **b24beeac1a5ba87a1118f7d6b492ac8095b24b47**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b24beeac1a5ba87a1118f7d6b492ac8095b24b47)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.8
	```

<br />

- **5b38ec60dcf6ac98f19e6e74cd892a6704518dce**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5b38ec60dcf6ac98f19e6e74cd892a6704518dce)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.7
	```

<br />

- **36a4f9a8153c7d8bc3db0dce18986864f2a0e1de**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/36a4f9a8153c7d8bc3db0dce18986864f2a0e1de)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.6
	```

<br />

- **fe637f4b05e9679bfc3afad9fb104803c99be6c7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fe637f4b05e9679bfc3afad9fb104803c99be6c7)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.5
	```

<br />

- **5d7ec6698bae169b7dc11aa1e3e11c4f65c35d52**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5d7ec6698bae169b7dc11aa1e3e11c4f65c35d52)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.4
	```

<br />

- **79cb08473b2ea45a34ff07e0234aa6246f4124f8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/79cb08473b2ea45a34ff07e0234aa6246f4124f8)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.3
	```

<br />

- **df60efcddf75d193e07ee6aaf76a8d632b7827c7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/df60efcddf75d193e07ee6aaf76a8d632b7827c7)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.2
	```

<br />

- **29604711f55eb54c8cfc5fa40b688797f9cb0de8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/29604711f55eb54c8cfc5fa40b688797f9cb0de8)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **7987eeab87029ced7a125b3ce1f28d6f41580b71**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7987eeab87029ced7a125b3ce1f28d6f41580b71)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **f3f3343cd32365cd09abb0439861a7d993593e1f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f3f3343cd32365cd09abb0439861a7d993593e1f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Scripts on bash
	```

<br />

- **07717bfa0bc0b2266f9c98d8d75c87421aa905b4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/07717bfa0bc0b2266f9c98d8d75c87421aa905b4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Mudanças no script
	```

<br />

- **366593c422d58ab3f412924aebbb089cfb888346**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/366593c422d58ab3f412924aebbb089cfb888346)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    3.0.1
	```

<br />

- **94abce7a1fd1381e13e9240db7d613cf36520ede**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/94abce7a1fd1381e13e9240db7d613cf36520ede)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    3.0.0
	```

<br />

- **1250603b3204e10385b5f1278b3a66d4cdfec21a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1250603b3204e10385b5f1278b3a66d4cdfec21a)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    2.0.1
	```

<br />

- **acfa31772895d86def70f5bb15271c2d75d8a29c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/acfa31772895d86def70f5bb15271c2d75d8a29c)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    2.0.0
	```

<br />

- **33d6709aaf9f722d2599a04a465178186ffe5ee8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/33d6709aaf9f722d2599a04a465178186ffe5ee8)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **a777f51e9023c277da1c1f85ecf8c9f2712de960**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a777f51e9023c277da1c1f85ecf8c9f2712de960)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **a6c42fb694a04bd05dd264320c9ecbb63eb46f77**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a6c42fb694a04bd05dd264320c9ecbb63eb46f77)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualizaçõs
	```

<br />

- **955e8aabfcecf4393b784639f79ee2109f4c8669**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/955e8aabfcecf4393b784639f79ee2109f4c8669)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    Ajuste na versão da release
	```

<br />

- **6dc9fa1c620bc50ee526f7ca6e2dcb89bb2aa7a1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6dc9fa1c620bc50ee526f7ca6e2dcb89bb2aa7a1)

	Autor: root - [https://github.com/root/](https://github.com/root/)

	Data: 26/12/2022

	```
    Incremento de script
	```

<br />

- **324b209aa912997c04b7720377b02686f3d2036a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/324b209aa912997c04b7720377b02686f3d2036a)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.1
	```

<br />

- **2f4fd7ea406266b274964afba983c1afd1a795a7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2f4fd7ea406266b274964afba983c1afd1a795a7)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.0
	```

<br />

- **de00cdc735efd4750874a9fafeb38d339bc38325**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/de00cdc735efd4750874a9fafeb38d339bc38325)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Add other event to dispach the realeased version
	```

<br />

- **17c9505aa383c7484e3f0b6d91dccde6d19482da**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/17c9505aa383c7484e3f0b6d91dccde6d19482da)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **b75ae7b337934856d643e8eb435e903be2305bd6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b75ae7b337934856d643e8eb435e903be2305bd6)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **de2741c79da8af65136a90416f03d0e99a4de2d2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/de2741c79da8af65136a90416f03d0e99a4de2d2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Increase flags to lasted version on project
	```

<br />

- **8c13277ae81971d2bf08c40d4f2056e6b5233666**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8c13277ae81971d2bf08c40d4f2056e6b5233666)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.1
	```

<br />

- **52fc6735bcdfda37f6c466291b6e6989a120c65f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/52fc6735bcdfda37f6c466291b6e6989a120c65f)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.0
	```

<br />

- **ecba3f6af611851f5fb82b42e4ea986284418cf3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ecba3f6af611851f5fb82b42e4ea986284418cf3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Update about npm publish, now only with an comment to test the event trigger
	```

<br />

- **bfe32c5e2f2aa66421f94ddecf04f5524b0cb9d6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bfe32c5e2f2aa66421f94ddecf04f5524b0cb9d6)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **c55259cb8fd8ec5d46a2145243652926219035ca**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c55259cb8fd8ec5d46a2145243652926219035ca)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **db7d66fcec33da244bda33fffbc302dd27709027**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/db7d66fcec33da244bda33fffbc302dd27709027)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **a18197707a2fbc403c3a4f5383f0c593b0a9d77e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a18197707a2fbc403c3a4f5383f0c593b0a9d77e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.1
	```

<br />

- **70a0a51611dadb56ecc12f23dbad4ffb24a29fb5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/70a0a51611dadb56ecc12f23dbad4ffb24a29fb5)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **bef96fdf535ccab40ab6b807e99401d0e6806acb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bef96fdf535ccab40ab6b807e99401d0e6806acb)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **514e68cff5d88626eea8539d29fcaae0995f6d5b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/514e68cff5d88626eea8539d29fcaae0995f6d5b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **d57257429ddae8129da7df38d22ba2aa2ff0d785**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d57257429ddae8129da7df38d22ba2aa2ff0d785)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Merge branch 'main' of https://github.com/MauMuller/react-input-validation
	```

<br />

- **a29280857932f7560e69d020c0fc458c0bdd28d2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a29280857932f7560e69d020c0fc458c0bdd28d2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    A little mistake again with another sintaxy, now, with '.ENV'
	```

<br />

- **e5de7cb1516cff8cbe1ac080a54ba50997c7ef4c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e5de7cb1516cff8cbe1ac080a54ba50997c7ef4c)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **ea2b533d894040b9ee38c560c5240069bd8f2760**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ea2b533d894040b9ee38c560c5240069bd8f2760)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **c65048d8e55fd8ca24567bef55cfc758df1c4cdf**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c65048d8e55fd8ca24567bef55cfc758df1c4cdf)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **353622044f27a69d9c96d7ae24e081a8b0baaddb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/353622044f27a69d9c96d7ae24e081a8b0baaddb)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Merge branch 'main' of https://github.com/MauMuller/react-input-validation
	```

<br />

- **bbc7abedbcfd5e647c20d02ef01a5c77ba99723b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bbc7abedbcfd5e647c20d02ef01a5c77ba99723b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    fix release sintax and increase the -p tag
	```

<br />

- **3305dcc466dde7e7072da448c56872acc1164395**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3305dcc466dde7e7072da448c56872acc1164395)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **9cf1c704503bf962c1531bb0c50afd980777c696**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9cf1c704503bf962c1531bb0c50afd980777c696)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **3867a5985a16a394fe33bac56ae81646fe8af3ec**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3867a5985a16a394fe33bac56ae81646fe8af3ec)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Try to use output from main job to acess by output on needed job
	```

<br />

- **399a8ac2c8b78ef24e06089f5b3e96e0bc1434a0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/399a8ac2c8b78ef24e06089f5b3e96e0bc1434a0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **351ae93da1c2db4d903a851e62db2b8ffce37dd3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/351ae93da1c2db4d903a851e62db2b8ffce37dd3)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **89f7708049366282d27e8f9f2914e1dedd311e6e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/89f7708049366282d27e8f9f2914e1dedd311e6e)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **cddf0e1eac755d2bacd7c35c465b76691c91d604**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cddf0e1eac755d2bacd7c35c465b76691c91d604)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Trying acess env variable to use another job
	```

<br />

- **f6bb2ece3c49f768825bccf69bac7d816aa2706e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f6bb2ece3c49f768825bccf69bac7d816aa2706e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.0
	```

<br />

- **cc8cfea847424b2c9394f0b7e1631c4a4b547202**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cc8cfea847424b2c9394f0b7e1631c4a4b547202)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **08c1dba6c81d28163850834aa201d185d3e72133**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/08c1dba6c81d28163850834aa201d185d3e72133)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **3e42008858340977a50fffa3cf9c8f6d952ebc5b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3e42008858340977a50fffa3cf9c8f6d952ebc5b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Criação da realease e atualização da versão do pacote para biblioteca pública
	```

<br />

- **8fee62126626a6c440f2615a9cc340bcd041889e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8fee62126626a6c440f2615a9cc340bcd041889e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    teste de release
	```

<br />

- **e452ee10d8eca212f1fede00a343b5f8c5c7ac93**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e452ee10d8eca212f1fede00a343b5f8c5c7ac93)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    teste de release
	```

<br />

- **15dd5cc9efebaafa9f488eb75e77f4865e758943**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/15dd5cc9efebaafa9f488eb75e77f4865e758943)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    teste de release
	```

<br />

- **a7432c64cde74885b4ba7d8162b37fd45960bf21**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a7432c64cde74885b4ba7d8162b37fd45960bf21)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do nome da realease para que funcione
	```

<br />

- **4c6f43aa567135fce5e450295614046707a5ff7e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4c6f43aa567135fce5e450295614046707a5ff7e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do nome da realease para que funcione
	```

<br />

- **11f4d05e59ea3d974a2d44ff80bbfc2fde09fa0a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/11f4d05e59ea3d974a2d44ff80bbfc2fde09fa0a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do nome da realease para que funcione
	```

<br />

- **56548a27170a6005eb11912768ad5eedbbf425d5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/56548a27170a6005eb11912768ad5eedbbf425d5)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do nome da realease para que funcione
	```

<br />

- **a964a78825b14cc57341636cc44bc7ab02817304**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a964a78825b14cc57341636cc44bc7ab02817304)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    a
	```

<br />

- **461ead5ae4cda06728b53c38e588cddbe67427a4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/461ead5ae4cda06728b53c38e588cddbe67427a4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    a
	```

<br />

- **f4772cf6a0080085d69e805c09399c03656c83c5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f4772cf6a0080085d69e805c09399c03656c83c5)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do nome dos arquivos e tentiva de pegar o template
	```

<br />

- **bc8a41cc8427647429dd7473e379b729e74d44cb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bc8a41cc8427647429dd7473e379b729e74d44cb)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    mudança de local da variavel
	```

<br />

- **662ccefbdc1a72184ad764af61cb082142d73174**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/662ccefbdc1a72184ad764af61cb082142d73174)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    mudança de local da variavel
	```

<br />

- **f172aacc6f963c8a919a870a1ebb545b95698d6f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f172aacc6f963c8a919a870a1ebb545b95698d6f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Ajuste de versão
	```

<br />

- **f936ab1e625821f349a871c7a8f38c179db9fb29**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f936ab1e625821f349a871c7a8f38c179db9fb29)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Merge branch 'main' of https://github.com/MauMuller/react-input-validation
	```

<br />

- **7354fe97495a64352c9bbb2154831574103e0d4d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7354fe97495a64352c9bbb2154831574103e0d4d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização do arquivo de criação de release para capturar o caminho do rtemplate e utilizar de teste
	```

<br />

- **8ed53778d2820e5d5293b21fec1a3ebfe0f8f14f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8ed53778d2820e5d5293b21fec1a3ebfe0f8f14f)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **3023c87329b5e9c1c48bf4f24e5911f994ae33f7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3023c87329b5e9c1c48bf4f24e5911f994ae33f7)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **15976d3a1df2e27b2b3c087f6c83f1aaf94139e5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/15976d3a1df2e27b2b3c087f6c83f1aaf94139e5)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Incremento do needs para exeutar o JOB apenas depois
	```

<br />

- **573b4c7c50342cf33b9448917625b726ca6350ef**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/573b4c7c50342cf33b9448917625b726ca6350ef)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **fcabeaa80a995b0fa7e21b3ac7e597cd9994f5d4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fcabeaa80a995b0fa7e21b3ac7e597cd9994f5d4)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **c3cfdc84d1555543893aef60a633c7d806a0fcb3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c3cfdc84d1555543893aef60a633c7d806a0fcb3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Criação de 'REALESE' e exibição da atualização!
	```

<br />

- **8e8906cd3eb21c57dc506e68741b90f030ae4443**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8e8906cd3eb21c57dc506e68741b90f030ae4443)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **6f106c34e7bf2ac1723660e2b47a00bab48df9aa**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6f106c34e7bf2ac1723660e2b47a00bab48df9aa)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **412366c8a8110701fd856249bb83ae3edf360c7c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/412366c8a8110701fd856249bb83ae3edf360c7c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Merge pull request #12 from MauMuller/development
    
    Development
	```

<br />

- **012d33c977702f84258d6e64a139fc58805003c1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/012d33c977702f84258d6e64a139fc58805003c1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    testeDeVersão
	```

<br />

- **213ec0452481ede5fc692b068b2940255663d06c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/213ec0452481ede5fc692b068b2940255663d06c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Incremento do package.json
	```

<br />

- **a1deb565ce91ba0a8297d80402fdbbf2b8bf84e0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a1deb565ce91ba0a8297d80402fdbbf2b8bf84e0)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **4efec681a56bd6d4db807c33ccef42594d1ba799**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4efec681a56bd6d4db807c33ccef42594d1ba799)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **004564ea016253172e2e6e3ce13f7f32e81423cb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/004564ea016253172e2e6e3ce13f7f32e81423cb)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update package.json
	```

<br />

- **140a0f0fd586168ac07c6dc96300ac98ea889a48**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/140a0f0fd586168ac07c6dc96300ac98ea889a48)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.1
	```

<br />

- **d0175511a1c02791189b5a71a02a3ade849b0626**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d0175511a1c02791189b5a71a02a3ade849b0626)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    2.0.0
	```

<br />

- **c26cdd4a170f201980b4c96938b72f291d198a15**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c26cdd4a170f201980b4c96938b72f291d198a15)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **30b3fc8a2d7feaf81c1485562421590e7e23ca05**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/30b3fc8a2d7feaf81c1485562421590e7e23ca05)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **b90b0192c77ec1d06d89da8a335c1b4bfa74b054**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b90b0192c77ec1d06d89da8a335c1b4bfa74b054)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **7118a5ce7d11732c297c744409ba1e7122c828c2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7118a5ce7d11732c297c744409ba1e7122c828c2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **b98b2102ae3af8b18fcb17a0921415cc87763398**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b98b2102ae3af8b18fcb17a0921415cc87763398)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Merge branch 'development' of https://github.com/MauMuller/react-input-validation into development
	```

<br />

- **0290dee2eba3d90501bafe5a4a6b4a87a1d7232c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0290dee2eba3d90501bafe5a4a6b4a87a1d7232c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **e9472ad12b0d12459b75c047979be58a63e087e3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e9472ad12b0d12459b75c047979be58a63e087e3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.1.0
	```

<br />

- **c1e72d91769065968f06930f08bcf9b9bdec5de6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c1e72d91769065968f06930f08bcf9b9bdec5de6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.9
	```

<br />

- **94e70077ddd7dd6edff9e18b20f0426fb3d85e84**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/94e70077ddd7dd6edff9e18b20f0426fb3d85e84)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.8
	```

<br />

- **acc5c23edb0fb69c0c4e53facec71a0c5629e6a4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/acc5c23edb0fb69c0c4e53facec71a0c5629e6a4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.7
	```

<br />

- **5397b14bd69fcc7537e2d517cb81c29709b31cb0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5397b14bd69fcc7537e2d517cb81c29709b31cb0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.6
	```

<br />

- **af20528783fa512792e03814e2228bf875d93b99**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/af20528783fa512792e03814e2228bf875d93b99)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.5
	```

<br />

- **80f20563e01ac3e73bd0cd10e24c66edd1ebc383**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/80f20563e01ac3e73bd0cd10e24c66edd1ebc383)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.4
	```

<br />

- **2706ef621c95ee284e1925ea21c209745c0ab6fc**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2706ef621c95ee284e1925ea21c209745c0ab6fc)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.3
	```

<br />

- **b434b99490593b326684d2e43a9df8598f59a1d8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b434b99490593b326684d2e43a9df8598f59a1d8)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.2
	```

<br />

- **e6ef679159600f7096117a87c7a67e9972a8d3d5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e6ef679159600f7096117a87c7a67e9972a8d3d5)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.1
	```

<br />

- **0ff322f97d4fba97e974f60c0e63367a46196f93**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0ff322f97d4fba97e974f60c0e63367a46196f93)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **084c313cbe7f280f5c2da1fc2b741a8226349a1c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/084c313cbe7f280f5c2da1fc2b741a8226349a1c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **2c842adb84db7168e96bec094d1fc77188ab90f5**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2c842adb84db7168e96bec094d1fc77188ab90f5)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **775327102189f7786677e9f7a302ce7aba146c63**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/775327102189f7786677e9f7a302ce7aba146c63)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **0f5bd1573032288fbbfbe448f9c1e8b69b54e1c1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0f5bd1573032288fbbfbe448f9c1e8b69b54e1c1)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **58cb7e01110371cc7e7c4c417db5b096d801523b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/58cb7e01110371cc7e7c4c417db5b096d801523b)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **09aa4847f6ef95c291816544a1543c098cc4b446**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/09aa4847f6ef95c291816544a1543c098cc4b446)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **6f57d5973fa7b09c323c207fc7e03c5dcb5b43f0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6f57d5973fa7b09c323c207fc7e03c5dcb5b43f0)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **999b78ea1dc07cdb988aac82d15013a894d1367b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/999b78ea1dc07cdb988aac82d15013a894d1367b)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **b975cb1b4864c256f5986267f7a7f90804b115d9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b975cb1b4864c256f5986267f7a7f90804b115d9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **59aa732c7f5ec43912fbb09e4a2b6b88b99b6d6d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/59aa732c7f5ec43912fbb09e4a2b6b88b99b6d6d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **cf12d085942d00e92cf730fa92b1288965f7014d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cf12d085942d00e92cf730fa92b1288965f7014d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **1460f1674b0b094bf5ec42c6ff4156576a92359d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1460f1674b0b094bf5ec42c6ff4156576a92359d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **140353f8b7c715e0ab167d10be70e9f7c020a029**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/140353f8b7c715e0ab167d10be70e9f7c020a029)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **04d72c40d942d21436b3af22905db72d3633f80f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/04d72c40d942d21436b3af22905db72d3633f80f)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Merge pull request #11 from MauMuller/development
    
    Development
	```

<br />

- **b520dc39e8e2358069e8349f8205085c3a318a0d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b520dc39e8e2358069e8349f8205085c3a318a0d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Merge branch 'main' into development
	```

<br />

- **21232fa45438c8bf7a603607f8633bc80336c3c6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/21232fa45438c8bf7a603607f8633bc80336c3c6)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Atualização da versão do pacote
	```

<br />

- **13ee060af5cc0e5260f096c4aecb4f1bef40ec08**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/13ee060af5cc0e5260f096c4aecb4f1bef40ec08)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Incremento de versão do package
	```

<br />

- **fcd3358178aa0a635af63a84881b423887d08e68**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fcd3358178aa0a635af63a84881b423887d08e68)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **988683799516ca257f4bcb2d935b9ee9366d4f28**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/988683799516ca257f4bcb2d935b9ee9366d4f28)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    4.0.0
	```

<br />

- **f849619509b35aed7734b35e34289e5b624b60b1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f849619509b35aed7734b35e34289e5b624b60b1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    3.2.1
	```

<br />

- **021096b1db377588880b5f1ed33cede11feb0288**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/021096b1db377588880b5f1ed33cede11feb0288)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    3.2.0
	```

<br />

- **6fb75ffcea839970ce3d7a1af96a760f286f4bca**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6fb75ffcea839970ce3d7a1af96a760f286f4bca)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    3.1.0
	```

<br />

- **aa63e31192a5ad628c96ca5480bcc980a0155b67**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/aa63e31192a5ad628c96ca5480bcc980a0155b67)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    3.0.0
	```

<br />

- **1bb24ae3daa4b29d2261b744f4079b2fd5a8ebbb**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1bb24ae3daa4b29d2261b744f4079b2fd5a8ebbb)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    3.0.0-0
	```

<br />

- **0d59d11f59c0e3a3677f9bd96f7e22b1dcc50209**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0d59d11f59c0e3a3677f9bd96f7e22b1dcc50209)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    2.0.1
	```

<br />

- **3c31a691ceb47a43edc111adc7e4dce4e305bb67**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3c31a691ceb47a43edc111adc7e4dce4e305bb67)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    2.0.0
	```

<br />

- **bf891b577b0457ea58953ec59d8764f0651d7e61**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bf891b577b0457ea58953ec59d8764f0651d7e61)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    1.0.0
	```

<br />

- **28271a55603b283819fca199a03586a26f9615ba**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/28271a55603b283819fca199a03586a26f9615ba)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.11
	```

<br />

- **929aa2b2e4447e2383d4d38831580c772f8007b0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/929aa2b2e4447e2383d4d38831580c772f8007b0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.10
	```

<br />

- **48185b00bcde2e1591ca7ebf6be86dbae97292d4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/48185b00bcde2e1591ca7ebf6be86dbae97292d4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.9
	```

<br />

- **b4d6922842716302aed6cf03e99e6252066e382e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b4d6922842716302aed6cf03e99e6252066e382e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.8
	```

<br />

- **79cb7eecd63301f97b21d463f4c3df55a9c57886**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/79cb7eecd63301f97b21d463f4c3df55a9c57886)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.7
	```

<br />

- **f5e180322483084eaf51eb493c1b91e0f81bd8fe**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f5e180322483084eaf51eb493c1b91e0f81bd8fe)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.6
	```

<br />

- **98ba4a3586242ffe95ef5adfdeb70446266b3585**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/98ba4a3586242ffe95ef5adfdeb70446266b3585)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.5
	```

<br />

- **68d2a969bc85aa8eec72c3907799103f74682d33**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/68d2a969bc85aa8eec72c3907799103f74682d33)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.4
	```

<br />

- **70375d63a2ec39b240e874abb79df80a6699d2be**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/70375d63a2ec39b240e874abb79df80a6699d2be)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.3
	```

<br />

- **17431ad9dc980b5d9bbd418cfd77d8701ab0e1f0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/17431ad9dc980b5d9bbd418cfd77d8701ab0e1f0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.2
	```

<br />

- **595109f224864ad6a53cef5e2ef9548a84d95017**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/595109f224864ad6a53cef5e2ef9548a84d95017)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    0.0.1
	```

<br />

- **db2de5078770ac9de8ded433d44f3926e81bad8b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/db2de5078770ac9de8ded433d44f3926e81bad8b)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **a23b1bff6306f4e0af5f8a1c47b1f1297a98a5d9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a23b1bff6306f4e0af5f8a1c47b1f1297a98a5d9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Merge pull request #10 from MauMuller/development
    
    VERSÃO PACKAGE.JSON ALTERADA; TEMPLATE PARA REALESES; YML PARA AUMENTAR VERSÃO DO PROJETO
	```

<br />

- **b0d272645f7491699725c6bc0af1a251cdcc1bf1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b0d272645f7491699725c6bc0af1a251cdcc1bf1)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 26/12/2022

	```
    Criação de uma realese como forma de template para todas novas realeses que surgirem; Alteração na versão do package.json para começar com '1.0.0'; incremento de um aumentador de versão do package.json
	```

<br />

- **77eae7c47ab7840cad5b95b8a0e8f5e77228f0c8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/77eae7c47ab7840cad5b95b8a0e8f5e77228f0c8)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 26/12/2022

	```
    Update new-release.yml
	```

<br />

- **2dba35177f04dac37f303592b863b671f5e12c09**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2dba35177f04dac37f303592b863b671f5e12c09)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **2fd7579b3b67e4e4509851f39ce33b312ce43743**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2fd7579b3b67e4e4509851f39ce33b312ce43743)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **8ee01505d0df278e437024d539f4447e7f2b34b4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8ee01505d0df278e437024d539f4447e7f2b34b4)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **0b1b8702cae12af1b9cc3481246ee06219674ea6**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/0b1b8702cae12af1b9cc3481246ee06219674ea6)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **cf432ef7898f5199b639bc8b7c2dd45438706636**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/cf432ef7898f5199b639bc8b7c2dd45438706636)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **b99d119c821e1f53755da5294bb93b994bc02042**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b99d119c821e1f53755da5294bb93b994bc02042)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **6488ba603e46dec498c38a277d80f737c6cefe21**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6488ba603e46dec498c38a277d80f737c6cefe21)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **11d84548feeb234d68a675667e5e1a882b5d32c8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/11d84548feeb234d68a675667e5e1a882b5d32c8)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **72ed9de1916a679caf62ca41516eccd3e05aed06**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/72ed9de1916a679caf62ca41516eccd3e05aed06)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update new-release.yml
	```

<br />

- **58ad08f94955fe32f3062348295ee7054e68c2ed**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/58ad08f94955fe32f3062348295ee7054e68c2ed)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Merge pull request #9 from MauMuller/development
    
    Criação do realease YML
	```

<br />

- **7c241679c9c03b0eb196ac5256b730085594460a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7c241679c9c03b0eb196ac5256b730085594460a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    Criação do realease YML
	```

<br />

- **02adcd03c38bb5295a6f0287d04bdbf73bf19cc2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/02adcd03c38bb5295a6f0287d04bdbf73bf19cc2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Merge pull request #7 from MauMuller/development
    
    Desenvolvimento
	```

<br />

- **5eea2ff831479c114d880b7aa4f5573c42792c7f**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5eea2ff831479c114d880b7aa4f5573c42792c7f)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    Geração de uma mensagem para 'ISSUE' no github com um arquivo YML e a CLI do próprio
	```

<br />

- **bb4981fa01b2a71e0a38411105c5ed6b556dce86**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bb4981fa01b2a71e0a38411105c5ed6b556dce86)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    configurações de YML e App
	```

<br />

- **773bebcc8d3f50fb65c05a4d8cb932a1ed64e52d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/773bebcc8d3f50fb65c05a4d8cb932a1ed64e52d)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    Merge branch 'main' into development
	```

<br />

- **1b7fb67ca4240c4b1951e65296bffb9256373059**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1b7fb67ca4240c4b1951e65296bffb9256373059)

	Autor: maummuler - [https://github.com/maummuler/](https://github.com/maummuler/)

	Data: 23/12/2022

	```
    1.0.1
	```

<br />

- **fa5e7efe3a459ebbaa8bcaf96eb12f916db5e559**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fa5e7efe3a459ebbaa8bcaf96eb12f916db5e559)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **58d0dd3b560b1d1288b99d18747ae8c9e2541f36**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/58d0dd3b560b1d1288b99d18747ae8c9e2541f36)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **320641046e3f7362a3358018954fe4104740ab1d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/320641046e3f7362a3358018954fe4104740ab1d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **982bc79772a6d54ac5a46dcfc4339f79c2e14152**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/982bc79772a6d54ac5a46dcfc4339f79c2e14152)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **60deb0042cd98f8a773ab96cddbe0377b413285e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/60deb0042cd98f8a773ab96cddbe0377b413285e)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **27629aa314ac55e772ef1c5f53a97340156c2947**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/27629aa314ac55e772ef1c5f53a97340156c2947)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **a81b51ba9173c0d1f438637db296f1c9cbeaa49d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a81b51ba9173c0d1f438637db296f1c9cbeaa49d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **b0d0c3217b5b211790689bdd66e1a03ca8eeec87**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/b0d0c3217b5b211790689bdd66e1a03ca8eeec87)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    1.0.1
	```

<br />

- **7c85977199d51e73c3d95f375b1eaea5d5b04406**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7c85977199d51e73c3d95f375b1eaea5d5b04406)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **6d735d83de9cf37a4c8eb70e0faae1073b2c493c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/6d735d83de9cf37a4c8eb70e0faae1073b2c493c)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **dbc6d7c2fc88690a2332d09c725f89239df65584**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/dbc6d7c2fc88690a2332d09c725f89239df65584)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **7418c08bcce1e39cc56e052b025d638298022f4d**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7418c08bcce1e39cc56e052b025d638298022f4d)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **4de28e9be21e4b62a255b9aa73865d4cad604603**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4de28e9be21e4b62a255b9aa73865d4cad604603)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **5fda3105ec7864e6170ea523212a212a7bca3a04**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/5fda3105ec7864e6170ea523212a212a7bca3a04)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **91a7df4ab4e6bd2507d488b75abc341c3ff02963**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/91a7df4ab4e6bd2507d488b75abc341c3ff02963)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 23/12/2022

	```
    Merge pull request #6 from MauMuller/development
    
    YAML + IMPORT
	```

<br />

- **2cbef9622fbd0d10acedaa2fe057ca03132eb7c2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2cbef9622fbd0d10acedaa2fe057ca03132eb7c2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 23/12/2022

	```
    Atualização na configuração do YAML e ajuste no arquivo de import para a tipagem do 'isPassword' que ainda estava capturando oimport antigo
	```

<br />

- **1e3e39318eaf5a1f9d7d99897576b950ce9a7126**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1e3e39318eaf5a1f9d7d99897576b950ce9a7126)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **600c9d4ffe6a4f05650c5aa17164cb77bf687c69**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/600c9d4ffe6a4f05650c5aa17164cb77bf687c69)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Merge pull request #5 from MauMuller/development
    
    Alterações no yaml para realizar a publicação do pacote
	```

<br />

- **d4b42c5fd8b9adeddf87f95b7a23dd53769985f2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/d4b42c5fd8b9adeddf87f95b7a23dd53769985f2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Alterações no yaml para realizar a publicação do pacote
	```

<br />

- **9beebc99e0d00102e31ccda8a11e8be691f8c19a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9beebc99e0d00102e31ccda8a11e8be691f8c19a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Merge pull request #4 from MauMuller/development
    
    Arquivos para automatização do YAML
	```

<br />

- **eda86b527da9b9ff561938ac356429b60d5e88d9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/eda86b527da9b9ff561938ac356429b60d5e88d9)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Merge branch 'main' into development
	```

<br />

- **f21d3b04deb3e57fc40247265ae1d14794c53755**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f21d3b04deb3e57fc40247265ae1d14794c53755)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    criação de dois yaml, um para publicação na qual agora está 'completo' e um para despublicar se for preciso
	```

<br />

- **25e8bfb9bc08282cf9cb40ba70ff1e9cff3e8665**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/25e8bfb9bc08282cf9cb40ba70ff1e9cff3e8665)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **17db7c1a5da9c75ff7e9aaf8f159d6f666f88d2a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/17db7c1a5da9c75ff7e9aaf8f159d6f666f88d2a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Update npm-publish.yml
	```

<br />

- **a5c7bed9d845584477a5ba3800d17f7365187aa2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a5c7bed9d845584477a5ba3800d17f7365187aa2)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Merge pull request #3 from MauMuller/development
    
    Development
	```

<br />

- **c298535b0291d23472b899f25cfe727566dc2ae8**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c298535b0291d23472b899f25cfe727566dc2ae8)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Incremento de arquivos e pastas para não serem enviados ao npm na hora de publicar um pacote
	```

<br />

- **1bd8548838ee9dbdbc401931b11c7dbb522569aa**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/1bd8548838ee9dbdbc401931b11c7dbb522569aa)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 22/12/2022

	```
    Merge pull request #2 from MauMuller/feature/hooks-creation
    
    Merge de todas as features novas, ou seja OS HOOKS TÃO CHEGANDO!
	```

<br />

- **504e65b718a2695bd7010a7d32c85c0ec853f9be**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/504e65b718a2695bd7010a7d32c85c0ec853f9be)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```    Criação da lincensa, incremento de novas configurações no packeage.json
    , adição de um yaml para automatização e npmignore
	```

<br />

- **7688252022d275b09e0a296cbe0aef9688c5121c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7688252022d275b09e0a296cbe0aef9688c5121c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```
    Finalizado os testes para as funcionalidades, utilizando um exemplo no app com a chamada do hook
	```

<br />

- **eba2b013691593e1bcc3075ae7e080e7d28582b7**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/eba2b013691593e1bcc3075ae7e080e7d28582b7)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```
    Alterado a pastas de types para dentro do root src, facilitando o acesso global aos tipos em diferentes arquivos, além de realizar a importação de forma automática em todos
	```

<br />

- **e2e997f76ba73054000445ee7f76128ca30dc8ec**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e2e997f76ba73054000445ee7f76128ca30dc8ec)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```
    remoção dos módulos finais na pasta de módulos, agora, não existe mais a necessidade ter módulos, apenas hooks
	```

<br />

- **8b51addabf41293c290f1b5147880d3fd7aa1fce**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/8b51addabf41293c290f1b5147880d3fd7aa1fce)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```
    Finalizado os testes para o hook de password utilizando o hook único
	```

<br />

- **99f6bacaf628da8ad7dee38ce88e44f86d95b72a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/99f6bacaf628da8ad7dee38ce88e44f86d95b72a)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 22/12/2022

	```
    Atualização do hook de password, além do seu incremento no hook principal
	```

<br />

- **158724fdfdece86120ed9dc26f9ee60a1e1ac500**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/158724fdfdece86120ed9dc26f9ee60a1e1ac500)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    atualizando codigo
	```

<br />

- **a4d39992067dd3764cfd790363962f5a23f1ddc3**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a4d39992067dd3764cfd790363962f5a23f1ddc3)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    Criação do hook de password com a funcionalidade de ocultar todos os valores, retornar o valor valido e o com a mascara e validar uma senha específica, porém, ainda necessita de alguns ajustes para enviar o valor atualizado para essa validação de senha]
	```

<br />

- **04440d4b2ba9ad89700eb902d8dac9099afb8431**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/04440d4b2ba9ad89700eb902d8dac9099afb8431)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    Atualização de tipos para todos os arquivos, organizando os tipos que precisam ser de forma global no arquivo 'globalTypes' e o restante juntamente com o arquivo de sua utilização
	```

<br />

- **3e443cc405924927e113bed62112b3facded8dc4**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3e443cc405924927e113bed62112b3facded8dc4)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    criação do hook de 'phone' além de inserido ao 'hook' global, esse contendo todas as propriedades que o módulo possuia antes, porém com uma sintaxe mais simples passada como parte do objeto dentro do valor inicial do useMask
	```

<br />

- **e2a3e3ba0054f7a319fdb36a46cea900abae9e93**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e2a3e3ba0054f7a319fdb36a46cea900abae9e93)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    Atualizações para o hooks de mascarás no geral
	```

<br />

- **2a333122988b5d060dc698df0fc898945fbb01f0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2a333122988b5d060dc698df0fc898945fbb01f0)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    Criação do hooks para telefones, deixando a mascara 100% funcional, porém, ainda falta fazer a validação e colocar dentro do hook principal
	```

<br />

- **7e778f8d91205b96ec3d519db3d6d0cc28a54cf9**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/7e778f8d91205b96ec3d519db3d6d0cc28a54cf9)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 21/12/2022

	```
    Finalizado o hook para acessar todos. Porém, apenas com o incremento do 'cpf', 'cnpj', 'cep' e 'money' até o momento.
	```

<br />

- **3c3cb73aabaccc5e07093a89008f6250731d1f68**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/3c3cb73aabaccc5e07093a89008f6250731d1f68)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 20/12/2022

	```
    Continuação da criação do hook global, porém, ainda existe um erro ocorrendo no arquivo 'modulesObjectToMask' na qual não é possivel utilizar o valor dos objectos passados pelo usuário no hook por conta desses valores serem propriedades especificas e o que ele precisa é uma string qualquer
	```

<br />

- **f14cd9b78c987c93bbf3baf89779f203250bc207**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/f14cd9b78c987c93bbf3baf89779f203250bc207)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 20/12/2022

	```
    Realização dos hooks de forma universal
	```

<br />

- **e9a5aaa96e506554ff153e896115e8b9f9bf2af2**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/e9a5aaa96e506554ff153e896115e8b9f9bf2af2)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 20/12/2022

	```
    Criação do hook de dinheiro, possuindo todas as funcionalidades que o módulo de dinheiro, porém, agora em forma de hook
	```

<br />

- **9aa84f372e1ee0cb5c0a7cfbf0d76d51f079d765**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/9aa84f372e1ee0cb5c0a7cfbf0d76d51f079d765)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 20/12/2022

	```
    Mudança na estrutura das máscaras, agora com aideia focada em 'Hooks' ao contraário de módulos. Essa mudança deve-se a facilitar de adicionar outras bibliotecas quando se utiliza um hook e assim, o usuário que tem a responsabilidade de criar o campo de texto, apenas precisa de algumas propriedades para ter acesso a mascará especifica
	```

<br />

- **37bbb74924b7ff4a89c07b79502f87c50dea030e**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/37bbb74924b7ff4a89c07b79502f87c50dea030e)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 20/12/2022

	```
    Ajute do valor e tipo da varavel 'KeyDown' que antes recebia o valor de string, sendo o 'Backspace', agora funciona como um boolean apenas com true e false para facilitar no entendimento e deixar apenas duas possiblidades para o valor por transitar por todo o código
	```

<br />

- **57607dbeaed5ce4f03d4a403a8de625958ff2e9c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/57607dbeaed5ce4f03d4a403a8de625958ff2e9c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 20/12/2022

	```
    Redução no código do inputCPF
	```

<br />

- **c811fe03c43bbcf535a67d692ea11748be4a0a45**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c811fe03c43bbcf535a67d692ea11748be4a0a45)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 19/12/2022

	```
    Incremento de pontos para a mascara de 'MONEY'
	```

<br />

- **a56280194fbffb42f5dda09ebed8c802b3f36950**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/a56280194fbffb42f5dda09ebed8c802b3f36950)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Atualizações gerais
	```

<br />

- **c631164c1000d87f678abf1dc2d3d811bd192b28**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c631164c1000d87f678abf1dc2d3d811bd192b28)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Ajustes de tipagem para todos modulos e arquivos
	```

<br />

- **4a21f9dbf08e5a125dc50fa95d46c4cf31d84cca**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4a21f9dbf08e5a125dc50fa95d46c4cf31d84cca)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    criação do metodo para mostrar apenas a senha sem a mascará, no componente de 'password'
	```

<br />

- **ca77b2b6adf540ffa7ceaeb44422b265e6be9c8b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ca77b2b6adf540ffa7ceaeb44422b265e6be9c8b)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Criação do componente do componente da mascara de password
	```

<br />

- **4198d6ec9597b9916470832bc3103e2a46f46908**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/4198d6ec9597b9916470832bc3103e2a46f46908)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Criação da mascara de telefones, tanto fixo quanto movel
	```

<br />

- **600b58b505f91f4164602c25024a06699967c565**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/600b58b505f91f4164602c25024a06699967c565)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Criação da mascara de money, com o funcionamento de virgula
	```

<br />

- **66734f60a4b4a7a396463cec9e962b9971011027**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/66734f60a4b4a7a396463cec9e962b9971011027)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Criação do campo de CEP para a validação e verificação
	```

<br />

- **fec61b1b66e15b8f757f0f1819910ff6ba804d2c**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/fec61b1b66e15b8f757f0f1819910ff6ba804d2c)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Ajutes de propriedades e tipagens nos campos CNPJ e CPF, respectivamente
	```

<br />

- **845b983d0a6e55e54a7cb67b9b92d1fa51166d52**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/845b983d0a6e55e54a7cb67b9b92d1fa51166d52)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Criação do componente de CNPJ
	```

<br />

- **44957aa7a09ae9158d2fe2630066a3c51d10d739**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/44957aa7a09ae9158d2fe2630066a3c51d10d739)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    mundanças na maneira de utilização das validações
	```

<br />

- **c627ee5be82ba0c1c00198ce9dd9160ba4e06a93**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/c627ee5be82ba0c1c00198ce9dd9160ba4e06a93)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 19/12/2022

	```
    Ajutes nas mascaras de 'MONEY' e 'PHONE'
	```

<br />

- **ed9acc821f8a799b90a4b7d885ed76e58f5c1a6b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/ed9acc821f8a799b90a4b7d885ed76e58f5c1a6b)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 18/12/2022

	```
    incremento de função para conversão de zeros em underline
	```

<br />

- **706b003c4dd4e2c1793ff71a85125989008575da**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/706b003c4dd4e2c1793ff71a85125989008575da)

	Autor: MauMuller - [https://github.com/MauMuller/](https://github.com/MauMuller/)

	Data: 16/12/2022

	```
    Atualização dos arquivos em geral
	```

<br />

- **bcf0b0c03c83244f1b2871d2d7490e4745ba9fe0**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/bcf0b0c03c83244f1b2871d2d7490e4745ba9fe0)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 15/12/2022

	```
    Inicação da mascará de money e pensando em alternativas para realizar o restante
	```

<br />

- **06bc46d5051c980ca18329d903af6532c2779031**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/06bc46d5051c980ca18329d903af6532c2779031)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 14/12/2022

	```
    Primeira versão da mascará de money
	```

<br />

- **31e2e83673db34d387b6f2eb1546003290a0c9ce**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/31e2e83673db34d387b6f2eb1546003290a0c9ce)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 13/12/2022

	```
    remoção das propriedades
	```

<br />

- **33c879adfb0a3b2d3e040ee7a6d9829d345d98e1**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/33c879adfb0a3b2d3e040ee7a6d9829d345d98e1)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 13/12/2022

	```
    Incremento de valor padrão para completar parte do input ou mascará
	```

<br />

- **2599171c21ef599be681cceff2e0c3b8a1c6398b**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/2599171c21ef599be681cceff2e0c3b8a1c6398b)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 13/12/2022

	```
    Incremento de um fone inteiro e um fone sem o pais e ajustes de bug para apagar mascará
	```

<br />

- **daf8c6e56e853336621f647735b06880301d709a**

	Link para o commit: [Ver modificações do commit](https://github.com/MauMuller/valisk/commit/daf8c6e56e853336621f647735b06880301d709a)

	Autor: Mauricio - [https://github.com/Mauricio/](https://github.com/Mauricio/)

	Data: 12/12/2022

	```
    Primeiro commit, Primeira versão da bibilioteca, ainda em versão instável!
	```

<br />

