import React, { useEffect, useState, useContext } from 'react'
import ErrorMessageContainer from '../styles/components/ErrorMessageContainer'
import { SubmitResponseContext } from '../contexts/SubmitResponseContext'

export default function ErrorMessage(props) {
    const [error, setError] = useState({ error: false, message: '' }) 
    const [submitResponse] = useContext(SubmitResponseContext)

    useEffect(() => {
        if (submitResponse && submitResponse.status == 400) {
            const isError = submitResponse ? submitResponse.data.filter(field => field.field == props.name) : false
        
            if (isError.length > 0)
                setError({ error: true, message: isError[0].error })
            else
                setError({ error: false, message: '' })
        } else
            setError({ error: false, message: '' })
    }, [submitResponse])
    
    return (
        <ErrorMessageContainer error={error}>
            { props.children }
            <span style={!error.error  ? {display: 'none'} : {}}>
                { error.message }
            </span>
        </ErrorMessageContainer>
    )
}
