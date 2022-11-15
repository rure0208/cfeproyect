import React, { useState, useEffect } from 'react';
import { Table, Text, ActionIcon,ScrollArea,TextInput,Group } from '@mantine/core';
import axios from 'axios';
import api from '../services/api';
import { GoTrashcan } from 'react-icons/go'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineSearchCircle} from 'react-icons/hi'
const TablaMantenimiento = () => {
  const [data, setData] = useState([]);
  const [dataw, setDataw] = useState([]);
  useEffect(() => {
    init();
  }, [])

  async function init() {
    const list = await api.listaDeMantenimiento();
    const list2 =await api.listaDePersonal();
    setDataw(list2.data);
    setData(list.data);
  }
  async function deletePost(id) {
    const baseURL = "http://localhost:1337/api/mantenimientos/";
    console.log(id);
    axios.delete(baseURL + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    location.reload();
  }
  

  const rows = data.map((d) => (
    <tr key={d.id}>
      <td>{d.attributes.noInventario}</td>
      <td>{d.attributes.centroCoste}</td>
      <td>{d.attributes.noSerie}</td>
      <td>{d.attributes.rpe}</td>
      <td>{d.attributes.fecha}</td>
      {/* <td>{d.attributes.proceso}</td> */}
      <td>
        
             
                <ActionIcon radius="xs" size="xs" >
                     <GoTrashcan   onClick={(id) => deletePost(d.id)}/>
                    </ActionIcon>
                         
                     </td> 
    </tr>
  ));

  return (    
    <ScrollArea style={{ height: 250 }} type="always" scrollbarSize={18}> 
        <Group>
            <TextInput
            style={{ 
            width: 200,
                marginTop: 4,
                marginLeft: 5,  
            }}
                placeholder="Buscar"
                mb="sm"
                icon={<BiSearch></BiSearch>}
            />
            <ActionIcon>
                <HiOutlineSearchCircle/>
            </ActionIcon>
        </Group>

    <Table  horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
      <thead>
        <tr>
          <th>No Inventario</th>
          <th>Centro de coste</th>
          <th>No.Serie</th>
          <th>RPE</th>         
          <th>Fecha</th>
          {/* <th>Estatus</th> */}
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

export default TablaMantenimiento