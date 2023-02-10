[<img align="left" height="165px" width="135px" alt="Warpnet" src="https://ik.imagekit.io/e6khzhxvx/Group_3Valisk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672190456214"/>]()

# Valisk

É uma biblioteca feita para campos UNCONTROLLED e CONTROLLED, incluindo várias máscaras para serem utilizadas de uma maneira muito fácil e performática. `DICA: Integrada ao REACT-HOOK-FORM, ela chega no seu ápice!`

<br />

<div align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/valisk?color=%23ff1f3d&label=version&style=for-the-badge" width="140">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/valisk/publish-package.yml?color=black&style=for-the-badge" width="150">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/valisk?color=%23ff1f3d&style=for-the-badge" width="120">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/valisk?color=black&style=for-the-badge" width="160">
</div>

<br />

<div align="center">

[<img width="500" src="https://ik.imagekit.io/e6khzhxvx/valisk-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672165728023"/>]()

</div>

<br />

<div align="center">

> A biblioteca foi projetada para ser integrada com a lib `REACT-HOOK-FORM`, porém pode ser utilizada de forma `CONTROLLED` e `UNCONTROLLED`.
>
> Ela possui suporte a **JAVASCRIPT** e **TYPESCRIPT**.
>
> Além disso, é possível fazer a integração com qualquer framework ou biblioteca da atualidade.

**IMPORTANTE:** As versões anteriores da biblioteca utilizam um outro sistema, algo completamente diferente de utilização, tanto para o desenvolvedor quanto por baixo dos panos, por isso é recomendado **FORTEMENTE REALIZAR A ATUALIZAÇÃO** devido a todas melhorias. Abaixo deixarei um link para migração da versão antiga para nova.

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

