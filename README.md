[<img align="left" height="165px" width="135px" alt="Warpnet" src="https://ik.imagekit.io/e6khzhxvx/Group_3Valisk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672190456214"/>]()

## React Valisk

Trata-se de uma biblioteca com a finalidade de proporcionar máscaras e validações para os campos de texto, tudo por meio de `HOOKS`, visando as tipagens e variadas opções para personalização.

<br />

<div align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/maumuller/react-valisk?color=%23ff1f3d&label=npm&style=for-the-badge" width="100">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/maumuller/react-valisk/publish-package-and-release.yml?color=black&style=for-the-badge" width="130">

  <img alt="GitHub" src="https://img.shields.io/github/license/maumuller/react-valisk?color=%23ff1f3d&style=for-the-badge" width="100">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/maumuller/react-valisk?color=black&style=for-the-badge" width="140">
</div>

<br />

<div align="center">

[<img width="500" src="https://ik.imagekit.io/e6khzhxvx/valisk-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672165728023"/>]()

</div>

<br />

<div align="center">

> Essa é uma biblioteca feita em **REACT** e **TYPESCRIPT**, porém pode ser integrada com qualquer outra lib/framework, isso porque assim como os `hooks` do REACT, VALISK apenas utiliza `hooks` para controlar o campo de texto.

</div>

<br />

## Introdução

A ideia da construção da biblioteca já existia a muito tempo, porém, apenas depois de adquirir conhecimento das técnologias da modernidade que fui capaz de realiza-lá.

**Valisk** trabalha `hooks`, ou seja, funcionalidades que realizam algumas tarefas para facilitar o dia a dia do desenvolvedor, esses hooks são a essencia do React funcional, aqui está um link para entender melhor sobre o funcionamento -> <a target="_blank" src="https://pt-br.reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper">React Hooks</a>.

A biblioteca disponibiliza _métodos_, _hooks_ e _valores_ iniciais para deixar bem completo o desenvolvimento. Qualquer dúvida, basta navegar até a sessão -> [API de Referência](#api-de-referencia) e procurar pela questão em especial ou ainda, mandar uma issue.

Agora segue abaixo o menu para um **roadmap** de refencia sobre a Lib:

### Mapa da documentação

- [Instalação](#instalação)

  - [NPM](#npm)
  - [Github](#github)
  - [Yarn](#yarn)

- [Casos de Uso](#casos-de-uso)

- [API de Referência](#api-de-referência)
  - [**useMaskCPF**](#usemaskcpf)
  - [**useMaskCNPJ**](#usemaskcnpj)
  - [**useMaskCEP**](#usemaskcep)
  - [**useMaskMoney**](#usemaskmoney)
  - [**useMaskPhone**](#usemaskphone)
  - [**useMaskPassword**](#usemaskpassword)
  - [**useMasks** _(Principal)_](#usemasks-principal)

<br />

## Instalação

Para sua utilização é necessário a instalação do pacote, para isso existem algumas possibilidades até o momento, entre elas:

- ### NPM

  Através do gerenciador de pacotes mais utilizado entre o desenvolvimento, podendo assim, acessar o pacote no site oficial.

  <details>
  <summary>Instalação</summary>

  <br />

  <b>Repositório:</b>
  <a href="https://www.npmjs.com/settings/mauricio_m_s/packages">https://www.npmjs.com/settings/mauricio_m_s/packages</a>

  ```bash
    npm i react-valisk
  ```

  </details>

- ### Github

  Se preferir, é possível instalar pelo próprio GITHUB, acessando o pacote através do repositório, realizando o clone e instalando para a utilização.

  <details>
  <summary><b>Instalação</b></summary>

  <br />

  <b>Repositório:</b>
  <a href="https://github.com/MauMuller/react-valisk">https://github.com/MauMuller/react-valisk</a>

  ```bash
    Em breve...
  ```

  </details>

- ### Yarn

  Também com YARN em breve.

  <details>
  <summary><b>Instalação</b></summary>

  <br />

  ```bash
    Em breve...
  ```

<br />

## Casos de uso

Aqui iremos entrar em alguns exemplos de uso, porém o foco é apenas o a apresentação do hook.

<br />

## API de Referência

Nessa sessão você poderá tirar todas suas dúvidas quanto a parametros ou retornos dos hooks, assim como ententer os tipos e até mesmo verificar a sintaxe de utilização para variados casos de uso.

Antes de olhar a documentação, é necessário ter em mente como que funciona de forma prática os principais conceitos da biblioteca.

Os principais conceitos são bem simples, básicamente `parametros` e `retornos`, eles são, respectivamente, valores de entrada e de saída.

Podemos ver abaixo de forma ilustrativa como que eles se moldam dentro do código:

```JS
import { useMasks } from "react-valisk";

// [values, setValues, isValid, setKey] - Valores de Retorno
// { cpf: { inicialValue: '0452' } } - Valor de Parâmetro

const [values, setValues, isValid, setKey] = useMasks({
  cpf: {
    inicialValue: '0452'
  }
});
```

Assim como desmonstrado no código acima, os valores de `retorno` são aqueles que são `desestruturados` a partir de um `array` \_(Caso não saiba do que se trata a **"Desestruturação do ECMAScript"** -> <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Desestruturação de Valores</a>)

Já os valores de `parâmetro`, são aqueles passados através do `objeto` dentro da chamada do `hook`, a partir dele é posível saber quais propriedadess são esperadas para cada mascará selecionada.

---

Com essa breve explicação, vamos aos tópicos de `cada um dos hooks`, mostrando um pouco das suas propriedadess, retornos e possibilidades dentro do desenvolvimento:

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
    import { useMaskCPF } from "react-valisk";

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
    import { useMaskCNPJ } from "react-valisk";

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
    import { useMaskCEP } from "react-valisk";

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
    import { useMaskMoney } from "react-valisk";

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
    import { useMaskPhone } from "react-valisk";

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
    import { useMaskPassword } from "react-valisk";

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
  - [x] Contém todos outros hooks jutamente com suas propriedadess;

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
    import { useMasks } from "react-valisk";

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

  É importante entender que esse hook é básicamente, o conjunto de todos outros, ele serve justamente para `suprir a necessidade de ficar importando cada um` dos hooks.

  Porém, ele acaba se tornando um pouco mais complexo, por precisar entender que a `ordem de entrada` será a `ordem de saída`.

  Além disso, é possível realizar alguns código bem `limpos` com esse hook, abusando de iterações como o `map` para não precisar usar diversas de desestruturação.

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
    import { useMasks } from "react-valisk";

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
