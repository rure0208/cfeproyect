import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import { Container, Space,Card,Text,Divider} from '@mantine/core';
import TablaMantenimiento from '../components/TablaMantenimiento';
import { VscSettingsGear } from 'react-icons/vsc'
import InicioMod from '../components/InicioMod';

const Inicio = () => {

  return (
    <Layout tituloPestaña='Inicio'>
      <AppShel tituloPagina='Mantenimiento del día'>
      <Container size={700} px={0} >

      <Card style={{ 
                background: '#758E75',
                height: 500,
                width: 700,
                color: 'white', 
                marginTop: 20
            }}>
            <Text size={19}><VscSettingsGear/>   Mantenimiento del dia</Text>
            <Divider color={"black"} size={2}/>
            <Space h="lg" />
            <Card.Section style={{ 
                // background: '#D9D9D9',
                background: '#FFFFFF',
                 height: 350,
                width: 600, 
                marginLeft: 40,
                marginBottom: 4
            }}>
              {/* <TablaMantenimiento/> */}
              <InicioMod></InicioMod>
            </Card.Section>
            </Card>
        </Container>
      </AppShel>
    </Layout>
  )
}

export default Inicio