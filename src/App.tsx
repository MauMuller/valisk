import { useId } from "react";
import { useMasks } from "./hooks/useMasks";

import { useMaskCNPJ } from "./hooks/useMaskCNPJ";
import { useMaskCPF } from "./hooks/useMaskCPF";

const App = () => {
  const configHooks = {
    cpf: { inicialValue: "55552" },
    cnpj: { useExplictMask: true },
  };

  console.log(useMasks({ cep: { useExplictMask: true } }));
  const [cpf, setCPF, isCPF, setKeyCPF] = useMaskCPF(configHooks.cpf);
  const [cnpj, setCNPJ, isCNPJ, setKeyCNPJ] = useMaskCNPJ(configHooks.cnpj);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
    </div>
  );
};

export default App;
