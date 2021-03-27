import React, {createContext, useContext, useState} from 'react';

export const PageContext = createContext()

export default function ContextProvider({ children }) {
    const [ page, setPage ] = useState('home')

    return (
        <PageContext.Provider
            value={{
                 page,
                setPage
            }}
        >
            {children}
        </PageContext.Provider>
    );
}

export function usePage(){
    const context = useContext(PageContext)
    const {  page, setPage} = context
    return { page, setPage}
}
