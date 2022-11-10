import React, { useState, useEffect } from 'react';
import { Table, Text,ActionIcon,ScrollArea,Group,TextInput} from '@mantine/core';
import api from '../services/api';
import axios from 'axios';
import {BiSearch} from 'react-icons/bi'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import { GoTrashcan } from 'react-icons/go'

const TablaEquipo = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    init();
  }, [])

  async function init() {
    const list = await api.listaDeMaquinas();
    setData(list.data);

    const list1 = await api.listaDePersonal();
    setData1(list1.data1);
  }

  async function deletePost(id){
    const baseURL="http://localhost:1337/api/maquinas/";  
      console.log(id);
      axios.delete(baseURL+id)  
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
      <td>{d.attributes.modelo}</td>
      <td>{d.attributes.centroCoste}</td>
      <td>{d.attributes.noSerie}</td>
      <td>{d.attributes.rpe}</td>
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
    <Table>
      <thead>
        <tr>
          <th>No Inventario</th>
          <th>Modelo</th>
          <th>Centro de coste</th>
          <th>No.Serie</th>
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