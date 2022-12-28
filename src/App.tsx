import { useState, useId, useRef } from "react";
import { useMasks } from "./hooks/useMasks";

import { useMaskCPF } from "./hooks/useMaskCPF";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(true);
  const corretValidationURL =
    "https://cdn-icons-png.flaticon.com/512/4436/4436481.png";

  const invalidValidationURL =
    "https://cdn.pixabay.com/photo/2017/03/28/01/42/attention-2180765_1280.png";

  const namesForLabes = ["password", "cep", "cnpj", "cpf"];

  const inputsMasks = namesForLabes.reduce((prev, current) => {
    const inicialObject = { inicialValue: "" };
    const passwordObj = { ...inicialObject, hideValue: hiddenValue };
    const othersObjects =
      current === "cpf" ? { useExplictMask: false } : { useExplictMask: true };
    const data = current === "password" ? passwordObj : othersObjects;

    return { ...prev, [current]: data };
  }, {});

  const { values, setValues, isValidValues, setKeys } = useMasks(inputsMasks);

  const Inputs = values.map((value, indValue) => {
    const valueInput = typeof value === "string" ? value : value.at(0);
    const setValue = setValues[indValue];
    const setKey = setKeys.at(indValue);
    const isValid = isValidValues[indValue];

    const nameLabel = namesForLabes.at(indValue);
    const idConect = `${id}-${nameLabel}`;

    const passwordVisbilityBtn =
      nameLabel === "password" ? (
        <button onClick={() => setHiddenValue(!hiddenValue)}>
          {hiddenValue ? "Mostrar" : "Ocultar"}
        </button>
      ) : null;

    return (
      <div key={indValue} style={{ display: "flex", gap: "1rem" }}>
        <label htmlFor={idConect}>{nameLabel}</label>
        <input
          type="text"
          id={idConect}
          value={valueInput}
          onChange={(evt) => setValue(evt.target.value)}
          onKeyDown={(evt) => setKey?.(evt.key)}
        />
        {passwordVisbilityBtn}
        {isValid ? (
          <img alt="correct" src={corretValidationURL} width="30" />
        ) : (
          <img alt="invalid" src={invalidValidationURL} width="30" />
        )}
      </div>
    );
  });

  // const [value, setValue, isValid, setKey] = useMaskCPF({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {Inputs}
    </div>
  );
}

export default App;
