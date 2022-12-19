import { useId, useState } from "react";

import { InputCPF } from "./modules/InputCPF";
import { InputCNPJ } from "./modules/InputCNPJ";
import { InputCEP } from "./modules/InputCEP";
import { InputMoney } from "./modules/InputMoney";
import { InputPhone } from "./modules/InputPhone";
import { InputPassword } from "./modules/InputPassword";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <InputCPF
        type={"text"}
        hashMask={true}
        inicialValue={""}
        // valueFromInput={(value) => console.log(value)}
      />

      <InputCNPJ
        type="text"
        hashMask={true}
        inicialValue={""}
        // valueFromInput={(value) => console.log(value)}
      />

      <InputCEP
        type="text"
        hashMask={true}
        inicialValue={""}
        // valueFromInput={(value) => console.log(value)}
      />

      <InputMoney //Ainda faltam algumas pontuações
        type="text"
        hashMask={true}
        inicialValue={""}
        // valueFromInput={(value) => console.log(value)}
      />

      <InputPhone
        type="text"
        hashMask={true}
        incrementDDDAndPrefix={true}
        inicialValue={""}
        typePhone={"phoneFixo"}
        // valueFromInput={(value) => console.log(value)}
      />

      <InputPassword
        type="text"
        hideValue={hiddenValue}
        inicialValue={""}
        passwordPontenciality={{
          specialChars: [1, ""],
        }}
        // valueFromInput={(value) => console.log(value)}
        // valueWithoutHide={(value) => console.log(value)}
        // validationFromInput={(value) => {
        //   console.clear();
        //   console.log(JSON.stringify(value, null, "\t"));
        // }}
      />

      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </div>
  );
}

export default App;
