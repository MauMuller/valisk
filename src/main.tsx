import { CSSProperties, useEffect } from "react";
import ReactDOM from "react-dom/client";

import {
  useValisk,
  useConfigEntry,
  ConfigEntryType,
  ValiskEntryType,
  ForceUpdateEntryType,
  CleanValuesType,
} from "./lib/index";

let cont = 0;

const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

const App = () => {
  console.log(`Renderizou ${(cont += 1)} ${cont > 1 ? "vezes" : "vez"}`);

  type Inputs = {
    comunTeste: string;
    comunTeste2: string;
    comunTeste3: string;
    inputTest: string;
  };

  const teste: Array<ConfigEntryType<Inputs>> = [
    {
      name: "inputTest",
      props: { cpf: { explictMask: true }, cep: { explictMask: false } },
    },
  ];

  const teste2: ValiskEntryType<Inputs> = {
    cep: { name: "comunTeste", explictMask: true },
  };

  const configMasks = useConfigEntry<Inputs>(teste);

  const { _masks, _forceUpdate, _getValues, _cleanValues } =
    useValisk<Inputs>(configMasks);

  useEffect(() => {
    _forceUpdate({ inputName: "inputTest", inputType: "uncontrolled" });
  }, []);

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanValues(data));
  };

  return (
    <form onSubmit={_getValues(show)}>
      <input defaultValue={"aaa234132"} />
      <input {..._masks("inputTest")} />
      <input defaultValue={""} />
      <input defaultValue={"2"} />

      <button>Mostrar Valor</button>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
