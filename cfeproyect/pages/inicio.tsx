import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import { Container, Space} from '@mantine/core';
import TablaMantenimiento from '../components/TablaMantenimiento';

const Inicio = () => {

  return (
    <Layout tituloPestaña='Inicio'>
      <AppShel tituloPagina='Mantenimiento del día'>
      <Container size={900} px={0} >
      <hr/>
      <Space h="lg" />
      <Space h="lg" />
      <Space h="lg" />
        <div>
          <TablaMantenimiento />
        </div>
      
        </Container>
      </AppShel>
    </Layout>
  )
}

export default Inicio