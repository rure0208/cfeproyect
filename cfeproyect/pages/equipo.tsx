import React from 'react'
import {Card, Space} from '@mantine/core';
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import TablaEquipo from '../components/TablaEquipo';
import AgregarMaquinas from '../components/AgregarMaquinas';


const Equipo = () => {


  return (
    <Layout tituloPestaña='Maquinas'>
      <AppShel tituloPagina='Maquinas'>
      <div>
      <Card shadow="sm" p="lg" radius="md" withBorder sx={(theme) => ({ backgroundColor: '#758E75' })}>
        <AgregarMaquinas/>
        <Space h="lg" />
        <Space h="lg" />
        <TablaEquipo />
      </Card>
      </div>
      </AppShel>
    </Layout>
  )
}

export default Equipo