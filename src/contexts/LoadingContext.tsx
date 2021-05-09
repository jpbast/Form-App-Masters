import { useState, createContext } from 'react'

type LoadingContextType = {
	loadingCtxValues: [
		loading: boolean,
		setLoading: React.Dispatch<React.SetStateAction<boolean>>
	]
}

type LoadingProviderProps = {
	children: React.ReactNode
}

export const LoadingContext = createContext({} as LoadingContextType);

export function LoadingProvider({ children }: LoadingProviderProps) {
	const [loading, setLoading] = useState(false)

	return (
		<LoadingContext.Provider value={{ loadingCtxValues: [loading, setLoading] }}>
			{ children }
		</LoadingContext.Provider>
	)
}