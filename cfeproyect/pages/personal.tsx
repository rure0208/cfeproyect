import { Card } from '@mantine/core';
import React from 'react'
import AppShel from '../components/appshel'
import Layout from '../components/Layout'
import TablaPersonal from '../components/TablaPersonal';


const Personal = () => {

  return (
    <Layout tituloPestaña='Personal'>
      <AppShel tituloPagina='Personal'>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <TablaPersonal />
          </Card>
        </div>
      </AppShel>
    </Layout>
  )
}

export default Personal