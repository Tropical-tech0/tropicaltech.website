import Api from "@/services/api";
import { getUserLocalStorage, setUserLocalStorage } from "@/utils/localStorageAdmin";
import { createContext, useEffect, useState } from "react";
import Router from "next/router";

export interface IAuthAdmin {
    login: ({username, password}: ParamsLogin) => Promise<any>,
    logout: () => Promise<void>,
    username: string, 
    token: string,
    auth: boolean
}

export const AuthProvider = createContext({} as IAuthAdmin)

type Props = {
    children: JSX.Element
}

type User = {
    username: string, 
    token: string,
    auth: boolean 
}

type ParamsLogin = {
    username: string,
    password: string
}

//auth context admin
export default function AuthAdminProvider({children}: Props){

    const [admin, setAdmin] = useState<User | null>(null)

    //auth admin
    const login = async ({username, password}: ParamsLogin) => {

        let response = await Api.post('/login', {username, password})

        if(response.data.auth && response.status === 200){
            setUserLocalStorage(response.data.user)
            setAdmin(response.data.user)
        }

        return response

    }

    //signout
    const logout = async () => {
        setAdmin(null)
        setUserLocalStorage(null)
        Router.push('/blog')
    }

    return(
        <AuthProvider.Provider value={{login, logout, ...admin as User}}>
            {children}
        </AuthProvider.Provider>
    )

}