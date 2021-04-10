import React, { useState, createContext } from 'react'

export const SubmitResponseContext = createContext();

export function SubmitResponseProvider(props) {
    const [submitResponse, setSubmitResponse] = useState(false)

    return (
        <SubmitResponseContext.Provider value={[submitResponse, setSubmitResponse]}>
            { props.children }
        </SubmitResponseContext.Provider>
    )
}