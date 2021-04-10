/*tslint:disabled*/
import React, { useState, useContext } from 'react'
import { FormContainer, FormFields } from '../styles/components/Form'
import ButtonStyle from '../styles/components/ButtonStyle'
import { getAdressFromCEP } from '../services/viacepApi'
import buildRequest from '../services/buildRequest'
import { requestSimpleApi } from '../services/simpleSelectionApi'
import { LoadingContext } from '../contexts/LoadingContext'
import { SubmitResponseContext } from '../contexts/SubmitResponseContext'
import Input from './Input'

export default function Form() {
    const [address, setAddress] = useState(false)
    const [cep, setCep] = useState(false)
    const [submitResponse, setSubmitResponse] = useContext(SubmitResponseContext)
    const [loading, setLoading] = useContext(LoadingContext)

    async function handleCEP(event) {
        const cep = event.target.value;
        setCep(false)
        // Se o campo CEP estiver totalmente preenchido, acessa a API e recebe o endereço a partir do CEP
        if (!cep.includes('_')) {
            const newCep = cep.replace('-', '')
            setLoading(true)
            const cepResponse = await getAdressFromCEP(newCep)
            setLoading(false)
            setAddress(cepResponse)
            if (!cepResponse.erro)
                setCep(newCep)
        }       
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const firstInputs = event.target.parentNode
        const req = buildRequest(firstInputs, cep)

        setLoading(true)
        const res = await requestSimpleApi(req)
        setLoading(false)
        setSubmitResponse(res)
    }

    return (
        submitResponse && submitResponse.status == 200 ? (
             <h1 style={{margin: 'auto'}}>Muito bom! Você receberá seus adesivos em alguns dias</h1>
        ) : (
        <FormContainer style={loading ? {opacity: 0.4} : {}}>
            <h1>Insira as informações</h1>
            <FormFields>
                <Input name="name" type="text" placeholder="Nome" />
                <Input name="email" type="text" placeholder="Email" />
                <Input name="phone" type="number" placeholder="Telefone" mask="(99) 99999-9999" />
                <Input name="addressZip" type="number" placeholder="CEP" mask="99999-999" handleCEP={handleCEP} />
                {!address.erro && cep && (
                    <FormFields id="second">
                        <Input name="adressStreet" type="text" placeholder="Rua" value={address.logradouro} disabled />
                        <Input name="addressNumber" type="number" placeholder="Número" />
                        <Input name="addressComplement" type="text" placeholder="Complemento" />
                        <Input name="adressDistrict" type="text" placeholder="Bairro" value={address.bairro} disabled />
                        <Input name="adressCity" type="text" placeholder="Cidade" value={address.localidade} disabled />
                        <Input name="adressState" type="text" placeholder="Estado" value={address.uf} disabled />
                    </FormFields>
                )}
                { submitResponse && submitResponse.data.status && (
                    alert('Seus dados não foram enviados, aguarde um momento e tente novamente')
                )}
                <ButtonStyle onClick={handleSubmit}>Enviar</ButtonStyle>
            </FormFields>
        </FormContainer>      
        )
    )
}
