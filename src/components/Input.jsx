import React from 'react'
import ErrorMessage from './ErrorMessage'
import InputMask from 'react-input-mask'

export default function Input(props) {
    return (
        <ErrorMessage name={props.name} submitResponse={props.submitResponse}>
            { props.mask ? (
                <label htmlFor={props.name}>
                    <span>{ props.placeholder }</span>
                    <InputMask id={props.name} mask={props.mask} placeholder={props.placeholder} onChange={props.name == 'addressZip'? props.handleCEP : null} />
                </label>
            ) : (
                <label htmlFor={props.name}>
                    <span>{ props.placeholder }</span>
                    <input id={props.name} type={props.type} placeholder={props.placeholder} value={props.value} disabled={props.disabled} />
                </label>
            )}
        </ErrorMessage>
    )
}