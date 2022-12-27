<div  
  style="
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid #696969
">
  <img 
    src="https://ik.imagekit.io/e6khzhxvx/Valisk?ik-sdk-version=javascript-1.4.3&updatedAt=1672157447910" 
    width="120"
  />
  <div style="width:25rem;">
    <span style="
      font-weight:bold; 
      font-size:1.5rem;
      color:white;"
    >
      React Valisk
    </span>
    <p style="font-size:0.8rem">
      Trata-se de uma biblioteca com a finalidade de proporcionar mascaras e validações para os campos de texto, tudo por meio de HOOKS, visando as tipagens e variadas opções para personalização.
    </p>
  </div>
</div>

<div style="
  padding-bottom: 0.8rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/react-valisk?color=%23ff1f3d&label=npm&style=for-the-badge" width="90">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/react-valisk/publish-package-and-release.yml?color=black&style=for-the-badge" width="105">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/react-valisk?color=%23ff1f3d&style=for-the-badge" width="90">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/react-valisk?color=black&style=for-the-badge" width="120">
</div>

<div align="center">
  <img src="https://ik.imagekit.io/e6khzhxvx/valisk-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672165728023" width="500">
</div>

<div style="
  display: flex;
  justify-content: center;
  align-items: center;
">

<div style="
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40rem;
  flex-direction:column;
">

<div align="center" style="width:100%;">

Essa é uma biblioteca feita em **REACT** e **TYPESCRIPT**, porém pode ser integrada com qualquer outra lib/framework, isso porque assim como os `hooks` do REACT, VALISK apenas utiliza `hooks` para controlar o campo de texto.

</div>

<!-- <p align="center" style="width:100%;">
  <a href="#Introducao">Introdução</a>
  &nbsp;&bull;&nbsp;
  <a href="#installation">Installation</a>
  &nbsp;&bull;&nbsp;
  <a href="#usage">Usage</a>
  &nbsp;&bull;&nbsp;
  <a href="#documentation">Documentation</a>
  &nbsp;&bull;&nbsp;
  <a href="#issue">Issue?</a>
</p> -->

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
