import { Card,Container } from '@mantine/core';
import React from 'react';
import AgregarPersonal from '../components/AgregarPersonal';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import TablaPersonal from '../components/TablaPersonal';


const Personal = () => {

  return (
  
    <Layout tituloPestaña='Personal'>
      <AppShel tituloPagina='Personal'>
        <div>
          <Container>
            <AgregarPersonal />
            <Card>
              <TablaPersonal />
            </Card>
          </Container>
        </div>
      </AppShel>
    </Layout>
  )
}

export default Personal