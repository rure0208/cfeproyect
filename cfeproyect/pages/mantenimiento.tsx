import React from 'react'
import AppShel from '../components/appshel'
import { Card, Space } from '@mantine/core';
import Layout from '../components/Layout'
import TablaMantenimiento from '../components/TablaMantenimiento';
import AgregarMantenimiento from '../components/AgregarMantenimiento';

const Mantenimiento = () => {
  return (
    <Layout tituloPestaña='Mantenimiento'>
      <AppShel tituloPagina='Mantenimiento'>
      <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <AgregarMantenimiento/>
            <Space h="lg" />
            <Space h="lg" />
            <TablaMantenimiento/>
          </Card>
        </div>
      </AppShel>
    </Layout>
  )
}

export default Mantenimiento