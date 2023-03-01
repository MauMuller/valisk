import { FC, ReactNode, createContext, useContext } from "react";
import { ReturnValisk } from "../../types";

interface Props<T> extends ReturnValisk<T> {
  children: ReactNode;
}

export const ValiskContext = createContext<ReturnValisk<any>>(
  {} as ReturnValisk<any>
);

export const ValiskProvider: FC<Props<any>> = ({ children, ...rest }) => {
  return (
    <ValiskContext.Provider value={rest}>{children}</ValiskContext.Provider>
  );
};

export const useValiskContext = <T,>() => {
  return useContext(ValiskContext) as ReturnValisk<T>;
};
