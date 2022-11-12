import client from './client';


const api = {
// consulta todas las maquinas de la bd
    listaDeMaquinas: async () => {
        return await client.GET('/api/maquinas');
    },
    listaDePersonal: async () => {
        return await client.GET('/api/personals');
    },
    listaDeMantenimiento: async () => {
        return await client.GET('/api/mantenimientos');
    },
    agregarPersonal: async (body) =>{
        return await client.POST('/api/personals', body);
    },
}

export default api;