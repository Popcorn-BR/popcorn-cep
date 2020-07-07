import { Local } from './models/local';
import { http } from './service/api';

export const local = async (cep: string) => {
  const cepSerialized = cep.replace(/( )|-|_/g, '');
  try {
    if (!cepSerialized || cepSerialized.length < 8) throw new Error('Parâmetros inválidos!');
    return await http<Local>(cepSerialized);
  } catch (error) {
    return { msg: error.message };
  }
}

export const locais = async (uf: string, cidade: string, rua: string) => {
  try {
    if (!uf || !cidade || !rua) throw new Error('Parâmetros inválidos!');

    return await http<Local>(`${uf}/${cidade}/${rua}`)
  } catch (error) {
    return { msg: error.message }
  }
};