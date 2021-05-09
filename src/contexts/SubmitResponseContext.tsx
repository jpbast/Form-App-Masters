import { useState, createContext } from 'react'

export type SubmitErrors = {
	field: string,
	error: string
}

type SubmitResponse = {
	status: number,
	data?: SubmitErrors[]
}

type SubmitResponseContextType = {
	submitResponseCtxValues: [
		submitResponse: SubmitResponse,
		setSubmitResponse: React.Dispatch<React.SetStateAction<SubmitResponse>>
	]
}

type SubmitResponseProviderProps = {
	children: React.ReactNode
}

export const SubmitResponseContext = createContext({} as SubmitResponseContextType);

export function SubmitResponseProvider({ children }: SubmitResponseProviderProps) {
	const [submitResponse, setSubmitResponse] = useState({} as SubmitResponse)

	return (
    <SubmitResponseContext.Provider value={{ submitResponseCtxValues: [submitResponse, setSubmitResponse] }}>
      { children }
    </SubmitResponseContext.Provider>
	)
}