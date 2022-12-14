import React from 'react'
import api from '../services/api';
import { useState, useEffect } from 'react'
import { Table,  Group, ScrollArea, TextInput, ActionIcon,Divider} from '@mantine/core';
import { GoTrashcan } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import Notification from './NotificationToast';
import { BsPencilSquare } from 'react-icons/bs'

const TablaPersonal = (props) => {
    const [data, setData] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [buscar, setBuscar] = useState("");

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        init();
    }, [props.reload])


    async function init() {
        const list = await api.listaDePersonal();
        setData(list.data);
        setUsuarios(list.data);

    }

    const handleChange = e => {
        setBuscar(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = data.filter((elemento) => {
            if (elemento.attributes.rpe.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.attributes.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }

    async function deletePost(id: string) {
        try {
            await api.removerPersonal(id);
            Notification.success("Personal", "Se ha eliminado el usuario correctamente");
            init();
        } catch (error) {
            Notification.error("Personal", "No se ha podido eliminar el usuario");
            console.error(error);
        }
    }

    function updatePost(post: Object){
        props.actualizar(post);
    }

    const rows = usuarios && usuarios.map((d) => (
        <tr key={d.id}>
            <td>{d.attributes.rpe}</td>
            <td>{d.attributes.nombre}</td>
            <td>{d.attributes.puesto}</td>
            <td>{d.attributes.area}</td>
            <td>
                <Group>
                <ActionIcon radius="xs" size="xs">
                    <BsPencilSquare onClick={(id) => updatePost(d)}/>
                </ActionIcon>
                    <ActionIcon radius="xs" size="xs" >
                        <GoTrashcan onClick={(id) => deletePost(d.id)} />
                    </ActionIcon>
                </Group>

            </td>
        </tr>
    ));

    return (
        <ScrollArea style={{ height: 300 }} type="always" scrollbarSize={18}>
            <Group style={{ 
                    height: 40}}>
                <TextInput
                    style={{
                        width: 200,
                        marginTop: 4,
                        marginLeft: 5,
                    }}
                    placeholder="Buscar"
                    value={buscar}
                    onChange={handleChange}
                    mb="sm"
                    icon={<BiSearch></BiSearch>}
                />
            </Group>
            <Divider color={"black"} size={1}/>
            <Table horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
                <thead>
                    <tr>
                        <th>RPE</th>
                        <th>Nombre</th>
                        <th>Puesto</th>
                        <th>Area</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </Table>
        </ScrollArea>
    )
}
export default TablaPersonal
