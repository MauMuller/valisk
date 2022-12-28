[<img align="left" height="125px" width="125px" alt="Warpnet" src="https://ik.imagekit.io/e6khzhxvx/Valisk?ik-sdk-version=javascript-1.4.3&updatedAt=1672157447910"/>]()

#### React Valisk

Trata-se de uma biblioteca com a finalidade de proporcionar mascaras e validações para os campos de texto, tudo por meio de `HOOKS`, visando as tipagens e variadas opções para personalização.

<br />

<div align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/react-valisk?color=%23ff1f3d&label=npm&style=for-the-badge" width="100">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/react-valisk/publish-package-and-release.yml?color=black&style=for-the-badge" width="130">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/react-valisk?color=%23ff1f3d&style=for-the-badge" width="100">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/react-valisk?color=black&style=for-the-badge" width="140">
</div>

<div align="center">
  <img src="https://ik.imagekit.io/e6khzhxvx/valisk-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672165728023" width="500">
</div>

<div style="
  display: flex;
  justify-content: center;
  align-items: center;
">

<div>
  <div align="center">

> Essa é uma biblioteca feita em **REACT** e **TYPESCRIPT**, porém pode ser integrada com qualquer outra lib/framework, isso porque assim como os `hooks` do REACT, VALISK apenas utiliza `hooks` para controlar o campo de texto.

  </div>

## Introdução

A ideia da construção da biblioteca já existia a muito tempo, porém, apenas depois de adquirir conhecimento das técnologias da modernidade que fui capaz de realiza-lá.

**Valisk** trabalha `hooks`, ou seja, funcionalidades que realizam algumas tarefas para facilitar o dia a dia do desenvolvedor, esses hooks são a essencia do React funcional, aqui está um link para entender melhor sobre o funcionamento -> [React Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper).

A biblioteca disponibiliza _métodos_, _hooks_ e _valores_ iniciais para deixar bem completo o desenvolvimento.

Agora segue abaixo o menu para um **roadmap** de refencia sobre a Lib:

### Mapa de uso

- [Instalação](#instalação)

## Instalação

Para sua utilização é necessário instalar o pacote, para isso temos algumas opções:

### NPM

```shell
npm i react-valisk
```

### Github

```shell
Em breve...
```

### Yarn

```shell
Em breve...
```

## Casos de usos

Aqui iremos entrar em alguns exemplos de uso, porém o foco é apenas o a apresentação do hook.

## API de Referencia

Todas as referencias, tipos e métodos estão aqui, qualquer tipo de dúvida, relacionado a passagem de parametros pode encontrar aqui juntamente com o nome `padrão` dados ao retorno a partir do array.

Esses valores são chamados de `ParametroDeEntrada` e `ValoresDeSaida`, ambos são essenciais para a execução da biblioteca, sua sintaxe é extremamente intuitiva:

```JS
import { useMasks } from "react-valisk";

const [values, setValues, isValid, setKey] = useMasks({
  cpf: {
    inicialValue: '0452',

  }

});
```

Aqui

### useMaskCPF

**useMaskCPF** precisa receber obrigatóriamente um (objeto `{}`), dentro desse objetos ele pode receber duas propriedades:

| Propriedade | Tipagem | ASDASD |
| :---------- | :------ | :----- |
| aaa         | AAA     | ASDASD |

</div>

</div>
