import { createContext, useContext, Dispatch, SetStateAction } from "react";

export interface IComponentsAdmin {
    selectedComponent?: string,
    setSelectedComponent?: SetStateAction<Dispatch<string>> | undefined | any
}

//manager components in admin route
export const ComponentsAdmin = createContext({} as IComponentsAdmin)

export function useComponentsAdmin(){
    const context = useContext(ComponentsAdmin) as IComponentsAdmin

    return context
}