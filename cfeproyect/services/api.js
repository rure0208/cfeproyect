import client from './client';


const api = {

    listaDeMaquinas: async () => {
        return await client.GET('/api/maquinas');
    } 
}

export default api;