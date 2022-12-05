import React, { useState, useEffect } from 'react';
import { Table, Text, ActionIcon, ScrollArea, Group, TextInput, Divider } from '@mantine/core';
import api from '../services/api';
import Notification from './NotificationToast';
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { GoTrashcan } from 'react-icons/go'
import axios from 'axios';
import { BsPencilSquare } from 'react-icons/bs'

const TablaEquipo = (props) => {
  const [data, setData] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [data1, setData1] = useState([]);
  const [usuarios1, setUsuarios1] = useState([]);
  const [arrayUsuarios, setarrayUsuarios] = useState([]);
  const [arrayData, setarrayData] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    init();
}, [])

useEffect(() => {
    init();
}, [props.reload])


  async function init() {

    const list = await api.listaDeMaquinas(1);
    const list2 = await api.listaDeMaquinas(2);
    setarrayUsuarios(list.data.concat(list2.data));
    setarrayData(list.data.concat(list2.data));

 
  }
  const handleChange = e => {
    setBuscar(e.target.value);
    filtrar(e.target.value);
}

  const filtrar = (terminoBusqueda) => {
    var resultado = arrayData.filter((elemento) => {
      if (elemento.attributes.noInventario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.attributes.rpe.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setarrayUsuarios(resultado);
  }

  async function deletePost(id: String) {
    try {
      await api.removerMaquinas(id);
      Notification.success("Máquinas", "Se ha eliminado el usuario correctamente");
      init();
    } catch (error) {
      Notification.error("Máquinas", "No se ha podido eliminar el usuario");
      console.error(error);
    }

  }
 
  function updatePost(post: Object){
    props.actualizar(post);
}

  const rows = arrayUsuarios && arrayUsuarios.map((d) => (
    
    <tr key={d.id}>
          
      <td>{d.attributes.noInventario}</td>
      <td>{d.attributes.modelo}</td>
      <td>{d.attributes.centroCoste}</td>
      <td>{d.attributes.noSerie}</td>
      <td>{d.attributes.rpe}</td>
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
  )) ;

  return (
    <ScrollArea style={{ height: 400 }} type="always" scrollbarSize={18}>
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

        <ActionIcon variant="light" size={23} color="dark" style={{ 
                    marginLeft: 350,
                    marginBottom: 5,
                    width: 40}}>
          <HiOutlineSearchCircle />
        </ActionIcon>
      </Group>
      <Divider color={"black"} size={1}/>
      <Table>
        <thead>
          <tr>
            <th>No Inventario</th>
            <th>Modelo</th>
            <th>Centro Coste</th>
            <th>No. Serie</th>
            <th>RPE</th>

          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>

      </Table>
    </ScrollArea>
  )
}

export default TablaEquipo