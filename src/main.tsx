import { CSSProperties, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom/client";

import {
  ValiskProvider,
  useValisk,
  useConfigEntry,
  useValiskContext,
  ConfigEntryType,
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
  comunTeste: string;
  comunTeste2: string;
  comunTeste3: string;
  inputTest: string;
};

const App = () => {
  console.log(`Renderizou ${(cont += 1)} ${cont > 1 ? "vezes" : "vez"}`);

  const configMasksTemplate: Array<ConfigEntryType<Inputs>> = [
    {
      name: "inputTest",
      props: { cpf: { explictMask: true } },
    },
    {
      name: "comunTeste3",
      props: {
        phone: { typePhone: "phoneMovel", showDDD: true, explictMask: true },
      },
    },
  ];

  const configMasks = useConfigEntry<Inputs>(configMasksTemplate);

  const methodsValisk = useValisk<Inputs>(configMasks);
  const { _masks, _forceUpdate, _getValues, _cleanValues } = methodsValisk;

  useEffect(() => {
    _forceUpdate({ inputName: "inputTest", inputType: "uncontrolled" });
  }, []);

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanValues(data));
  };

  return (
    <ValiskProvider {...methodsValisk}>
      <form onSubmit={_getValues(show)}>
        <input defaultValue={"aaa234132"} />
        <input {..._masks("inputTest")} />

        <InputTeste name="comunTeste3" />

        <button>Mostrar Valor</button>
      </form>
    </ValiskProvider>
  );
};

function InputTeste({ name }: { name: keyof Inputs }) {
  const { _masks, _forceUpdate } = useValiskContext<Inputs>();

  useEffect(() => {
    _forceUpdate({ inputName: name, inputType: "uncontrolled" });
  }, []);

  return <input {..._masks(name)} />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
