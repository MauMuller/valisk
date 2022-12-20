import { useId, useState } from "react";

import { InputCPF } from "./modules/InputCPF";
import { InputCNPJ } from "./modules/InputCNPJ";
import { InputCEP } from "./modules/InputCEP";
import { InputMoney } from "./modules/InputMoney";
import { InputPhone } from "./modules/InputPhone";
import { InputPassword } from "./modules/InputPassword";

import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";

function App() {
  // const [hiddenValue, setHiddenValue] = useState(true);

  const maksConfig = {
    useExplictMask: true,
  };

  const [cpf, setCPF, isValidCPF, setKeyCPF] = useMaskCPF(maksConfig);
  const [cnpj, setCNPJ, isValidCNPJ, setKeyCNPJ] = useMaskCNPJ(maksConfig);
  const [cep, setCEP, isValidCEP, setKeyCEP] = useMaskCEP(maksConfig);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        value={cpf}
        onChange={(evt) => setCPF(evt.target.value)}
        onKeyDown={(evt) => setKeyCPF(evt.key)}
      />

      <input
        type="text"
        value={cnpj}
        onChange={(evt) => setCNPJ(evt.target.value)}
        onKeyDown={(evt) => setKeyCNPJ(evt.key)}
      />

      <input
        type="text"
        value={cep}
        onChange={(evt) => setCEP(evt.target.value)}
        onKeyDown={(evt) => setKeyCEP(evt.key)}
      />

      {/* 

      <InputMoney
        type="text"
        hashMask={true}
        inicialValue={""}
        valueFromInput={(value) => console.log(value)}
      />

      <InputPhone
        type="text"
        hashMask={true}
        incrementDDDAndPrefix={true}
        inicialValue={""}
        typePhone={"phoneFixo"}
        valueFromInput={(value) => console.log(value)}
      />

      <InputPassword
        type="text"
        hideValue={hiddenValue}
        inicialValue={""}
        passwordPontenciality={{
          specialChars: [1, ""],
        }}
        valueFromInput={(value) => console.log(value)}
        valueWithoutHide={(value) => console.log(value)}
        validationFromInput={(value) => {
          console.clear();
          console.log(JSON.stringify(value, null, "\t"));
        }}
      />

      <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button> */}
    </div>
  );
}

export default App;
