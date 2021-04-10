import axios from 'axios'

const simpleSelectionApi = axios.create({
    baseURL: 'https://simple-api-selection.herokuapp.com/submit'
})

export async function requestSimpleApi(body) {
    const options = {
        url: '/',
        method: 'POST',
        data: body,
        headers: new Headers({ 'Content-Type': 'application/json' })
    }
    
    const res = await simpleSelectionApi(options)
        .then(res => res)
        .catch(err => err.response)
    return res
}