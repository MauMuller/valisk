import { useMasks } from "../hooks/useMasks";
import { useMaskCPF } from "../hooks/useMaskCPF";
import { useMaskCEP } from "../hooks/useMaskCEP";
import { useMaskCNPJ } from "../hooks/useMaskCNPJ";
import { useMaskMoney } from "../hooks/useMaskMoney";
import { useMaskPassword } from "../hooks/useMaskPassword";
import { useMaskPhone } from "../hooks/useMaskPhone";

export default [
  useMaskCPF,
  useMaskCNPJ,
  useMaskCEP,
  useMaskMoney,
  useMaskPhone,
  useMaskPassword,
];

export {
  useMasks,
  useMaskCEP,
  useMaskCNPJ,
  useMaskCPF,
  useMaskMoney,
  useMaskPassword,
  useMaskPhone,
};
