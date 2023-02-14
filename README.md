[<img align="left" height="165px" width="135px" alt="Warpnet" src="https://ik.imagekit.io/e6khzhxvx/Group_3Valisk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672190456214"/>]()

# Valisk

É uma biblioteca feita para campos **UNCONTROLLED** e **CONTROLLED**, incluindo várias máscaras para serem utilizadas de uma maneira muito fácil e performática.

> EXTRA: Quando integrada ao `react-hook-form`, ela consegue trabalhar da melhor forma possivel, misturando as validações e controles dos campos, ás máscaras com personalização e sem renderizações desnecessárias.

<br />

<div align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/valisk?color=%23ff1f3d&label=version&style=for-the-badge" width="140">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/valisk/publish-package.yml?color=black&style=for-the-badge" width="150">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/valisk?color=%23ff1f3d&style=for-the-badge" width="120">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/valisk?color=black&style=for-the-badge" width="160">
</div>

<br />

<div align="center">

[<img width="500" src="https://ik.imagekit.io/e6khzhxvx/Principal.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676373284854"/>]()

</div>

<br />

<div align="center">

✅ Documentação completa com vários exemplos ilustrados, api de refência e casos de uso.<br/>
✅ Integração com outras libs/frameworks de maneira fácil.<br/>
✅ Suporte a JAVASCRIPT e TYPESCRIPT.<br/>

</div>

<br />

## Introdução

A ideia da construção da biblioteca já existia a muito tempo, porém, apenas depois de adquirir conhecimento das técnologias da modernidade que fui capaz de realiza-lá.

**Valisk** trabalha com campos `CONTROLLED` e `UNCONTROLLED`, ou seja, te dando a possiblidade de controllar a renderização sem se precoupar com a `usabilidade do usuário`, essa `responsabilidade` é da `lib`.

