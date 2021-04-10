import axios from 'axios';

const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export async function getAdressFromCEP(cep) {  
  const options = {
    method: 'GET',
    url: `/${cep}/json`
  };
  
  const address = await viacepApi(options)
      .then((res) => res.data)
      .catch((err) => err);
  return address
}