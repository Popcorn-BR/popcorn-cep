import { Location } from './models/Location';
import { Query } from './models/Query';
import { http } from './service/api';

export const location = async ({ cep, query }: { cep: string, query: Query }) => {
  try {
    if (query)
      return getQuery(query);
    else
      return getCep(cep);
  } catch (error) {
    return { msg: error.message };
  }
}

const getQuery = async ({ uf, city, street }: Query) => {
  try {
    if (!uf || !city || !street) throw new Error('Parâmetros inválidos!');
    return await http<Location[]>(`${uf}/${city}/${street}`)
  } catch (error) {
    return { msg: error.message }
  }
};

export const getCep = async (cep: string) => {
  const cepSerialized = cep.replace(/( )|-|_/g, '');
  try {
    if (!cepSerialized || cepSerialized.length < 8) throw new Error('Parâmetros inválidos!');
    return await http<Location>(cepSerialized);
  } catch (error) {
    return { msg: error.message };
  }
}