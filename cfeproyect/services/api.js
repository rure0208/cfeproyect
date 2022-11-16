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
    agregarMaquinas: async (body) =>{
        return await client.POST('/api/maquinas', body);
    },
    agregarMantenimiento: async (body) =>{
        return await client.POST('/api/mantenimientos', body);
    },
    removerPersonal: async (id) => {
        return await client.DELETE('/api/personals/' + id);
    },
    removerMaquinas: async (id) => {
        return await client.DELETE('/api/maquinas/' + id);
    },
    removerMantenimiento: async (id) => {
        return await client.DELETE('/api/mantenimientos/' + id);
    }
}

export default api;