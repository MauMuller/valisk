import { CSSProperties, useEffect } from "react";
import ReactDOM from "react-dom/client";

import {
  useValisk,
  useConfigEntry,
  useValiskContext,
  ValiskProvider,
  ValiskProps,
  ConfigEntryProps,
  ForceUpdateProps,
  CleanValues,
  ForceUpdate,
  GetValues,
  Masks,
} from "./lib/index";

let cont = 0;

const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

type Inputs = {
  campo1: string;
  campo2: string;
  campo3: string;
};

const App = () => {
  console.log(`Renderizou ${(cont += 1)} ${cont > 1 ? "vezes" : "vez"}`);

  type Dados = Array<
    Array<React.HTMLAttributes<HTMLInputElement> & ConfigEntryProps<Inputs>>
  >;

  const dados: Dados = [
    [
      {
        nameInput: "campo1",
        id: "campo1",
        defaultValue: "aaaa",
        maskConfig: { money: { typeMoney: "real", explictMask: true } },
      },
      {
        nameInput: "campo2",
        placeholder: "teste1",
      },
    ],
    [
      {
        nameInput: "campo3",
        maskConfig: { cnpj: { explictMask: true } },
      },
    ],
  ];

  const configMasks = useConfigEntry<Inputs>(dados);
  console.log(configMasks);

  const methodsValisk = useValisk<Inputs>({
    phone: {
      name: "campo1",
      typePhone: "phoneMovel",
      explictMask: true,
      showDDD: true,
    },
  });

  const { _masks, _forceUpdate, _getValues, _cleanValues } = methodsValisk;

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanValues(data));
  };

  return (
    <ValiskProvider {...methodsValisk}>
      <form onSubmit={_getValues(show)}>
        {/* {dados.flat().map((obj) => {
          return <InputTeste {...obj} />;
        })} */}

        <InputTeste name="campo1" />

        <button>Mostrar Valor</button>
      </form>
    </ValiskProvider>
  );
};

interface InputTesteType extends React.HTMLAttributes<HTMLInputElement> {
  name: keyof Inputs;
}

function InputTeste({ name, ...rest }: InputTesteType) {
  const { _masks, _forceUpdate } = useValiskContext<Inputs>();

  useEffect(() => {
    _forceUpdate({ inputName: name, inputType: "uncontrolled" });
  }, []);

  return <input {..._masks(name)} {...rest} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
