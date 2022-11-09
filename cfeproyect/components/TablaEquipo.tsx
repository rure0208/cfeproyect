import React, { useState, useEffect } from 'react';
import { Table, Text } from '@mantine/core';
import api from '../services/api';

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


        </tr>


      </tbody>

    </Table>
  )
}

export default TablaEquipo