A biblitoeca disponibiliza _métodos_ e _tipos_, apenas o necessário para o desenvolvimento. Qualquer dúvida, basta navegar até a sessão -> [API de Referência](#api-de-referência) e procurar pela questão em especial ou ainda, mandar uma issue.

Agora segue abaixo o menu para um **roadmap** de refencia sobre a Lib:

### Mapa da documentação

- [Instalação](#instalação)

  - [NPM](#npm)
  - [YARN](#yarn)
  - [PNPM](#pnpm)

  <br />

- [Casos de Uso](#casos-de-uso)

  - [Uncontrolled](#uncontrolled)
  - [Controlled](#controlled)
  - [React Hook Form](#react-hook-form)

  <br />

- [API de Referência](#api-de-referência)

  - [Entrada](#entrada)

    - [useValisk\<Campos>](#usevaliskcampos)

  - [Parâmetros](#parâmetros)

    - [CPF](#cpf)
    - [CNPJ](#cnpj)
    - [CEP](#cep)
    - [MONEY](#money)
    - [PHONE](#phone)
    - [PASSWORD](#password)

  - [Retornos](#retornos)
    - [\_masks](#_masks)
    - [\_forceUpdate](#_forceupdate)
    - [\_cleanValues](#_cleanvalues)
    - [\_getValues](#_getvalues)

- [Dúvidas](#dúvidas)

  - [Dúvidas no uso da lib?](#duvidas-uso-da-lib)
  - [Encontrou algum problema?](#encontrou-algum-problema)
  - [Tem algumas ideias para contribuir?](#ideais-para-contribuir)
  - [Ta afim de contribuir codando?](#contribuir-codando)

<br />

## Instalação

Para sua utilização é necessário a instalação do pacote, para isso existem algumas possibilidades até o momento, entre elas:

- ### NPM

  **Link para a página oficial**
  <https://www.npmjs.com/package/@libsdomau/valisk>

  <br/>

  ```shell
    npm i @libsdomau/valisk
  ```

- ### Yarn

  **Link para a página oficial**
  <https://yarn.pm/@libsdomau/valisk>

  <br />

  ```shell
    yarn add @libsdomau/valisk
  ```

- ### PNPM

  **Link para a página oficial**
  <https://www.npmjs.com/package/@libsdomau/valisk>

  <br />

  ```shell
    pnpm add @libsdomau/valisk
  ```

<br />

## Casos de uso

Aqui iremos entrar em alguns exemplos de uso, porém o foco é apenas a apresentação da lib com algumas ilustrações.

**Obeservação:** Todos exemplos abaixos conterão `typescript`, caso queira utilizar com javascript, basta remover as tipagens.

- #### Uncontrolled

    <details>
    <summary id="utilização-simples">Iniciando com campos <b>uncontrolled</b></summary>

  Nesse exemplo será utilizado uma demonstração apenas com o `_masks`, `_getValues`, com as propriedades `cpf` e `money`.

  ```TSX
  import { CSSProperties, FormEvent } from "react";
  import { useValisk } from "@libsdomau/valisk";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
    color: "#fff",
  };

  let renderCounter = 0;

  function App() {
    console.log(`Renderizou ${++renderCounter}`);

    interface Inputs {
      campo1: string;
      campo2: string;
    }

    const { _masks, _getValues } = useValisk<Inputs>({
      cpf: { name: "campo1" },
      money: { name: "campo2", typeMoney: "real", explictMask: true },
    });

    const showValues = (data: Inputs) => {
      evt.preventDefault();
      console.log(data);
    };

    return (
      <form style={globalStyle} onSubmit={_getValues(showValues)}>
        <input type="text" {..._masks("campo1")} />
        <input type="text" {..._masks("campo2")} />
        <button>Mostrar</button>
      </form>
    );
  }

  export default App;
  ```

  Output:

  | 123.124.123-51 | 0,52 | Mostrar |
  | :------------- | :--- | :------ |

  Console:

  ```SHELL
    1 Renderização!
    {campo1: '123.124.123-51', campo2: '0,52'}
  ```

  </details>

  <details>
  <summary id="utilização-simples">Utilizando o _forceUpdate para mostrar valor do password</summary>

  Neste caso, iremos alterar o valor do campo para mostrar o valor normal apenas com o método `_forceUpdate` e um estado do button, fazendo assim alterar de escondido para o valor normal, tudo de forma uncontrolled.

  ```TSX
  import { CSSProperties, useEffect, useState } from "react";
  import { useValisk } from "@libsdomau/valisk";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#fff",
  };

  let renderCounter = 0;

  function App() {
    console.log(`${++renderCounter} Renderização`);
    const [hideValue, setHideValue] = useState(true);

    interface Inputs {
      passwordInput: string;
    }

    const { _masks, _forceUpdate } = useValisk<Inputs>({
      password: { name: "passwordInput", hideValue: hideValue },
    });

    const textButton = hideValue ? "Mostrar" : "Esconder";

    useEffect(() => {
      _forceUpdate({ inputName: "passwordInput", inputType: "uncontrolled" });
    }, [hideValue]);

    return (
      <form style={globalStyle} onSubmit={(evt) => evt.preventDefault()}>
        <input type="text" {..._masks("passwordInput")} />
        <button onClick={() => setHideValue(!hideValue)}>{textButton}</button>
      </form>
    );
  }

  export default App;

  ```

  Output:

  | 123456789 | Esconder |
  | :-------- | :------- |

  Console:

  ```SHELL
    1 Renderização!
    2 Renderização!
  ```

  </details>

<br/>

- #### Controlled

  <details>
  <summary>Iniciando com campos <b>controlled</b></summary>

  Aqui foi utilizado apenas o `_masks` e a propriedade `phone`, com renderização no campo para alterar a lista.

  ```TSX
  import { CSSProperties, useState } from "react";
  import { useValisk } from "@libsdomau/valisk";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#fff",
  };

  let renderCounter = 0;

  function App() {
    console.log(`${++renderCounter} Renderização!`);

    interface Inputs {
      phoneInput: string;
    }

    const randomNumbers = [...Array(10)].map(
      () => `+${Math.round(Math.random() * 100000000)}`
    );

    const [data] = useState(randomNumbers);
    const [phoneInput, setPhoneInput] = useState("");

    const filtredPhones = data.filter((number) => number.includes(phoneInput));

    const { _masks } = useValisk<Inputs>({
      phone: { name: "phoneInput", typePhone: "phoneMovel", showDDD: true },
    });

    return (
      <div style={globalStyle}>
        <form>
          <input
            type="text"
            id="cnpj1"
            value={phoneInput}
            onChange={(evt) => setPhoneInput(evt.target.value)}
            {..._masks("phoneInput")}
          />
        </form>

        <ul>
          {filtredPhones.map((numbers, indNumbers) => (
            <li key={indNumbers}>{numbers}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;
  ```

  Output:

  | +64 |
  | :-- |

  - +64044127
  - +64203623

  Console:

  ```SHELL
  1 Renderização!
  2 Renderização!
  3 Renderização!
  ```

  </details>

  <details>
  <summary>Utilizando multiplos campos com o mesmo tipo de máscara</summary>

  Aqui foi utilizado o `_masks` e as propriedades `cep` e `cnpj`, possibilidando utilizar múltiplas vezes o mesmo tipo de valor.

  ```TSX
  import { CSSProperties, useState } from "react";
  import { useValisk } from "@libsdomau/valisk";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#fff",
  };

  let renderCounter = 0;

  function App() {
    console.log(`${++renderCounter} Renderização`);

    interface Inputs {
      cnpj1: string;
      cnpj2: string;
      cep1: string;
      cep2: string;
    }

    const [inputs, setInputs] = useState([
      { id: "cnpj1", value: "" },
      { id: "cnpj2", value: "" },
      { id: "cep1", value: "" },
      { id: "cep2", value: "" },
    ]);

    const { _masks } = useValisk<Inputs>({
      cnpj: [{ name: "cnpj1", explictMask: true }, { name: "cnpj2" }],
      cep: [{ name: "cep1", explictMask: true }, { name: "cep2" }],
    });

    const objectInput = (id: keyof Inputs) => inputs.find((obj) => obj.id === id);
    const changeInputValue = (value: string, id: keyof Inputs) => {
      setInputs((prev) =>
        prev.map((obj) => (obj.id === id ? { ...obj, value } : obj))
      );
    };

    return (
      <form style={globalStyle}>
        <label htmlFor="cnpj1">cnpj1</label>
        <input
          type="text"
          id="cnpj1"
          value={objectInput("cnpj1")?.value}
          onChange={(evt) => changeInputValue(evt.target.value, "cnpj1")}
          {..._masks("cnpj1")}
        />

        <label htmlFor="cnpj1">cnpj2</label>
        <input
          type="text"
          id="cnpj2"
          value={objectInput("cnpj2")?.value}
          onChange={(evt) => changeInputValue(evt.target.value, "cnpj2")}
          {..._masks("cnpj2")}
        />

        <label htmlFor="cep1">cep1</label>
        <input
          type="text"
          id="cep1"
          value={objectInput("cep1")?.value}
          onChange={(evt) => changeInputValue(evt.target.value, "cep1")}
          {..._masks("cep1")}
        />

        <label htmlFor="cep1">cep2</label>
        <input
          type="text"
          id="cep2"
          value={objectInput("cep2")?.value}
          onChange={(evt) => changeInputValue(evt.target.value, "cep2")}
          {..._masks("cep2")}
        />
      </form>
    );
  }

  export default App;
  ```

  Output:

  | cnpj1                    | cnpj2     | cep1         | cep2    |
  | :----------------------- | :-------- | :----------- | :------ |
  | 12.\_\_.\_\_/\_\_\_-\_\_ | 12.341.23 | 67786-\_\_\_ | 23334-5 |

  Console:

  ```SHELL
    1 Renderização
    2 Renderização
    3 Renderização
    ...
    10 Renderização
    12 Renderização
    ...
    22 Renderização
  ```

  </details>

<br />

- #### React-Hook-Form

  <details>
  <summary>Integração + Valores iniciais</summary>

  Nesse exemplo, iremos apenas integrar a lib com o `react-hook-form` colocando um valor inicial.

  ```TSX
  import { CSSProperties, useEffect } from "react";
  import { useValisk } from "@libsdomau/valisk";
  import { useForm } from "react-hook-form";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#fff",
  };

  let renderCounter = 0;

  function App() {
    console.log(`${++renderCounter} Renderização`);

    interface Inputs {
      firstInput: string;
      secondInput: string;
    }

    const { register, setValue } = useForm<Inputs>({
      defaultValues: { firstInput: "123", secondInput: "456" },
    });

    const { _masks, _forceUpdate } = useValisk<Inputs>({
      phone: [
        {
          name: "firstInput",
          typePhone: "phoneFixo",
          explictMask: true,
          showDDD: true,
        },
        {
          name: "secondInput",
          typePhone: "phoneMovel",
          showDDD: true,
          showPrefix: true,
        },
      ],
    });

    useEffect(() => {
      _forceUpdate([
        {
          inputName: "firstInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
        {
          inputName: "secondInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
      ]);
    }, []);

    return (
      <form style={globalStyle} onSubmit={(evt) => evt.preventDefault()}>
        <input
          type="text"
          {...register("firstInput")}
          {..._masks("firstInput")}
        />

        <input
          type="text"
          {...register("secondInput")}
          {..._masks("secondInput")}
        />
      </form>
    );
  }

  export default App;
  ```

  Output:

  | +12 3\_\_\_-\_\_\_\_ | +45 6 |
  | :------------------- | :---- |

  Console:

  ```SHELL
  1 Renderização
  ```

  </details>

  <details>
  <summary>Utilização do método _cleanVal e todas outras variações dos campos</summary>

  ```JSX
  import { CSSProperties, useEffect, useState } from "react";
  import { useValisk } from "@libsdomau/valisk";
  import { useForm, SubmitHandler } from "react-hook-form";

  const globalStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    color: "#fff",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  let renderCounter = 0;

  function App() {
    console.log(`${++renderCounter} Renderização`);
    const [hideValue, setHideValue] = useState(false);

    interface Inputs {
      firstInput: string;
      secondInput: string;
      thirtyInput: string;
      fourtyInput: string;
      fiftyInput: string;
    }

    const { register, setValue, handleSubmit } = useForm<Inputs>({
      defaultValues: { firstInput: "123", secondInput: "456" },
    });

    const { _masks, _forceUpdate, _cleanVal } = useValisk<Inputs>({
      phone: [
        {
          name: "firstInput",
          typePhone: "phoneFixo",
          explictMask: true,
          showDDD: true,
        },
        {
          name: "secondInput",
          typePhone: "phoneMovel",
          showDDD: true,
          showPrefix: true,
        },
      ],
      password: {
        name: "thirtyInput",
        hideValue: hideValue,
      },
      money: [
        {
          name: "fourtyInput",
          typeMoney: "real",
          explictMask: true,
          explictSimbol: true,
        },
        {
          name: "fiftyInput",
          typeMoney: "dollar",
          explictMask: true,
          explictSimbol: false,
        },
      ],
    });

    const showValues: SubmitHandler<Inputs> = (data) => {
      console.log(data);
      console.log(_cleanVal(data));
    };

    useEffect(() => {
      _forceUpdate([
        {
          inputName: "firstInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
        {
          inputName: "secondInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
        {
          inputName: "fourtyInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
        {
          inputName: "fiftyInput",
          inputType: "react_hook_form",
          dispatchSetValue: setValue,
        },
      ]);
    }, []);

    useEffect(() => {
      _forceUpdate({
        inputName: "thirtyInput",
        inputType: "react_hook_form",
        dispatchSetValue: setValue,
      });
    }, [hideValue]);

    return (
      <div style={globalStyle}>
        <form onSubmit={handleSubmit(showValues)} style={formStyle}>
          <input
            type="text"
            {...register("firstInput")}
            {..._masks("firstInput")}
          />

          <input
            type="text"
            {...register("secondInput")}
            {..._masks("secondInput")}
          />

          <input
            type="text"
            {...register("thirtyInput")}
            {..._masks("thirtyInput")}
          />

          <input
            type="text"
            {...register("fourtyInput")}
            {..._masks("fourtyInput")}
          />

          <input
            type="text"
            {...register("fiftyInput")}
            {..._masks("fiftyInput")}
          />

          <button>Mostrar Valores</button>
        </form>

        <button onClick={() => setHideValue(!hideValue)}>
          {hideValue ? "Mostrar" : "Ocultar"} Senha
        </button>
      </div>
    );
  }

  export default App;
  ```

  Output:

  | +12 3323-444\_ | +45 61 2 | •••••••••• | R$ 0,00 | 1,234.12 | Mostrar Valores | Mostrar Senha |
  | :------------- | :------- | :--------- | :------ | :------- | :-------------- | ------------- |

  Console:

  ```SHELL
  1 Renderização
  2 Renderização

  {
    fiftyInput: "1,234.12",
    firstInput: "+12 3323-444_",
    fourtyInput: "R$ 44,55",
    secondInput: "+45 61 2",
    thirtyInput: "1255555563"
  }

  {
    fiftyInput: "123412",
    firstInput: "123323444",
    fourtyInput: "4455",
    secondInput: "45612",
    thirtyInput: "1255555563"
  }
  ```

  </details>

<br />

## API de Referência

Nessa sessão você poderá tirar todas suas dúvidas quanto a parametros ou retornos dos métodos, assim como ententer os tipos e até mesmo verificar a sintaxe de utilização para variados casos de uso.

Antes de continuar com a referência, lembre-se que é possível trabalhar de diversas formas com a lib, isso para atender aos mais variados casos de uso, porém, ela foi projetada para ser `integrada ao react-hook-form`, isso pois essa lib já resolve de forma muito eficiênte validações e controle sobre os campos, por isso, **valisk** realmente brilha com a sua utilização em conjunto.

Mesmo, a lib sendo incrivelmente poderosa com o react-hook-forms, ela pode ser utilizada sozinha da mesma forma, um exemplo disso é o método `_getValues`, na qual faz a mesma coisa que o onSubmit do `react-hook-form`, justamente para ser utilizado em conjunto com o `_cleanValues`, obtendo assim, todos os valores de forma limpa.

Por baixo dos panos, a lib realiza de forma uncontrolled a colocação da mascára nos campos, utilizando evento padrões do Javascript e eficiêntes códigos para gerar as máscarás.

Agora, vamos para os métodos.

---

## @ Types

| Nomes                      | Valor de tipagam                                                                     | Visual do Tipo                                               |
| :------------------------- | :----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| ForceUpdateParams\<Campos> | { inputName: '...', inputType: "controlled", dispatchSetValue: function }            | {...} \| [{...}, {...}, ...]                                 |
| MaskTypes\<Campos>         | { cep: {...}, cpf: {...}, cnpj: {...}, password: {...}, money: {...}, phone: {...} } | {[\name_mask]: [{...}, {...}, ...]} \| {[\name_mask]: {...}} |

## @ useValisk

Hook que será utilizado para informar quais serão as máscaras e quais métodos de retorno serão necessários.

<br/>

- ### Entrada

  ***

  Caso você esteja utilizando `javascript`, pode ignorar essa parte, ela será apenas importante para `typescript`. Agora, caso seja este o caso, é importante enter a funcionalidade abaixo.

  - ### useValisk\<campos>

  Essa declaração é necessária para que o typescript possa utilizar os nomes dos campo de texto e assim, deixar de maneira explicita qual será o campo a possuir a máscara.

  Sintaxe:

  ```TSX
  interface Inputs {
    teste1: string;
    teste2: string;
  }

  const { ... } = useValisk /* Aqui -> */<Inputs>(...)
  ```

  Assim como o `react-hook-form`, o **Valisk** também precisa desses de entrada, ou seja, é possivel utilizar essa mesma tipagem para ambas bibliotecas.

  Após colocar como entrada do hook a tipagem dos campos, você já irá notar que todos os parâmetros e propriedades que precisam do nome do campo, irão retornar todos os campos, facilitando o processo de escolher qual nome do campo que precisa de tal máscara.

  Sabendo disso, apenas informe sempre os tipos dos campos e deixe que o typescript e o valisk façam esse trabalho por você!

<br/>

- ### Parâmetros

  ***

  Aqui estára todas as possibilidades de máscaras para serem inseridas, em breve terão mais outras para serem incluidas.

  - ### CPF

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //000.000.000-00
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        cpf: {
          name: "...", //nome do campo
          explictMask: false
        },

        // ou

        cpf: [
          {
            name: "...",
            explictMask: false
          },
          {
            name: "...",
            explictMask: false
          }
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades  | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
    | :------------ | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
    | `name`        | Campos                | ""              | Sim         | Nome do campo                            |
    | `explictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

      </details>

      </dd>
    </dl>

    <br />

  - ### CNPJ

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //00.000.000/0000-00
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        cnpj: {
          name: "...", //nome do campo
          explictMask: false
        },

        // ou

        cnpj: [
          {
            name: "...",
            explictMask: false
          },
          {
            name: "...",
            explictMask: false
          }
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades  | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
    | :------------ | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
    | `name`        | Campos                | ""              | Sim         | Nome do campo                            |
    | `explictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

      </details>

      </dd>
    </dl>

    <br />

  - ### CEP

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //00000-000
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        cep: {
          name: "...", //nome do campo
          explictMask: false
        },

        // ou

        cep: [
          {
            name: "...",
            explictMask: false
          },
          {
            name: "...",
            explictMask: false
          }
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades  | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
    | :------------ | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
    | `name`        | Campos                | ""              | Sim         | Nome do campo                            |
    | `explictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

      </details>

      </dd>
    </dl>

    <br />

  - ### MONEY

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //R$ 0,00 - Com Simbolo
    //0,00

    //US$ 0.00 - Com Simbolo
    //0.00

    //€ 0.00 - Com Simbolo
    //0.00
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        money: {
          name: "...", //nome do campo
          typeMoney: "real",
          explictMask: true,
          explictSimbol: true,
        },

        // ou

        cep: [
          {
            name: "...",
            typeMoney: "real",
            explictMask: true,
            explictSimbol: true,
          },
          {
            name: "...",
            typeMoney: "real",
            explictMask: true,
            explictSimbol: true,
          },
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades    | Tipos                        | Valores Padrões | Obrigatório | Descrição                                            |
    | :-------------- | :--------------------------- | :-------------- | :---------- | :--------------------------------------------------- |
    | `name`          | Campos                       | ""              | Sim         | Nome do campo                                        |
    | `typeMoney`     | "real" \| "dollar" \| "euro" | "real"          | Sim         | Tipo de moeda para máscara                           |
    | `explictMask`   | boolean _/_ undefined        | false           | Não         | Utilização da máscara de forma explicita             |
    | `explictSimbol` | boolean _/_ undefined        | false           | Não         | Mostra o simbolo da moeda escolhida ao lado esquerdo |

      </details>

      </dd>
    </dl>

    <br />

  - ### PHONE

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //Celular Completo
    //+00 (00) 0 0000-0000

    //Celular Com Prefixo
    //(00) 0 0000-0000

    //Celular Com DDD
    //+00 0 0000-0000

    //Celular
    //0 0000-0000

    //Telefone Completo
    //+00 (00) 0000-0000

    //Telefone Com Prefixo
    //(00) 0000-0000

    //Telefone Com DDD
    //+00 0000-0000

    //Telefone
    //0000-0000
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        phone: {
          name: "...", //nome do campo
          typePhone: "phoneMovel",
          explictMask: false,
          showDDD: false,
          showPrefix: false
        },

        // ou

        phone: [
          {
            name: "...", //nome do campo
            typePhone: "phoneMovel",
            explictMask: false,
            showDDD: false,
            showPrefix: false
          },
          {
            name: "...", //nome do campo
            typePhone: "phoneMovel",
            explictMask: false,
            showDDD: false,
            showPrefix: false
          },
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades  | Tipos                       | Valores Padrões | Obrigatório | Descrição                                 |
    | :------------ | :-------------------------- | :-------------- | :---------- | :---------------------------------------- |
    | `name`        | Campos                      | ""              | Sim         | Nome do campo                             |
    | `typePhone`   | "phoneMovel" \| "phoneFixo" | "phoneMovel"    | Sim         | Seleciona o tipo de fone que será o campo |
    | `explictMask` | boolean _/_ undefined       | false           | Não         | Utilização da máscara de forma explicita  |
    | `showDDD`     | boolean _/_ undefined       | false           | Não         | Fará o papel de mostrar ou esconder o DDD |
    | `showPrefix`  | boolean _/_ undefined       | false           | Não         | Mostra ou esconde o Prefixo do campo      |

      </details>

      </dd>
    </dl>

    <br />

  - ### PASSWORD

    - [x] Máscara Válida;
    - [x] Possibilidade de personalização;
    - [x] `CTRL-C / CTRL-V` com ou sem máscara;
    - [x] Incremento mesmo com `Autocomplete dos navegadores`;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Template</b></a></summary>

    ```TS
    //••••••••••••
    //ou
    //123241231254
    ```

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      const { _masks, _forceUpdate, _cleanVal, _getValues } = useValisk({
        password: {
          name: "...", //nome do campo
          hideValue: true
        },

        // ou

        password: [
          {
            name: "...", //nome do campo
            hideValue: true
          },
          {
            name: "...", //nome do campo
            hideValue: true
          },
        ]
      });

    ```

      </details>

      <details>
      <summary><b>Propriedades</b></summary>
      <br />

    | Propriedades | Tipos                 | Valores Padrões | Obrigatório | Descrição                            |
    | :----------- | :-------------------- | :-------------- | :---------- | :----------------------------------- |
    | `name`       | Campos                | ""              | Sim         | Nome do campo                        |
    | `hideValue`  | boolean _/_ undefined | true            | Não         | Opção de mostrar ou esconder o valor |

      </details>

      </dd>
    </dl>

<br />

- ### Retornos

  ***

  Métodos que serão desestruturados para serem utilizados para diversas funcionalidades.

  - ### \_masks

    - [x] Utilizado por todos campos;
    - [x] Necessario ser usado de forma única em cada campo;
    - [x] Não causa uma renderização por sua utilização`;
    - [x] Insere de forma automática a tag name caso não o elemento não possua;

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Sobre</b></summary>

    Este é sem sombra de dúvidas o método mais importante da biblioteca, sendo ele o responsavel por gerar a máscara para cada um dos campos, por isso é necessário utilizar do `operador rest` para funcionar as máscaras.

    Além disso, assim como o `register` do `react-hook-form`, o `_masks` também precisa receber o nome do campo que irá receber a máscara configurada no hook.

    Assim facilitando muito o aprendizado para quem já utilizava a outra biblioteca.

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...
      interface Campos {
        campo1: string;
        campo2: string;
      }


      const { _masks } = useValisk<Campos>({...});

      return (
        <>
          <input type="text" {...masks("campo1")}/>
        </>
      );

    ```

      </details>

      <details>
      <summary><b>Funcionalidades</b></summary>

    | Opções      | Tipo            | Descrição                                                                        |
    | :---------- | :-------------- | :------------------------------------------------------------------------------- |
    | Propriedade | keyof \<Campos> | Sendo preciso escolher somente um para cada \_masks                              |
    | Retorno     | DetailsHTML     | Propriedades do elemento Input, utilizando assim algumas tag do próprio elemento |

      </details>

      </dd>
    </dl>

  <br/>

  - ### \_forceUpdate

    - [x] Os campos que precisam desse efeito, precisam ser declaros de forma clara;
    - [x] Pode ser usados quantas vezes forem necessárias com diversos campo em uma atualização ou apenas um;
    - [x] Não causa uma renderização por sua utilização;
    - [x] É usado na maioria da vezes em conjunto com o **useEffect** nativo do react.
    - [x] Usado para trocar o valor da senha ou para carregar todas os campos com máscara como valor inicial.

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Sobre</b></summary>

    Esse método possui a função de atualizar o valor de todos os campo inseridos, ele faz isso por meio de eventos e funcionalidades internas do campo, ou seja, `ele não causa nenhuma renderização`, para mudar o valor de forma defitiva é necessário carregar o componente novamente com as propriedades já alteradas, por conta disso, ele é normalmente utilizado com o `useEffect` do react, pois, assim que o componente é carregado novamente, ele captura todos os valores alterados e `realiza as mudaças` sem precisar realizar uma nova renderização.

    Em seus parametros é necessário indicar algumas `props`, para que a lib possa fazer a atualização do campo `sem causar uma nova renderização`.

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useEffect } from "react";
      import { useValisk } from "@libsdomau/valisk";
      import { useForm } from "react-hook-form";
      ...

      interface Campos {
        campo1: string;
        campo2: string;
      }

      const [hideValue, setHideValue] = useState(false);
      const { register, setValue } = useForm<Campos>();
      const { _masks _forceUpdate } = useValisk<Campos>({...});

      useEffect(() => {
        _forceUpdate({
          inputName: "campo2"
          inputType: "uncontrolled"
        })
      }, []);

      useEffect(() => {
        _forceUpdate({
          inputName: "campo1"
          inputType: "react-hook-form",
          dispatchSetValue: setValue,
        })
      }, [hideValue]);


      return (
        <>
          <input type="text" {...register("campo1")} {...masks("campo1")}/>
        </>
      );

    ```

      </details>

      <details>
      <summary><b>Funcionalidades</b></summary>

    | Opções      | Tipo                                                                                                                       | Descrição                                                                                                                                                                                                                                                                           |
    | :---------- | :------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Propriedade | { inputName: keyof \<Campos>, inputType: "controlled" \| "uncontrolled" \| "react-hook-form", dispatchSetValue: Function } | Aqui é preciso informar de forma exata os campos que serão atualizados, mesmo que não cause uma renderização, é importante colocar apenas aquele que necessitam de uma alguma atualização de valor. Lembrando que é possível inserir um array de objetos, além de apenas um objeto. |
    | Retorno     | void                                                                                                                       | Esse método não retorna nenhum tipo de valor, apenas realiza seus processos.                                                                                                                                                                                                        |

      </details>

      </dd>
    </dl>

  <br/>

  - ### \_cleanValues

    - [x] Mostra todos os valores em forma de objeto da mesma maneira que foram declarados;
    - [x] Necessita receber os dados e realiza a conversão deles para dados sem máscaras, apenas em formato de números e letras;
    - [x] Todos valores que não foram configurados para possuirem máscara serão retornados sem alteração;
    - [x] Pode ser usado com o `handleSubmit` do `react-hook-form` para mostrar tudo sem máscara.

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Sobre</b></summary>

    Este é método que limpa o valor de todos as propriedades do objeto que possuem algum tipo de máscara e foram indicados nas configurações da lib, ele apenas remove tudo o que não seja letra ou número do valor.

    Já os campos que não possuem a configuração, são retornados igualmente, porém, sem nenhum tipo de remoção.

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      interface Campos {
        campo1: string;
      }

      const showValues: Campos = (data) => {
        console.log(_cleanVal(data));
      };

      const { _masks, _cleanValues, _getValues } = useValisk<Campos>({...});

      return (
        <form onSubmit={_getValues(showValues)}>
          <input type="text" {...masks("campo1")}/>
        </form>
      );

    ```

      </details>

      <details>
      <summary><b>Funcionalidades</b></summary>

    | Opções      | Tipo                  | Descrição                                                                                                                                                                                                  |
    | :---------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Propriedade | \<Campos>             | Aqui é preciso informar a data obtida através do `onSubmit`, sendo pelo `_getValues` ou pelo `handleSubmit`                                                                                                |
    | Retorno     | \<Campos> (Formatado) | O retorno desse método é básicamente o mesmo objeto passado porém, com remoções de máscaras caso algum campo tenha sido registrado no hook, caso o contrário, apenas é retornado da maneira que é passado. |

      </details>

      </dd>
    </dl>

  <br/>

  - ### \_getValues

    - [x] Captura o valor de todos os campos dentro do form.
    - [x] Os campos não precisam possuir o `_masks`, porém precisam estar declarados no [Tipo de Entrada](#entrada);
    - [x] Ele retorna um objeto com todos o valores dos campos, essa tipagem é a mesma de entrada no hook;
    - [x] Funciona igual o `handleSubmit` do `react-hook-form`, precisando passar um função dentro e ela possuirá os valores retornados.

    <dl>
      <dt>Definições:<dt>
      <dd>

      <details>
      <summary><b>Sobre</b></summary>

    Este método funciona como um auxiliar, uma função que captura todos valores dos campos que são **exclusivamente** filhos do Form. Após pegar os valores, ela converte eles em um objeto utilizando o nome do campo como **key** e o valor como **value**.

    É necessário passar uma outra função para dentro desse método, ela que irá receber o valor dos campos em formato de objeto atráves do parâmetro.

    Caso você tenha utilizado o `react-hook-form`, ela funciona igual o `handleSubmit`.

      </details>

      <details>
      <summary><b>Sintaxe</b></summary>

    ```TSX
      import { useValisk } from "@libsdomau/valisk";

      ...

      interface Campos {
        campo1: string;
      }


      const { _masks, _getValues } = useValisk<Campos>({...});
      const showValues: Campos = (data) => console.log(data);

      return (
        <form onSubmit={_getValues(showValues)}>
          <input type="text" {...masks("campo1")}/>
        </form>
      );

      <!-- Ou -->

      return (
        <form onSubmit={_getValues((data) => console.log(data))}>
          <input type="text" {...masks("campo1")}/>
        </form>
      );

    ```

      </details>

      <details>
      <summary><b>Funcionalidades</b></summary>

    | Opções      | Tipo                       | Descrição                                                                                                                                                |
    | :---------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Propriedade | Função                     | Essa função será executada recebendo por parâmetro o objeto com todos os valores dos campos, ela precisa ser do tipo **void**, ou seja, **sem retorno**. |
    | Retorno     | FormEvent<HTMLFormElement> | É retornado o evento para que seja possível capturar o evento do submit.                                                                                 |

      </details>

      </dd>
    </dl>

<br/>

## Dúvidas

Aqui estão as melhores maneiras de contribuir com o projeto, caso tenha alguma coisa não explicada com as dúvidas abaixo, entre em contato.

**Issue**:
<https://github.com/MauMuller/valisk/issues/new>

**Pull Request**:
<https://github.com/MauMuller/valisk/pulls>

<dl>
  <dd>
    <details>
    <summary id="duvidas-uso-da-lib"><b>Dúvidas no uso da lib?</b></summary>
      Opa, ta com dúvidas? Só fazer uma <code>issue</code> com o tema em específico, assim que der, eu respondo. 
    </details>
  <dd>

  <dd>
    <details>
    <summary id="encontrou-algum-problema"><b>Encontrou algum problema?</b></summary>
      Opa, achou algum problema com a lib ou algo não está funcionando? Só fazer uma <code>issue</code> com o tema em específico, assim que der, eu respondo. 
    </details>
  <dd>

  <dd>
    <details>
      <summary id="ideais-para-contribuir"><b>Tem algumas ideias para contribuir?</b></summary>
      Cara que daora, bom, aqui tu tem duas opções:
      <br/>
      <ol>
        <li>
            Tu pode fazer um <code>PR</code> para o código com essa ideia, com isso eu irei fazer um <code>code review</code> para avaliar.
        </li>
        <li>
            Tu também pode criar uma <code>Issue</code> com a ideia, assim que der, a gente consegue trocar uma ideia.
        </li>
      </ol>
    </details>
  <dd>

  <dd>
    <details>
    <summary id="contribuir-codando"><b>Ta afim de contribuir codando?</b></summary>
      Ta afim de ajudar a codar? da um <code>fork</code> no projeto e manda uma <code>PR</code>.
    </details>
  <dd>
</dl>
