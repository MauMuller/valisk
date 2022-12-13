import { InputValidation } from "./modules/InputValidation";
import { useId, useState } from "react";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(false);

  return (
    <>
      <InputValidation
        type={"text"}
        typeValidation={"phone"}
        hashMask={false}
        validationFromInput={(validation) => {
          // console.log(validation);
        }}
      />
      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </>
  );
}

export default App;
