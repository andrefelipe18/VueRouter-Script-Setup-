import axios from 'axios';

/**
 * Função responsável por fazer uma chamada de API para obter dados.
 * @param endpoint - O endpoint da API a ser chamado.
 * @param params - Parâmetros opcionais para a chamada de API.
 * @returns Uma Promise contendo a resposta da chamada de API.
 */
export default async function getApi(endpoint: string, params: number | boolean) {
  if (params) {
    return axios.get(`http://localhost:3000/${endpoint}/${params}`);
  } else {
    return axios.get(`http://localhost:3000/${endpoint}`);
  }
}
