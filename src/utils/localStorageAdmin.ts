
const key = "admin-tropical-tech"

export const setUserLocalStorage = (user: any) => {
    let json = JSON.stringify(user)
   if(typeof window !== "undefined") localStorage.setItem(key, json as any)
}

export const getUserLocalStorage = () => {
    let user = typeof window !== "undefined" && localStorage.getItem(key)

    let json = JSON.parse(user as any)

    return json
}