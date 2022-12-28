import { useState } from "react";

import { useMasks } from "./hooks/useMasks";
import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";

import { useMaskMoney } from "./hooks/useMaskMoney";
import { useMaskPassword } from "./hooks/useMaskPassword";
import { useMaskPhone } from "./hooks/useMaskPhone";

function App() {
  // const [valueCPF, setValueCPF, isValidCPF, setKeyCPF] = useMaskCPF({});
  const [valueCNPJ, setValueCNPJ, isValidCNPJ, setKeyCNPJ] = useMaskCNPJ({});
  // const [valueMoney, setValueMoney, isValidMoney] = useMaskMoney({});
  // const [valuePassword, setValuePassword, isValidPassword] = useMaskPassword({});
  // const [valuePhone, setValuePhone, isValidPhone] = useMaskPhone({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        onKeyDown={(evt) => setKeyCNPJ(evt.key)}
        onChange={(evt) => setValueCNPJ(evt.target.value)}
        value={valueCNPJ}
      />
    </div>
  );
}

export default App;
