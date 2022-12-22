import { useState } from "react";

import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";
import { useMaskMoney } from "./hooks/useMaskMoney";
import { useMaskPhone } from "./hooks/useMaskPhone";
import { useMaskPassword } from "./hooks/useMaskPassword";

import { useMasks } from "./hooks/useMasks";

function App() {
  const [hiddenValue, setHiddenValue] = useState(false);

  const { values, setValues, isValidValues, setKeys } = useMasks({
    password: { hideValue: hiddenValue },
  });

  const [valuesPassword] = values;
  const [setPassword] = setValues;

  const [value, sourceValue] = valuesPassword;

  console.clear();
  console.log(sourceValue);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        value={value}
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </div>
  );
}

export default App;
