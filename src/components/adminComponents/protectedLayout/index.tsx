import React, { useEffect } from 'react'
import Router from 'next/router'
import { getUserLocalStorage, setUserLocalStorage } from '@/utils/localStorageAdmin'
import Api from '@/services/api'

type Props = {
    children: JSX.Element
}


//protected private routes
const ProtectedLayout: React.FC<Props> = ({ children }) => {

    const [isLoad, setIsLoad] = React.useState<boolean>(true)

    useEffect(() => {

        const checkToken = async () => {
            if (typeof window !== "undefined") {

                let token = getUserLocalStorage()?.token

                try {
                    let response = await Api.get('/check-jwt?tokenaccess=' + token)
                    if (!response.data.auth) {
                        setUserLocalStorage(null)
                        Router.push('/blog')
                        return
                    }
                    setIsLoad(false)
                } catch (error: any) {
                    if (!error.response?.data.auth) {
                        setUserLocalStorage(null)
                        Router.push('/blog')
                        return
                    }
                    setIsLoad(false)
                }
            }
        }
        checkToken()

    }, [])

    return (
        <>
            {
                !isLoad && children
            }
        </>
    )

}

export default ProtectedLayout