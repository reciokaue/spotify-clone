import React, {createContext, useContext, useState} from 'react';

export const CoverContext = createContext()

export default function ContextProvider({ children }) {
    const [coverState, setCoverState] = useState(false)

    return (
        <CoverContext.Provider
            value={{
                coverState,
                setCoverState
            }}
        >
            {children}
        </CoverContext.Provider>
    );
}

export function useCover(){
    const context = useContext(CoverContext)
    const { coverState, setCoverState} = context
    return {coverState, setCoverState}
}
