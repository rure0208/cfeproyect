import client from './client';


const api = {
// consulta todas las maquinas de la bd
    listaDeMaquinas: async (pagina) => {

        return await client.GET('/api/maquinas?pagination[pageSize]=100&pagination[page]='+pagina);
    },
    listaDePersonal: async () => {
        return await client.GET('/api/personals?pagination[pageSize]=300');
    },
    listaDeMantenimiento: async () => {
        return await client.GET('/api/mantenimientos?pagination[pageSize]=300');
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
    },
    actualizarPersonal: async (id,body) => {
        return await client.UPDATE('/api/personals/' + id,body);
    },
    actualizarMaquinas: async (id,body) => {
        return await client.UPDATE('/api/maquinas/' + id,body);
    },
    actualizarMantenimiento: async (id,body) => {
        return await client.UPDATE('/api/mantenimientos/' + id,body);
    },
}

export default api;