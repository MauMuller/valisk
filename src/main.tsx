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

  const [value, setValue] = useState("conTeste");
  const [hidePassword, setHidePassword] = useState(true);

  type Inputs = {
    inputPassword: string;
    uncontrolledPassword: string;
    comunTeste: string;
    comunTeste2: string;
    comunTeste3: string;
  };

  const { _masks, _forceUpdate, _getValues, _cleanVal } = useValisk<Inputs>({
    password: [
      { name: "inputPassword", hideValue: hidePassword },
      { name: "uncontrolledPassword", hideValue: hidePassword },
    ],
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
      { inputName: "uncontrolledPassword", inputType: "uncontrolled" },
      { inputName: "comunTeste", inputType: "uncontrolled" },
      { inputName: "comunTeste2", inputType: "uncontrolled" },
      { inputName: "comunTeste3", inputType: "uncontrolled" },
      {
        inputName: "inputPassword",
        inputType: "controlled",
        dispatchSetValue: setValue,
      },
    ]);
  }, [hidePassword]);

  const showValues = () => {
    console.log("sem remoção");
    console.log(_getValues());
    console.log("com remoção");
    console.log(_cleanVal(_getValues()));
  };

  return (
    <div>
      <input
        {..._masks("inputPassword")}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      <input {..._masks("uncontrolledPassword")} defaultValue={"unTeste"} />
      <input {..._masks("comunTeste")} defaultValue={"aaa234132"} />
      <input {..._masks("comunTeste2")} defaultValue={""} />
      <input {..._masks("comunTeste3")} defaultValue={"2"} />

      <button onClick={() => setHidePassword(!hidePassword)}>click</button>
      <button onClick={showValues}>Mostrar Valor</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={style}>{<App />}</div>
);
