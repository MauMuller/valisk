import { useId } from "react";
import { useMasks } from "./hooks/useMasks";

const passwordCondition = {
  numbers: [4],
  specialChars: [2, "*"],
  words: [4],
};

const templateMasks = [
  { type: "cnpj", inicialValue: "21523554" },
  { type: "cpf", useExplictMask: true },
  { type: "cep" },
  { type: "phone", incrementDDDAndPrefix: true, useExplictMask: true },
  { type: "money", useExplictMask: true },
  { type: "password", passwordPontenciality: passwordCondition },
];

function App() {
  const id = useId();
  const globalStyle = { display: "flex", gap: "0.5rem" };

  const configMask = templateMasks.reduce((prev, current) => {
    const {
      type,
      inicialValue,
      useExplictMask,
      passwordPontenciality,
      incrementDDDAndPrefix,
    } = current;

    const objectToType = {
      inicialValue,
      useExplictMask,
      passwordPontenciality,
      incrementDDDAndPrefix,
    };

    return { ...prev, [type]: objectToType };
  }, {});

  const { values, setValues, areValidValues, setKeys } = useMasks(configMask);

  const inputs = templateMasks.map((object, indexByObject) => {
    const { type } = object;
    const isPasswordType = type === "password";

    const [valueInput, sourceValue] = values[indexByObject];
    const value = isPasswordType ? valueInput : values[indexByObject];

    const setValue = setValues[indexByObject];
    const isValid = areValidValues[indexByObject];
    const setKey = setKeys.at(indexByObject);

    const idConect = `${id}-${type}`;
    const nameLabel = type[0].toUpperCase() + type.substring(1);

    return (
      <div key={indexByObject} style={{ ...globalStyle, flexDirection: "row" }}>
        <label htmlFor={idConect}>{nameLabel}</label>

        <div style={{ ...globalStyle, flexDirection: "column" }}>
          <input
            id={idConect}
            type="tel"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            onKeyDown={(evt) => setKey?.(evt.key)}
          />
          {isPasswordType ? <>{sourceValue}</> : ""}
        </div>
        <p style={{ width: "10rem" }}>
          Validação do campo: {JSON.stringify(isValid)}
        </p>
      </div>
    );
  });

  return (
    <div style={{ ...globalStyle, flexDirection: "column" }}>{inputs}</div>
  );
}

export default App;
