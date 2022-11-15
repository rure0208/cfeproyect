import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import { Container, Space,Card,Text} from '@mantine/core';
import TablaMantenimiento from '../components/TablaMantenimiento';
import { VscSettingsGear } from 'react-icons/vsc'

const Inicio = () => {

  return (
    <Layout tituloPestaña='Inicio'>
      <AppShel tituloPagina='Mantenimiento del día'>
      <Container size={700} px={0} >

      <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white' 
            }}>
            <Text><VscSettingsGear/>   Mantenimiento del dia</Text>
            <hr/>

            <Space h="lg" />
            <Card.Section style={{ 
                background: '#D9D9D9',
                 height: 400,
                width: 600, 
                marginLeft: 40,
                marginBottom: 4
            }}>
              <TablaMantenimiento/>
            </Card.Section>
            </Card>
        </Container>
      </AppShel>
    </Layout>
  )
}

export default Inicio