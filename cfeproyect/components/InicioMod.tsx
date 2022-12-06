import React, { useState, useEffect } from 'react';
import { Table, ActionIcon, ScrollArea, TextInput, Group, Divider } from '@mantine/core';
import api from '../services/api';
import Notification from './NotificationToast';
import { GoTrashcan } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { BsPencilSquare } from 'react-icons/bs'
const InicioMod = (props) => {
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
  const list = await api.listaDeMantenimiento();
  setUsuarios(list.data);
  setData(list.data);
}
const handleChange = e => {
  setBuscar(e.target.value);
  filtrar(e.target.value);
}
const filtrar = (terminoBusqueda) => {
  var resultadosBusqueda = data.filter((elemento) => {
    if (elemento.attributes.proceso.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ||elemento.attributes.fecha.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ) {
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}
  const rows = usuarios && usuarios.map((d) => (
    <tr key={d.id}>
      <td>{d.attributes.noInventario}</td>
      <td>{d.attributes.noSerie}</td>
      <td>{d.attributes.centroCoste}</td>
      <td>{d.attributes.rpe}</td>
      <td>{d.attributes.fecha}</td>
      <td>{d.attributes.proceso}</td>
      <td>
      </td>
    </tr>
  ));
      
    
      return (
        <ScrollArea style={{ height: 250 }} type="always" scrollbarSize={18}>
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
            
            {/* <ActionIcon variant="light" size={23} color="dark" style={{ 
                        marginLeft: 350,
                        marginBottom: 5,
                        width: 40}}>
              <HiOutlineSearchCircle />
            </ActionIcon> */}
          </Group>
          <Divider color={"black"} size={1}/>
          <Table horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
            <thead>
              <tr>
                <th>No Inventario</th>
                <th>No.Serie</th>
                <th>Centro Coste</th>
                <th>RPE</th>
                <th>Fecha</th>
                <th>Estatus</th>
                <th></th>
              </tr>
            </thead>
    
            <tbody>
              {rows}
            </tbody>
          </Table>
        </ScrollArea>
      )
}

export default InicioMod