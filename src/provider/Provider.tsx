import {StoreType} from "../types/types";
import React, {createContext, FC, ReactNode} from "react";

type ContextType = StoreType;
export const Context = createContext<ContextType>({} as StoreType);

type ProviderType = {
    store:  StoreType
    children: ReactNode
}

export const Provider: FC<ProviderType> = ({store, children}) => {
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}