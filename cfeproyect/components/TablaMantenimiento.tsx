import React, { useState, useEffect } from 'react';
import { Table, Text, Button } from '@mantine/core';
import axios from 'axios';
import api from '../services/api';

const TablaMantenimiento = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    init();
  }, [])

  async function init() {
    const list = await api.listaDeMantenimiento();
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

  return (
    <Table>
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
              data.map(d => {
                return (
                  <Text key={d.id}>
                    {d.attributes.rpe}
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
                    {r.attributes.fecha}
                  </Text>
                )
              })
            }
          </td>
          <td>
            {data.map(d => {
              return (
                <Text key={d.id}>
                  <Button size="xs" onClick={(id) => deletePost(d.id)}>Delete</Button>
                </Text>
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

export default TablaMantenimiento