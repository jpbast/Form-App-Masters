import axios from 'axios'
import { Fields } from '../components/Form'

const appMastersApi = axios.create({
  baseURL: 'https://simple-api-selection.herokuapp.com/submit/'
})

export async function requestAppMastersApi(body: Fields) {
	try {
		const options = {
			method: 'POST',
			data: body,
			headers: new Headers({ 'Content-Type': 'application/json' })
		}
		const data = await appMastersApi(options)
		
		return {
			status: data.status
		}

	} catch(err) {
		const data = err.response
		return { 
			status: data.status,
			data: data.data 
		}
	}
}