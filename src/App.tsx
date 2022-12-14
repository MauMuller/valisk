import { InputValidation } from "./modules/InputValidation";
import { useId, useState } from "react";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(false);

  return (
    <>
      <InputValidation
        type={"text"}
        typeValidation={"fullphone"}
        inicialValue={"5551"}
        hashMask={false}
      />
      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </>
  );
}

export default App;
