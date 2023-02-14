import { useContext } from "react";
import { IAuthAdmin, AuthProvider } from './authAdmin'

//use context auth admin
export default function useAuthAdmin(){
    let context = useContext(AuthProvider) as IAuthAdmin

    return context
}