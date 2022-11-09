import React from 'react'
import api from '../services/api';
import { useState, useEffect } from 'react'
import { Table, Text,Button,ScrollArea,TextInput,ActionIcon} from '@mantine/core';
import { GoTrashcan } from 'react-icons/go'
import {BiSearch} from 'react-icons/bi'
import axios from 'axios';

const TablaPersonal = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        init();
    }, [])

    async function init() {
        const list = await api.listaDePersonal();
        setData(list.data);
    }

    async function deletePost(id){
        const baseURL="http://localhost:1337/api/personals/";  
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
      
    return (
        <ScrollArea>
            <TextInput
            style={{ 
              width: 200,
              marginTop: 4,
              marginLeft: 5
              
          }}
            placeholder="Buscar"
            mb="sm"
            icon={<BiSearch></BiSearch>}
        />
        <Table>
            <thead>
                <tr>
                    <th>RPE</th>
                    <th>Nombre</th>
                    <th>Puesto</th>
                    <th>Area</th>
                </tr>
            </thead>

            <tbody>
                {/* {rows} */}
                <tr>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id} >
                                        {d.attributes.rpe}
                                    </Text>
                                )
                            })
                        }
                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.nombre}
                                    </Text>
                                )
                            })
                        }
                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.puesto}
                                    </Text>
                                )
                            })
                        }
                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.area}
                                    </Text>
                                )
                            })
                        }
                    </td>
                         <td>
                    {data.map(d => {
                                return (
                                        <ActionIcon key={d.id}>
                                            <GoTrashcan onClick={(id) => deletePost(d.id)}/>
                                        </ActionIcon>
                                //    <Text key={d.id}>
                                //      <Button leftIcon={<GoTrashcan/>} size="xs" onClick={(id) => deletePost(d.id)}></Button> 
                                //    </Text>
                                    )}
                            )
                        }        
                         </td>
                </tr>
            </tbody>
        </Table>
        </ScrollArea>
    )
}
export default TablaPersonal
