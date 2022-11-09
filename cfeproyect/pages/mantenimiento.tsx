import React from 'react';
import AppShel from '../components/appshel';
import { Card, Container, Space,ScrollArea } from '@mantine/core';
import Layout from '../components/Layout'
import TablaMantenimiento from '../components/TablaMantenimiento';
import AgregarMantenimiento from '../components/AgregarMantenimiento';

const Mantenimiento = () => {
  return (
    <Layout tituloPestaña='Mantenimiento'>
      <AppShel tituloPagina='Mantenimiento'>
      <div>
          <Container>
            <AgregarMantenimiento/>
              <Space h="lg" />
              <Card>
              <Space h="lg" />
                <TablaMantenimiento/>
              </Card>
          </Container>
        </div>
      </AppShel>
    </Layout>
  )
}

export default Mantenimiento