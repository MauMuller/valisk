import { useContext } from "react";
import { ValiskContext } from "../ValiskProvider";
import { ReturnValisk } from "../../types";

export const useValiskContext = <T,>() => {
  return useContext(ValiskContext) as ReturnValisk<T>;
};
