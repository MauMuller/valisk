import { useId, useState } from "react";

import { InputValidation } from "./modules/InputValidation";
import { InputCPF } from "./modules/InputCPF";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(true);

  return (
    <>
      <InputCPF
        type={"text"}
        hashMask={false}
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
    </>
  );
}

export default App;
