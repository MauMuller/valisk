import { useState } from "react";

import { useMasks } from "./hooks/useMasks";

import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";

import { useMaskMoney } from "./hooks/useMaskMoney";
import { useMaskPassword } from "./hooks/useMaskPassword";
import { useMaskPhone } from "./hooks/useMaskPhone";

function App() {
  // const [valueCPF, setValueCPF, isValidCPF, setKeyCPF] = useMaskCPF({});
  // const [valueCNPJ, setValueCNPJ, isValidCNPJ, setKeyCNPJ] = useMaskCNPJ({});
  const [valueCEP, setValueCEP, isValidCEP, setKeyCEP] = useMaskCEP({
    inicialValue: "",
    useExplictMask: true,
  });
  // const [valueMoney, setValueMoney, isValidMoney] = useMaskMoney({});
  // const [valuePassword, setValuePassword, isValidPassword] = useMaskPassword({});
  // const [valuePhone, setValuePhone, isValidPhone] = useMaskPhone({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        onKeyDown={(evt) => setKeyCEP(evt.key)}
        onChange={(evt) => setValueCEP(evt.target.value)}
        value={valueCEP}
      />
    </div>
  );
}

export default App;
