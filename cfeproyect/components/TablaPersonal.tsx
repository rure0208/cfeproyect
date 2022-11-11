import React from 'react'
import api from '../services/api';
import { useState, useEffect } from 'react'
import { Table, Text,Grid,Group,ScrollArea,TextInput,ActionIcon} from '@mantine/core';
import { GoTrashcan } from 'react-icons/go'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import axios from 'axios';

const TablaPersonal = () => {
    const [data, setData] = useState([]);

    const baseURL="http://localhost:1337/api/personals/";  
    useEffect(() => {
        init();
    }, [])

    async function init() {
        const list = await api.listaDePersonal();
        setData(list.data);      
    }
   
    async function deletePost(id){
 
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
          <td>{d.attributes.rpe}</td>
          <td>{d.attributes.nombre}</td>
          <td>{d.attributes.puesto}</td>
          <td>{d.attributes.area}</td>
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