- [Casos de Uso](#casos-de-uso)

  - [Uso Simples](#utilização-simples)
  - [Uso Complexo](#utilização-complexa)

- [API de Referência](#api-de-referência)

  - [**useMaskCPF**](#usemaskcpf)
  - [**useMaskCNPJ**](#usemaskcnpj)
  - [**useMaskCEP**](#usemaskcep)
  - [**useMaskMoney**](#usemaskmoney)
  - [**useMaskPhone**](#usemaskphone)
  - [**useMaskPassword**](#usemaskpassword)
  - [**useMasks** _(Principal)_](#usemasks-principal)

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

Aqui iremos entrar em alguns exemplos de uso, porém o foco é apenas o a apresentação da lib com algumas ilustrações.

<dl>
  <dd>
  <details>
  <summary id="utilização-simples">Utilização Simples</summary>

Nesse exemplo será utilizado uma demonstração apenas com o `_masks`, `_getValues`, com a propriedade `cpf` e `money`.

<dl>
  <dt>Código:</dt>
  <dd>

```TSX
  import { useMaskCPF, useMaskCNPJ } from "@libsdomau/valisk";

  const App = () => {
    const configHooks = {
      cpf: { inicialValue: "55552" },
      cnpj: { useExplictMask: true },
    };

    const [cpf, setCPF, isCPF, setKeyCPF] = useMaskCPF(configHooks.cpf);
    const [cnpj, setCNPJ, isCNPJ, setKeyCNPJ] = useMaskCNPJ(configHooks.cnpj);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <input
          type="text"
          value={cpf}
          onChange={(evt) => setCPF(evt.target.value)}
          onKeyDown={(evt) => setKeyCPF(evt.key)}
        />

        <input
          type="text"
          value={cnpj}
          onChange={(evt) => setCNPJ(evt.target.value)}
          onKeyDown={(evt) => setKeyCNPJ(evt.key)}
        />
      </div>
    );
  };

  export { App };
```

  </dd>

  <dt>Resultado:</dt>
  <dd>
    <img src="https://ik.imagekit.io/e6khzhxvx/image_3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672402991950" width="300" />
  </dd>
</dl>

  </details>

<details>
  <summary id="utilização-complexa">Utilização Complexa</summary>

Já nesse exemplo, será utilizado apenas o hook `useMasks`, mostrando assim um pouco do que dá para fazer com esse hook.

<dl>
  <dt>Código:</dt>
  <dd>

```TSX
  import { useId } from "react";
  import { useMasks } from "@libsdomau/valisk";

  const passwordCondition = {
    numbers: [4],
    specialChars: [2, "*"],
    words: [4],
  };

  const templateMasks = [
    { type: "cnpj", inicialValue: "21523554" },
    { type: "cpf", useExplictMask: true },
    { type: "cep" },
    { type: "phone", incrementDDDAndPrefix: true, useExplictMask: true },
    { type: "money", useExplictMask: true },
    { type: "password", passwordPontenciality: passwordCondition },
  ];

  function App() {
    const id = useId();
    const globalStyle = { display: "flex", gap: "0.5rem" };

    const configMask = templateMasks.reduce((prev, current) => {
      const {
        type,
        inicialValue,
        useExplictMask,
        passwordPontenciality,
        incrementDDDAndPrefix,
      } = current;

      const objectToType = {
        inicialValue,
        useExplictMask,
        passwordPontenciality,
        incrementDDDAndPrefix,
      };

      return { ...prev, [type]: objectToType };
    }, {});

    const { values, setValues, areValidValues, setKeys } = useMasks(configMask);

    const inputs = templateMasks.map((object, indexByObject) => {
      const { type } = object;
      const isPasswordType = type === "password";

      const [valueInput, sourceValue] = values[indexByObject];
      const value = isPasswordType ? valueInput : values[indexByObject];

      const setValue = setValues[indexByObject];
      const isValid = areValidValues[indexByObject];
      const setKey = setKeys.at(indexByObject);

      const idConect = `${id}-${type}`;
      const nameLabel = type[0].toUpperCase() + type.substring(1);

      return (
        <div key={indexByObject} style={{ ...globalStyle, flexDirection: "row" }}>
          <label htmlFor={idConect}>{nameLabel}</label>

          <div style={{ ...globalStyle, flexDirection: "column" }}>
            <input
              id={idConect}
              type="tel"
              value={value}
              onChange={(evt) => setValue(evt.target.value)}
              onKeyDown={(evt) => setKey?.(evt.key)}
            />
            {isPasswordType ? <>{sourceValue}</> : ""}
          </div>
          <p style={{ width: "10rem" }}>
            Validação do campo: {JSON.stringify(isValid)}
          </p>
        </div>
      );
    });

    return (
      <div style={{ ...globalStyle, flexDirection: "column" }}>{inputs}</div>
    );
  }
```

  </dd>
  
  <dt>Resultado:</dt>
  <dd>
    <img src="https://ik.imagekit.io/e6khzhxvx/image_2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672402787301" width="700" />
  </dd>
</dl>
  </details>
  </dd>
</dl>

<br />

## API de Referência

Nessa sessão você poderá tirar todas suas dúvidas quanto a parametros ou retornos dos hooks, assim como ententer os tipos e até mesmo verificar a sintaxe de utilização para variados casos de uso.

Antes de olhar a documentação, é necessário ter em mente como que funciona de forma prática os principais conceitos da biblioteca.

Os principais conceitos são bem simples, básicamente `parâmetros` e `retornos`, eles são, respectivamente, valores de entrada e de saída.

Podemos ver abaixo de forma ilustrativa como que eles se moldam dentro do código:

```JS
import { useMasks } from "@libsdomau/valisk";

// [values, setValues, isValid, setKey] - Valores de Retorno
// { cpf: { inicialValue: '0452' } } - Valor de Parâmetro

const [values, setValues, isValid, setKey] = useMasks({
  cpf: {
    inicialValue: '0452'
  }
});
```

Assim como desmonstrado no código acima, os valores de `retorno` são aqueles que são `desestruturados` a partir de um `array` \_(Caso não saiba do que se trata a **"Desestruturação do ECMAScript"** -> [Desestruturação de Valores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))

Já os valores de `parâmetro`, são aqueles passados através do `objeto` dentro da chamada do `hook`, a partir dele é posível saber quais propriedades são esperadas para cada mascará selecionada.

---

Com essa breve explicação, vamos aos tópicos de `cada um dos hooks`, mostrando um pouco das suas propriedades, retornos e possibilidades dentro do desenvolvimento:

<br />

- ## useMaskCPF

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

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

  ```Typescript
    import { useMaskCPF } from "@libsdomau/valisk";

    ...

    const [value, setValue, isValid, setKey] = useMaskCPF({
      inicialValue: "4823",
      useExplictMask: true
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades     | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
  | :--------------- | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
  | `{}`             | object                | {}              | Sim         | Objeto Vázio.                            |
  | `inicialValue`   | string _/_ undefined  | ""              | Não         | Valor inicial para o campo de texto.     |
  | `useExplictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos             | Eventos   | Descrição                                                                                                 |
  | :--------- | :---------------- | :-------- | :-------------------------------------------------------------------------------------------------------- |
  | `[]`       | array             | nenhum    | array para desestruturação dos valores.                                                                   |
  | `value`    | string            | nenhum    | Valor para o campo de texto.                                                                              |
  | `setValue` | function<string\> | onChange  | Função para atualizar o valor dentro do estado do hook.                                                   |
  | `isValid`  | boolean           | nenhum    | Verifica se o valor em específico satisfaz a máscara.                                                     |
  | `setKey`   | function<string\> | onKeyDown | Função para capturar a tecla digitada e apagar a máscara quando a propriedades `useExplictMask` é `true`. |

    </details>

    </dd>
  </dl>

  <br />

- ## useMaskCNPJ

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

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

  ```Typescript
    import { useMaskCNPJ } from "@libsdomau/valisk";

    ...

    const [value, setValue, isValid, setKey] = useMaskCNPJ({
      inicialValue: "4823",
      useExplictMask: true
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades     | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
  | :--------------- | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
  | `{}`             | object                | {}              | Sim         | Objeto Vázio.                            |
  | `inicialValue`   | string _/_ undefined  | ""              | Não         | Valor inicial para o campo de texto.     |
  | `useExplictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos             | Eventos   | Descrição                                                                                                 |
  | :--------- | :---------------- | :-------- | :-------------------------------------------------------------------------------------------------------- |
  | `[]`       | array             | nenhum    | array para desestruturação dos valores.                                                                   |
  | `value`    | string            | nenhum    | Valor para o campo de texto.                                                                              |
  | `setValue` | function<string\> | onChange  | Função para atualizar o valor dentro do estado do hook.                                                   |
  | `isValid`  | boolean           | nenhum    | Verifica se o valor em específico satisfaz a máscara.                                                     |
  | `setKey`   | function<string\> | onKeyDown | Função para capturar a tecla digitada e apagar a máscara quando a propriedades `useExplictMask` é `true`. |

    </details>

    </dd>
  </dl>

  <br />

- ## useMaskCEP

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

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

  ```Typescript
    import { useMaskCEP } from "@libsdomau/valisk";

    ...

    const [value, setValue, isValid, setKey] = useMaskCEP({
      inicialValue: "4823",
      useExplictMask: true
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades     | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
  | :--------------- | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
  | `{}`             | object                | {}              | Sim         | Objeto Vázio.                            |
  | `inicialValue`   | string _/_ undefined  | ""              | Não         | Valor inicial para o campo de texto.     |
  | `useExplictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos             | Eventos   | Descrição                                                                                                 |
  | :--------- | :---------------- | :-------- | :-------------------------------------------------------------------------------------------------------- |
  | `[]`       | array             | nenhum    | array para desestruturação dos valores.                                                                   |
  | `value`    | string            | nenhum    | Valor para o campo de texto.                                                                              |
  | `setValue` | function<string\> | onChange  | Função para atualizar o valor dentro do estado do hook.                                                   |
  | `isValid`  | boolean           | nenhum    | Verifica se o valor em específico satisfaz a máscara.                                                     |
  | `setKey`   | function<string\> | onKeyDown | Função para capturar a tecla digitada e apagar a máscara quando a propriedades `useExplictMask` é `true`. |

    </details>

    </dd>
  </dl>

  <br />

- ## useMaskMoney

  - [x] Máscara Válida;
  - [ ] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

  <dl>
    <dt>Definições:<dt>
    <dd>

    <details>
    <summary><b>Template</b></a></summary>

  ```TS
    //R$ 0,00
  ```

    </details>

    <details>
    <summary><b>Sintaxe</b></summary>

  ```Typescript
    import { useMaskMoney } from "@libsdomau/valisk";

    ...

    const [value, setValue, isValid] = useMaskMoney({
      inicialValue: "4823",
      useExplictMask: true
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades     | Tipos                 | Valores Padrões | Obrigatório | Descrição                                |
  | :--------------- | :-------------------- | :-------------- | :---------- | :--------------------------------------- |
  | `{}`             | object                | {}              | Sim         | Objeto Vázio.                            |
  | `inicialValue`   | string _/_ undefined  | ""              | Não         | Valor inicial para o campo de texto.     |
  | `useExplictMask` | boolean _/_ undefined | false           | Não         | Utilização da máscara de forma explicita |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos                     | Eventos  | Descrição                                               |
  | :--------- | :------------------------ | :------- | :------------------------------------------------------ |
  | `[]`       | array                     | nenhum   | array para desestruturação dos valores.                 |
  | `value`    | string                    | nenhum   | Valor para o campo de texto.                            |
  | `setValue` | function<string\>         | onChange | Função para atualizar o valor dentro do estado do hook. |
  | `isValid`  | true (Ainda indísponivel) | nenhum   | Verifica se o valor em específico satisfaz a máscara.   |

    </details>

    <details>
    <summary>
      <s>Em breve</s>
    </summary>
    <br />

  > OBS: Essa sessão ainda está em desenvolvimento, **nenhuma das funcionalidades citadas aqui estão disponivéis para uso!**

  No futuro, pretendo adicionar dois incrementos dentro do hook, ambos relacionados aos `parâmetros`.
  A ideia seria justamente dar mais personalização e funcionalidade para a validação e máscara.

  1. Primeira ideia seria realizar o incremento de uma propriedades chamada `explictCipher` do tipo `boolean`, servindo básicamente como forma de mostrar ou retirar o cifrão no campo.

     ```TSX
       const [value, setValue, isValid] = useMaskMoney({
         inicialValue: "",
         useExplictMask: true,
         explictCipher: true // <- Dessa maneira!
       });
     ```

  2. Já a segunda ideia seria realizar algo parecido com o que existe atualmente no hook `useMaskPassword`, podendo inserir uma validação personalizada, seja por um número mínimo ou número máximo. Sendo assim, `minValue` e `maxValue`, ambos do tipo `Númber`.

     ```TSX
       const [value, setValue, isValid] = useMaskMoney({
         inicialValue: "",
         useExplictMask: true,
         minValue: '30', //R$ 30,00 <- Sendo assim, o valor informado sempre o valor antes das casas decimais
         maxValue: '100' //R$ 100,00 <- Igualmente aqui, porém, sendo o o valor máximo
       });
     ```

    </details>

    </dd>
  </dl>

  <br />

- ## useMaskPhone

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

  <dl>
    <dt>Definições:<dt>
    <dd>

    <details>
    <summary><b>Template</b></a></summary>

  ```TS
    //Celular completo
    //+00 (00) 0 0000-0000

    //Celular parcial
    //0 0000-0000

    //Telefone completo
    //+00 (00) 0000-0000

    //Telefone parcial
    //0000-0000
  ```

    </details>

    <details>
    <summary><b>Sintaxe</b></summary>

  ```Typescript
    import { useMaskPhone } from "@libsdomau/valisk";

    ...

    const [value, setValue, isValid, setKey] = useMaskPhone({
      inicialValue: "4823",
      useExplictMask: true,
      incrementDDDAndPrefix: true,
      typePhone: "phoneFixo",
    });

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades            | Tipos                                  | Valores Padrões | Obrigatório | Descrição                                         |
  | :---------------------- | :------------------------------------- | :-------------- | :---------- | :------------------------------------------------ |
  | `{}`                    | object                                 | {}              | Sim         | Objeto Vázio.                                     |
  | `inicialValue`          | string _/_ undefined                   | ""              | Não         | Valor inicial para o campo de texto.              |
  | `useExplictMask`        | boolean _/_ undefined                  | false           | Não         | Utilização da máscara de forma explicita.         |
  | `incrementDDDAndPrefix` | boolean _/_ undefined                  | false           | Não         | Tem o papel de incrementar o _DDD_ e o _prefixo_. |
  | `typePhone`             | phoneFixo _/_ phoneMovel _/_ undefined | "PhoneMovel"    | Não         | Direciona qual tipo de fone deverá ter no campo.  |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos             | Eventos   | Descrição                                                                                                 |
  | :--------- | :---------------- | :-------- | :-------------------------------------------------------------------------------------------------------- |
  | `[]`       | array             | nenhum    | Array para desestruturação dos valores.                                                                   |
  | `value`    | string            | nenhum    | Valor para o campo de texto.                                                                              |
  | `setValue` | function<string\> | onChange  | Função para atualizar o valor dentro do estado do hook.                                                   |
  | `isValid`  | boolean           | nenhum    | Verifica se o valor em específico satisfaz a máscara.                                                     |
  | `setKey`   | function<string\> | onKeyDown | Função para capturar a tecla digitada e apagar a máscara quando a propriedades `useExplictMask` é `true`. |

    </details>

    </dd>
  </dl>

  <br />

- ## useMaskPassword

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;

  <dl>
    <dt>Definições:<dt>
    <dd>

    <details>
    <summary><b>Template</b></a></summary>

  ```TS
    //Valor escondido
    //******
  ```

    </details>

    <details>
    <summary><b>Sintaxe</b></summary>

  ```Typescript
    import { useMaskPassword } from "@libsdomau/valisk";

    ...

    const [values, setValue, isValid] = useMaskPassword({
      inicialValue: "4823",
      hideValue: true,
      passwordPontenciality: {
        numbers: [2, "123"],
        specialChars: [1],
        words: [3, 'abcde'],
      },
    });

    const [value, sourceValue] = values;

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  | Propriedades            | Tipos                 | Valores Padrões | Obrigatório                                                                                                 | Descrição                                                                                          |
  | :---------------------- | :-------------------- | :-------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
  | `{}`                    | object                | {}              | Sim                                                                                                         | Objeto Vázio.                                                                                      |
  | `inicialValue`          | string _/_ undefined  | ""              | Não                                                                                                         | Valor inicial para o campo de texto.                                                               |
  | `hideValue`             | boolean _/_ undefined | true            | Não                                                                                                         | Esconde ou mostra o valor dentro do campo.                                                         |
  | `passwordPontenciality` | object _/_ undefined  | {}              | Não/Sim (Caso haja propriedadess algumas propriedadess `numbers`, `specialChars` ou `words`, é necessário). | A partir daqui que é possível realizar uma validação de senha a partir das propriedadess a seguir. |

  **Dentro do `passwordPontenciality`**

  | Propriedades   | Tipos               | Valores Padrões | Obrigatório | Descrição                                                                                                  |
  | :------------- | :------------------ | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------- |
  | `numbers`      | array _/_ undefined | []              | Não         | A propriedades deverá receber um array para apoás, receber outras duas propriedadess (`number`, `string`). |
  | `specialChars` | array _/_ undefined | []              | Não         | " "                                                                                                        |
  | `words`        | array _/_ undefined | []              | Não         | " "                                                                                                        |

  **Dentro do `numbers`,`specialChars` e `words`**

  | Propriedades                | Tipos  | Valores Padrões | Obrigatório                                                                      | Descrição                                                                                                                                                                                                                              |
  | :-------------------------- | :----- | :-------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `minValueToValidate`        | number | 0               | Sim (Porém, só será obrigartório se uma das propriedadess acima serem chamadas). | Aqui será colocado o menor valor para a validação dessa propriedades. (Ex: caso seja indicado `numbers: [1]`, o campo deverá ter pelo menos 1 número digitado para retornar `true`).                                                   |
  | `especificValuesToValidate` | string | ""              | Não                                                                              | Nessa posição deverá ser inserido os valores em específico que devem ter pelo menos uma vez dentro do campo. (Ex: caso seja inserido `specialChars: [2, '@']`, o campo deverá ter pelo menos dois `@` digitados para retornar `true`). |

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos   | Tipos             | Eventos  | Descrição                                                          |
  | :--------- | :---------------- | :------- | :----------------------------------------------------------------- |
  | `[]`       | array             | nenhum   | Array para desestruturação dos valores.                            |
  | `values`   | array             | nenhum   | Array com dois valores do campo de texto (`value`, `sourceValue`). |
  | `setValue` | function<string\> | onChange | Função para atualizar o valor dentro do estado do hook.            |
  | `isValid`  | boolean           | nenhum   | Verifica se o valor em específico satisfaz a máscara.              |

  **Dentro do `values`**

  | Retornos      | Tipos  | Eventos | Descrição                                                                    |
  | :------------ | :----- | :------ | :--------------------------------------------------------------------------- |
  | `value`       | string | nenhum  | Este é o valor na qual está no campo de texto, seja com ou sem os `*`.       |
  | `sourceValue` | string | nenhum  | Já esse retorna o valor por padrão digitado, ou seja, completamente sem `*`. |

    </details>

    </dd>
  </dl>

<br />

- ## useMasks _(Principal)_

  - [x] Máscara Válida;
  - [x] Válidação ao completar a máscara;
  - [x] Funciona em conjunto com o `Auto-Complete do navegador`;
  - [x] `CTRL-C / CTRL-V` com ou sem máscara;
  - [x] Contém todos outros hooks juntamente com suas propriedadess;

  <dl>
    <dt>Definições:<dt>
    <dd>

    <details>
    <summary><b>Template</b></a></summary>

  ```TS
    //Todos os anteriores

    //cpf
    //000.000.000-00

    //cnpj
    //00.000.000/0000-00

    //cep
    //00000-000

    //money
    //R$ 0,00

    //phones
      //Celular completo
      //+00 (00) 0 0000-0000

      //Celular parcial
      //0 0000-0000

      //Telefone completo
      //+00 (00) 0000-0000

      //Telefone parcial
      //0000-0000

    //password
    //******

  ```

    </details>

    <details>
    <summary><b>Sintaxe</b></summary>

  ```Typescript
    import { useMasks } from "@libsdomau/valisk";

    ...

    const { values, setValues, areValidValues, setKeys } = useMasks({
      cep: {},
      cnpj: {},
      money: {},
      cpf: {},
      password: {},
      phone: {},
    });

    const [cep, cnpj, money, cpf, password, phone] = values;
    const [setCEP, setCNPJ, setMoney, setCPF, setPassword, setPhone] = setValues;
    const [isCEP, isCNPJ, isMoney, isCPF, isPassword, isPhone] = areValidValues;
    const [isCEP, isCNPJ, isMoney, isCPF, isPassword, isPhone] = setKeys;
    const [setKeyCEP, setKeyCNPJ, noNeed, setKeyCPF, noNeed, setKeyPhone] = setKeys;

    //É preciso entender que a ordem inserida no objeto pelo `Parâmetro` do hook,
    //será a ordem de desestruturação dos valores igualmente mostrado acima!

    //`noNeed` significa que esses valores não precisariam da função `setKey`,
    //porém como estão antes de valores que precisam, seria uma conveção colcoar,
    //um nome para não utilizar esses.

    //O recomendado é deixar todas as propriedadess que não possuem `setKey` para o final!

  ```

    </details>

    <details>
    <summary><b>Parâmetros</b></summary>
    <br />

  > OBS: É necessário passar um objeto inicial, mesmo que seja vázio.

  > A ordem das propriedades pode ser alterada a vontade, porém, é importante ficar em alerta pois a **ordem de entrada** sempre será a **ordem de saída**.

  | Propriedades | Tipos                | Obrigatório | Descrição                                                                               |
  | :----------- | :------------------- | :---------- | :-------------------------------------------------------------------------------------- |
  | `{}`         | object               | Sim         | Objeto Vázio.                                                                           |
  | `cpf`        | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskCPF`.      |
  | `cnpj`       | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskCNPJ`.     |
  | `cep`        | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskCEP`.      |
  | `money`      | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskMoney`.    |
  | `phone`      | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskPhone`.    |
  | `password`   | object _/_ undefined | Não         | Aqui será passado um objeto para ter acesso as propriedadess do hook `useMaskPassword`. |

  É possível, atráves das tipagens, verificar todas as propriedades que cada um desses objetos recebem, porém, são as mesmas que cada hook precisa.

  É importante entender que esse hook é básicamente, o conjunto de todos outros, ele serve justamente para `suprir a necessidade de ficar desestruturando cada um` dos hooks, possibilitando realizações de operações muito mais complexas utilizando apenas um hook.

  Por conta dessas complexidades, é necessário entender o funcionamento único do hook. A `ordem de entrada` será sempre a `ordem de saída`.

  Essa lógica é interessante pois com ela, criar campos de texto com código limpo através do map acaba sendo muito simples e satisfatório de utilizar.

  Caso deseja ver essas lógicas mais complexas, segue o link [Utilização complexa do `useMasks`](#utilização-complexa)

    </details>

    <details>
    <summary><b>Retornos</b></summary>
    <br />

  > OBS: Os nomes das váriaveis são apenas uma convenção, mude se necessário.

  | Retornos         | Tipos                   | Eventos   | Descrição                                                                                                           |
  | :--------------- | :---------------------- | :-------- | ------------------------------------------------------------------------------------------------------------------- |
  | `{}`             | object                  | nenhum    | Objeto vázio para receber as determinadas propriedades abaixo, a partir da `ordem dos parâmetros` inserida no hook. |
  | `values`         | array<string \ object>  | nenhum    | Array com todos os valores retornados a partir das propriedades.                                                    |
  | `setValues`      | array<function<string>> | onChange  | Array com as funções para inserir o valor do campo.                                                                 |
  | `areValidValues` | array<boolean \ object> | nenhum    | Array com as validações de acordo com o que foi digitado no campo.                                                  |
  | `setKeys`        | array<function<string>> | onKeyDown | Array com funções para inserir keys de cada um dos campos, essa key é o nome da tecla pressionada.                  |

  Cada um desses valores possuem um array na qual é ordenado pelo `objeto` do `parâmetro`.

  Abaixo podemos ver um pequeno exemplo de como que seriam esses valores utilizados para campos de texto:

  ```TSX
    import { useMasks } from "@libsdomau/valisk";

    ...

    const { values, setValues, areValidValues, setKeys } = useMasks({
      phone: {
        inicialValue: "482362345",
        useExplictMask: true,
        incrementDDDAndPrefix: true,
        typePhone: "phoneMovel",
      },

      money: {
        inicialValue: '2456',
        useExplictMask: true
      }
    });

    const [phone, money] = values;
    const [setPhone, setMoney] = setValues;
    const [keyPhone] = setKeys;

    console.log(phone) //+48 (23) 6 2345-____
    console.log(money) //R$ 24,56

    return (<>
      <input
        type="text"
        onChange={evt => setMoney(evt.target.value)}
        value={money}
      />

      <input
        type="text"
        onKeyDown={evt => keyPhone(evt.key)}
        onChange={evt => setPhone(evt.target.value)}
        value={phone}
      />
    </>);


  ```

    </details>

    </dd>
  </dl>

<br />

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
