import { CSSProperties, useEffect } from "react";
import ReactDOM from "react-dom/client";

import {
  useValisk,
  useConfigEntry,
  ObjectWithNameAndListProps,
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

  const teste: ObjectWithNameAndListProps<Inputs> = {
    name: "inputTest",
    props: { cpf: { explictMask: true } },
  };

  const configMasks = useConfigEntry<Inputs>(teste);

  const { _masks, _forceUpdate, _getValues, _cleanValues } = useValisk<Inputs>(
    configMasks /* {
    cnpj: { name: "comunTeste", explictMask: false },
    money: {
      name: "comunTeste2",
      explictMask: true,
      explictSimbol: true,
      typeMoney: "dollar",
    },
    phone: {
      name: "comunTeste3",
      typePhone: "phoneFixo",
      showDDD: true,
      showPrefix: true,
      explictMask: true,
    },
  } */
  );

  useEffect(() => {
    _forceUpdate(
      /* [ */
      // { inputName: "comunTeste", inputType: "uncontrolled" },
      //    { inputName: "comunTeste2", inputType: "uncontrolled" },
      { inputName: "inputTest", inputType: "uncontrolled" }
      /* ] */
    );
  }, []);

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanValues(data));
  };

  return (
    <form onSubmit={_getValues(show)}>
      <input {..._masks("comunTeste")} defaultValue={"aaa234132"} />
      <input {..._masks("inputTest")}></input>
      <input defaultValue={""} />
      <input defaultValue={"2"} />

      <button>Mostrar Valor</button>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
