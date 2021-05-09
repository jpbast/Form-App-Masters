import axios from 'axios';

const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

const isError = (field: string, error: boolean) => error ? '' : field

export async function getAdressFromCEP(zip: string) {  
  try {
    const options = {
      method: 'GET',
      url: `/${zip}/json`
    };

    const address = await viacepApi(options)
    const { 
      logradouro, 
      bairro, 
      localidade, 
      uf,
      erro
    } = address.data

    return { 
      addressStreet: isError(logradouro, erro), 
      addressDistrict: isError(bairro, erro), 
      addressCity: isError(localidade, erro), 
      addressState: isError(uf, erro),
    }
  } catch(err) {
    return err
  }
}