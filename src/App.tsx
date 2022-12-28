import { useState } from "react";

import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";
import { useMaskMoney } from "./hooks/useMaskMoney";

import { useMaskPhone } from "./hooks/useMaskPhone";
import { useMaskPassword } from "./hooks/useMaskPassword";

import { useMasks } from "./hooks/useMasks";

function App() {
  // const [valueCPF, setValueCPF, isValidCPF, setKeyCPF] = useMaskCPF({});
  // const [valueCNPJ, setValueCNPJ, isValidCNPJ, setKeyCNPJ] = useMaskCNPJ({});
  // const [valueCEP, setValueCEP, isValidCEP, setKeyCEP] = useMaskCEP({});
  // const [valueMoney, setValueMoney, isValidMoney] = useMaskMoney({});

  // const [valuePhone, setValuePhone, isValidPhone, setKeyPhone] = useMaskPhone({
  //   incrementDDDAndPrefix: false,
  //   useExplictMask: true,
  //   typePhone: "phoneMovel",
  // });

  const [valuesPassword, setValuePassword, isValidPassword] = useMaskPassword({
    hideValue: true,
    inicialValue: "",
    passwordPontenciality: {
      numbers: [2, "123"],
      specialChars: [1],
      words: [3],
    },
  });

  const [value, sourceValue] = valuesPassword;
  console.log(isValidPassword);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        onChange={(evt) => setValuePassword(evt.target.value)}
        value={value}
      />
    </div>
  );
}

export default App;
