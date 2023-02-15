//persistent token storage

const key = "admin-tropical-tech"

//set data admin
export const setUserLocalStorage = (user: any) => {
    let json = JSON.stringify(user)
    if (typeof window !== "undefined") localStorage.setItem(key, json as any)
}

//get data admin
export const getUserLocalStorage = () => {
    let user = typeof window !== "undefined" && localStorage.getItem(key)

    let json = JSON.parse(user as any)

    return json
}