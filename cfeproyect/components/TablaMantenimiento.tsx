import React, { useState, useEffect } from 'react';
import { Table, Text, ActionIcon } from '@mantine/core';
import axios from 'axios';
import api from '../services/api';
import { GoTrashcan } from 'react-icons/go'

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
  const rows2 = dataw.map((d) =>[d.attributes.rpe]);
  const rows = data.map((d) => (
    <tr key={d.id}>
      <td>{d.attributes.noInventario}</td>
      <td>{d.attributes.centroCoste}</td>
      <td>{d.attributes.noSerie}</td>
      <td>{rows2}</td>
      <td>{d.attributes.fecha}</td>
      <td>
             
                <ActionIcon radius="xs" size="xs" >
                     <GoTrashcan   onClick={(id) => deletePost(d.id)}/>
                    </ActionIcon>
                         
                     </td> 
    </tr>
  ));

  return (
    <Table  horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
      <thead>
        <tr>
          <th>No Inventario</th>
          <th>Centro de coste</th>
          <th>No.Serie</th>
          <th>RPE</th>
          <th>Fecha</th>

        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>

    </Table>
  )
}

export default TablaMantenimiento