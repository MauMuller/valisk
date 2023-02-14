import { CSSProperties, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { useValisk, MaskTypes, ForceUpdateParams } from "./lib/index";

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

  const { _masks, _forceUpdate, _getValues, _cleanVal } = useValisk<Inputs>({
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
  });

  useEffect(() => {
    _forceUpdate([
      { inputName: "comunTeste", inputType: "uncontrolled" },
      { inputName: "comunTeste2", inputType: "uncontrolled" },
      { inputName: "comunTeste3", inputType: "uncontrolled" },
    ]);
  }, []);

  const show = (data: Inputs) => {
    console.log(data);
    console.log(_cleanVal(data));
  };

  return (
    <form onSubmit={_getValues(show)}>
      <input {..._masks("comunTeste")} defaultValue={"aaa234132"} />
      <input {..._masks("comunTeste2")} defaultValue={""} />
      <input {..._masks("comunTeste3")} defaultValue={"2"} />
      <input name="inputTest"></input>

      <button>Mostrar Valor</button>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
