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
  const [valueMoney, setValueMoney, isValidMoney] = useMaskMoney({
    inicialValue: "2456",
    useExplictMask: true,
  });

  // const { values, setValues, areValidValues, setKeys } = useMasks({
  //   cep: {},
  //   cnpj: {},
  //   money: {},
  //   cpf: {},
  //   password: {},
  //   phone: {},
  // });

  // const [valuePhone, setValuePhone, isValidPhone, setKeyPhone] = useMaskPhone({
  //   inicialValue: "482362345",
  //   useExplictMask: true,
  //   incrementDDDAndPrefix: true,
  //   typePhone: "phoneMovel",
  // });

  // const [valuesPassword, setValuePassword, isValidPassword] = useMaskPassword({
  //   hideValue: true,
  //   inicialValue: "",
  //   passwordPontenciality: {
  //     numbers: [2, "123"],
  //     specialChars: [1],
  //     words: [3],
  //   },
  // });

  // const [value, sourceValue] = valuesPassword;
  // console.log(isValidPassword);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        onChange={(evt) => setValueMoney(evt.target.value)}
        value={valueMoney}
      />
    </div>
  );
}

export default App;
