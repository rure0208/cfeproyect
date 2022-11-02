import React from 'react'
import { useState, useEffect } from 'react'
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
        <ul>
          {
            data.map(d => {
              return (
                <li key={d.id}>
                  {d.attributes.modelo}
                </li>
            )
            })
          }

        </ul>
      </AppShel>
    </Layout>
  )
}

export default Equipo