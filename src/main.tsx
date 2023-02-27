import { CSSProperties, useEffect } from "react";
import ReactDOM from "react-dom/client";

import {
  useValisk,
  useConfigEntry,
  useValiskContext,
  ValiskProvider,
  ValiskEntryType,
  ConfigEntryType,
  ForceUpdateEntryType,
  CleanValuesType,
  ForceUpdateType,
  GetValuesType,
  MasksType,
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
    Array<React.HTMLAttributes<HTMLInputElement> & ConfigEntryType<Inputs>>
  >;

  const dados: Dados = [
    [
      {
        name: "campo1",
        id: "campo1",
        defaultValue: "aaaa",
        props: { money: { typeMoney: "real", explictMask: true } },
      },
      {
        name: "campo2",
        placeholder: "teste1",
      },
    ],
    [
      {
        name: "campo3",
        props: { cnpj: { explictMask: true } },
      },
    ],
  ];

  const configMasks = useConfigEntry<Inputs>(dados);
  console.log(configMasks);

  const methodsValisk = useValisk<Inputs>(configMasks);

  const { _masks, _forceUpdate, _getValues, _cleanValues } = methodsValisk;

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanValues(data));
  };

  return (
    <ValiskProvider {...methodsValisk}>
      <form onSubmit={_getValues(show)}>
        {dados.flat().map((obj) => {
          return <InputTeste {...obj} />;
        })}

        <button>Mostrar Valor</button>
      </form>
    </ValiskProvider>
  );
};

interface InputTesteType extends React.HTMLAttributes<HTMLInputElement> {
  name: keyof Inputs;
}

function InputTeste({ name, ...rest }: InputTesteType) {
  const { _masks, _forceUpdate, _cleanValues, _getValues } =
    useValiskContext<Inputs>();

  useEffect(() => {
    _forceUpdate({ inputName: name, inputType: "uncontrolled" });
  }, []);

  return <input {..._masks(name)} {...rest} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
