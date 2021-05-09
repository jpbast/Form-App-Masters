/*tslint:disabled*/
import React, { useState, useContext, useEffect } from 'react'
import * as Styles from './styles'

import { getAdressFromCEP } from '../../services/viacepApi'
import { requestAppMastersApi } from '../../services/appMastersApi'

import { LoadingContext } from '../../contexts/LoadingContext'
import { SubmitResponseContext } from '../../contexts/SubmitResponseContext'

import Input from '../Input'

export type Fields = {
	name: string
	email: string
	phone: string
	addressZip: string
	addressStreet: string
	addressNumber: string
	addressComplement: string
	addressDistrict: string
	addressCity: string
	addressState: string
}

export default function Form() {
	const [fields, setFields] = useState({} as Fields)
	const [isValidZip, setIsValidZip] = useState(false)
	const [isFormSent, setIsFormSent] = useState(true)

	const { submitResponseCtxValues } = useContext(SubmitResponseContext)
	const { loadingCtxValues } = useContext(LoadingContext)

	const [submitResponse, setSubmitResponse] = submitResponseCtxValues
	const [loading, setLoading] = loadingCtxValues

	async function handleZip(zip: string) {
		// Se o campo CEP estiver totalmente preenchido, acessa a API e recebe o endereço a partir do CEP
		if (!zip.includes('_') && zip.length > 0) {
			if (!isValidZip) {
				console.log('teste', zip)
				zip = zip.replace('-', '')

				setLoading(true)
				const address = await getAdressFromCEP(zip)
				setLoading(false)
				
				if (address.addressState !== '') {
					setFields({
						...fields,
						['addressZip']: zip,
						...address
					})
					setIsValidZip(true)
				}
			}
		} else {
			setIsValidZip(false)
		}
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const input = event.target as HTMLInputElement
		const value = input.name == 'phone' ?
			input.value.replace(/[() -]/g, '') : input.value

		if (input.name === 'addressZip')
			handleZip(value)

		setFields({
			...fields, 
			[input.name]: value
		})
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setLoading(true)
		const res = await requestAppMastersApi(fields)
		setLoading(false)
		setSubmitResponse(res)
	}

	useEffect(() => {
		const status = submitResponse.status
		if (status !== undefined && status !== 400 && status !== 200)
			setIsFormSent(false)
	}, [submitResponse])

	return (
		submitResponse?.status === 200 ? (
			<h1 style={{ margin: 'auto' }}>
				Muito bom! Você receberá seus adesivos em alguns dias
			</h1>
		) : (
		<Styles.Wrapper loading={loading} isFormSent={isFormSent}>
			<h1>Insira as informações</h1>
			<form onSubmit={handleSubmit}>
				<Input 
					isFormSent={isFormSent}
					onChange={handleInputChange} 
					name="name" 
					type="text" 
					placeholder="Nome" 
				/>
				<Input 
					isFormSent={isFormSent}
					onChange={handleInputChange} 
					name="email" 
					type="text" 
					placeholder="Email" 
				/>
				<Input 
					isFormSent={isFormSent}
					onChange={handleInputChange} 
					name="phone" 
					type="number" 
					placeholder="Telefone" 
					mask="(99) 99999-9999" 
				/>
				<Input 
					isFormSent={isFormSent}
					onChange={handleInputChange} 
					name="addressZip" 
					type="number" 
					placeholder="CEP" 
					mask="99999-999" 
				/>
				{ isValidZip && (
					<>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="adressStreet" 
							type="text" 
							placeholder="Rua" 
							value={fields.addressStreet} 
							disabled 
						/>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="addressNumber" 
							type="number" 
							placeholder="Número" 
						/>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="addressComplement" 
							type="text" 
							placeholder="Complemento" 
						/>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="adressDistrict" 
							type="text" 
							placeholder="Bairro" 
							value={fields.addressDistrict} 
							disabled 
						/>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="adressCity" 
							type="text" 
							placeholder="Cidade" 
							value={fields.addressCity} 
							disabled 
						/>
						<Input 
							isFormSent={isFormSent}
							onChange={handleInputChange} 
							name="adressState" 
							type="text" 
							placeholder="Estado" 
							value={fields.addressState} 
							disabled 
						/>
					</>
				)}
				<Styles.Button 
					disabled={loading || !isFormSent ? true : false} 
					type="submit"
				>
					Enviar
				</Styles.Button>
			</form>
			{	!isFormSent && (
				<div>
					<span>
						Seus dados não foram enviados, aguarde um momento e tente novamente
					</span>
					<button 
						onClick={() => setIsFormSent(true)}
					>
						Tentar novamente
					</button>
				</div>
			)}
		</Styles.Wrapper>      
		)
	)
}
