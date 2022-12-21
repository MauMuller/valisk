import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";
import { useMaskMoney } from "./hooks/useMaskMoney";
import { useMaskPhone } from "./hooks/useMaskPhone";
import { useMaskPassword } from "./hooks/useMaskPassword";

import { useMasks } from "./hooks/useMasks";
import { useState } from "react";

function App() {
  const [hiddenValue, setHiddenValue] = useState(true);

  const [
    valuePassword,
    setPassword,
    isValidPassword,
    setKeyPassword,
    sourceValue,
  ] = useMaskPassword({
    inicialValue: "10",
    hideValue: hiddenValue,
    passwordPontenciality: { numbers: [5] },
  });

  // const [cnpjValue, cpfValue, phoneValue] = values;
  // const [setCNPJ, setCPF, setPhone] = setValues;
  // const [setKeysCNPJ, setKeysCPF, setKeysPhone] = setKeys;

  // console.clear();
  // console.log(JSON.stringify(isValidPassword, null, "\t"));
  // console.log(sourceValue);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        value={valuePassword}
        onChange={(evt) => setPassword(evt.target.value)}
        onKeyDown={(evt) => setKeyPassword(evt.key)}
      />

      {/* <input
        type="text"
        value={cpfValue}
        onChange={(evt) => setCPF(evt.target.value)}
        onKeyDown={(evt) => setKeysCPF(evt.key)}
      />

      <input
        type="text"
        value={cnpjValue}
        onChange={(evt) => setCNPJ(evt.target.value)}
        onKeyDown={(evt) => setKeysCNPJ(evt.key)}
      />

      <input
        type="text"
        value={phoneValue}
        onChange={(evt) => setPhone(evt.target.value)}
        onKeyDown={(evt) => setKeysPhone(evt.key)}
      /> 
    */}

      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
    </div>
  );
}

export default App;
