
"use client"

import { useContext, useReducer, createContext, ReactNode } from "react";
import { appData } from "./appReducer";

const userDataContext = createContext({})

const UserDataProvider = ({ children }: { children: ReactNode }) => {
    const userIntialData = {
        name: "something"
    }
    //@ts-ignore
    const [userDataState, userDataDispatch] = useReducer(appData, userIntialData)

    return (
        <userDataContext.Provider value={{ userDataState, userDataDispatch }}>
            {children}
        </userDataContext.Provider>
    )

}

const useUserData = () => useContext(userDataContext)

export { useUserData, UserDataProvider }