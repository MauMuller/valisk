import { FC, ReactNode, createContext } from "react";
import { ReturnValisk } from "../../types";

interface Props<T> extends ReturnValisk<T> {
  children: ReactNode;
}

export const ValiskContext = createContext({});

export const ValiskProvider: FC<Props<any>> = ({ children, ...rest }) => {
  return (
    <ValiskContext.Provider value={rest}>{children}</ValiskContext.Provider>
  );
};
