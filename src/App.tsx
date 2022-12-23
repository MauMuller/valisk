import { useState, useId } from "react";
import { useMasks } from "./hooks/useMasks";

function App() {
  const id = useId();
  const [hiddenValue, setHiddenValue] = useState(true);

  const namesForLabes = ["password", "cep", "cnpj", "cpf"];

  const inputsMasks = namesForLabes.reduce((prev, current) => {
    const inicialObject = { inicialValue: "" };
    const passwordObj = { ...inicialObject, hideValue: hiddenValue };
    const data =
      current === "password" ? passwordObj : { useExplictMask: true };

    return { ...prev, [current]: data };
  }, {});

  const { values, setValues, isValidValues, setKeys } = useMasks(inputsMasks);

  const Inputs = values.map((value, indValue) => {
    const valueInput = typeof value === "string" ? value : value.at(0);
    const setValue = setValues[indValue];
    const setKey = setKeys.at(indValue);

    const nameLabel = namesForLabes.at(indValue);
    const idConect = `${id}-${nameLabel}`;

    const passwordVisbilityBtn =
      nameLabel === "password" ? (
        <button onClick={() => setHiddenValue(!hiddenValue)}>Mostrar</button>
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
      </div>
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {Inputs}
    </div>
  );
}

export default App;
