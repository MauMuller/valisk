import { InputCPF } from "./modules/InputCPF";
import { InputCNPJ } from "./modules/InputCNPJ";
import { InputCEP } from "./modules/InputCEP";
import { InputMoney } from "./modules/InputMoney";
import { InputPhone } from "./modules/InputPhone";
import { InputPassword } from "./modules/InputPassword";

import { useMaskCPF } from "./hooks/useMaskCPF";
import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCEP } from "./hooks/useMaskCEP";
import { useMaskMoney } from "./hooks/useMaskMoney";
import { useMaskPhone } from "./hooks/useMaskPhone";

import { useMasks } from "./hooks/useMasks";

function App() {
  const [phoneValue, setPhone, isValidPhone, setKeyPhone] = useMaskPhone({
    useExplictMask: true,
    incrementDDDAndPrefix: true,
    typePhone: "phoneMovel",
    inicialValue: "5551",
  });

  const { values, setValues, isValidValues, setKeys } = useMasks({
    cnpj: { useExplictMask: true },
    cpf: { useExplictMask: false },
  });

  console.log(isValidPhone);

  const [cnpjValue, cpfValue] = values;
  const [setCNPJ, setCPF] = setValues;
  const [setKeysCNPJ, setKeysCPF] = setKeys;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
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
        onKeyDown={(evt) => setKeyPhone(evt.key)}
      />

      {/* <input
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

      <input
        type="text"
        value={money}
        onChange={(evt) => setMoney(evt.target.value)}
      /> */}

      {/*

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
