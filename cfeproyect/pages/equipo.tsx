import React from 'react'
import {Card} from '@mantine/core';
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import TablaEquipo from '../components/TablaEquipo';


const Equipo = () => {


  return (
    <Layout tituloPestaña='Equipo de cómputo'>
      <AppShel tituloPagina='Equipo de cómputo'>
        <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <TablaEquipo />
      </Card>
    </div>
      </AppShel>
    </Layout>
  )
}

export default Equipo