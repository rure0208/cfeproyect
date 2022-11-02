import client from './client';


const api = {

    listaDeMaquinas: async () => {
        return await client.GET('/api/maquinas');
    },
    listaDePersonal: async () => {
        return await client.GET('/api/personals');
    } 
}

export default api;