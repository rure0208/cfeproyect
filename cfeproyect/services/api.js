import client from './client';


const api = {

    listaDeMaquinas: async () => {
        return await client.GET('/api/maquinas');
    },
    listaDePersonal: async () => {
        return await client.GET('/api/personals');
    },
    listaDeMantenimiento: async () => {
        return await client.GET('/api/mantenimientos');
    },
    agregarDePersonal: async () => {
        return await client.POST('/api/personals');
    },
}

export default api;