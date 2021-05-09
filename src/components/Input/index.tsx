import { LoadingContext } from 'contexts/LoadingContext'
import { SubmitResponseContext } from 'contexts/SubmitResponseContext'
import { useContext, useEffect, useState } from 'react'

import InputMask from 'react-input-mask'
import * as Styles from './styles'

type InputProps = {
	name: string
	type: string
	placeholder: string
	mask?: string
	value?: string
	disabled?: boolean
	isFormSent?: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const [errorMessage, setErrorMessage] = useState('') 

  const { submitResponseCtxValues } = useContext(SubmitResponseContext)
	const { loadingCtxValues } = useContext(LoadingContext)

	const loading = loadingCtxValues[0]
  const submitResponse = submitResponseCtxValues[0]

	useEffect(() => {
    if (submitResponse?.status === 400) {
      const inputError = submitResponse.data!.filter(field => field.field == props.name)
      inputError.length > 0 ? 
				setErrorMessage(inputError[0].error) : setErrorMessage('')
    } else {
      setErrorMessage('')
		}
  }, [submitResponse])

	return (
		<Styles.Wrapper error={errorMessage !== '' ? true : false}>
			<label htmlFor={props.name}>
				<span>{ props.placeholder }</span>
				{/* Se o campo for CEP ou Telefone, precisa usar o InputMask */}
				{ props.mask ? (
					<InputMask 
						disabled={props.disabled || !props.isFormSent || loading}
						onChange={props.onChange}
						name={props.name} 
						mask={props.mask} 
						placeholder={props.placeholder} 
					/>
				) : (
					<input 
						onChange={props.onChange}
						name={props.name} 
						type={props.type} 
						placeholder={props.placeholder} 
						value={props.value} 
						disabled={props.disabled || !props.isFormSent || loading} 
					/>
				)}
			</label>
			<span>
        { errorMessage }
      </span>
		</Styles.Wrapper>
	)
}