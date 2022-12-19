import { useId, useState } from "react";

import { InputValidation } from "./modules/InputValidation";
import { InputCPF } from "./modules/InputCPF";
import { InputCNPJ } from "./modules/InputCNPJ";
import { InputCEP } from "./modules/InputCEP";

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

      {/* <InputValidation
        type={"text"}
        typeValidation={"password"}
        hashMask={true}
        hideValue={hiddenValue}
        inicialValue={"51213"}
        typePhone={"phoneMovel"}
        incrementDDDAndPrefix={true}
      /> */}
      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </div>
  );
}

export default App;
