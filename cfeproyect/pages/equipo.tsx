import React from 'react'
import { useState, useEffect } from 'react'
import {Card,Table, Text} from '@mantine/core';
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import api from '../services/api';


const Equipo = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    init();
  },[])
  
  async function init() {
    const list = await api.listaDeMaquinas();
    setData(list.data);
  }

  return (
    <Layout tituloPestaña='Equipo de cómputo'>
      <AppShel tituloPagina='Equipo de cómputo'>
        <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
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
            data.map(d => {
              return (
                <Text key={d.id}>
                  {d.attributes.personal}
                </Text>
            )
            })
          }
        </td>
            </tr>

          
          </tbody>
        </Table>
      </Card>
    </div>
      </AppShel>
    </Layout>
  )
}

export default Equipo