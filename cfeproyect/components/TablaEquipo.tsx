import React, { useState, useEffect } from 'react';
import { Table, Text,ActionIcon } from '@mantine/core';
import api from '../services/api';
import axios from 'axios';
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
        {/* {rows} */}
        <tr>
          <td>
            {
              data.map(d => {
                return (
                  <Text key={d.id}>
                    {d.attributes.noInventario}
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
                    {d.attributes.modelo}
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
                    {d.attributes.centroCoste}
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
                    {d.attributes.noSerie}
                  </Text>
                )
              })
            }
          </td>
          <td>
            {

              data.map(r => {
                return (
                  <Text key={r.id}>
                    {r.attributes.rpe}
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
              )
            }
            )
            }
          </td>


        </tr>


      </tbody>

    </Table>
  )
}

export default TablaEquipo