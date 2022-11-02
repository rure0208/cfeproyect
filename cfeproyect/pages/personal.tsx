import { useState, useEffect } from 'react'
import {Card,Table, Text} from '@mantine/core';
import React from 'react'
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import api from '../services/api';

const Personal = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    init();
  },[])
  
  async function init() {
    const list = await api.listaDePersonal();
    setData(list.data);
  }

  return (
    <Layout tituloPestaña='Personal'>
      <AppShel tituloPagina='Personal'>
      <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
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
                <Text key={d.id}>
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
     
            </tr>

          
          </tbody>
        </Table>
      </Card>
    </div>
      </AppShel>
    </Layout>
  )
}

export default Personal