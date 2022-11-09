import React from 'react'
import {Card, Container, Space} from '@mantine/core';
import AppShel from '../components/appshel';
import Layout from '../components/Layout'
import TablaEquipo from '../components/TablaEquipo';
import AgregarMaquinas from '../components/AgregarMaquinas';


const Equipo = () => {


  return (
    <Layout tituloPestaña='Maquinas'>
      <AppShel tituloPagina='Maquinas'>
      <div>
        <Container>
          <AgregarMaquinas/>
          <Space h="lg" />
          <Card>  
          <Space h="lg" />
            <TablaEquipo />
          </Card>
        </Container>
      </div>
      </AppShel>
    </Layout>
  )
}

export default Equipo