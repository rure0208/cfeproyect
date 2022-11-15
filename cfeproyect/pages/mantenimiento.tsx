import React from 'react';
import AppShel from '../components/appshel';
import { Card, Container, Space,Text } from '@mantine/core';
import Layout from '../components/Layout'
import TablaMantenimiento from '../components/TablaMantenimiento';
import AgregarMantenimiento from '../components/AgregarMantenimiento';
import { FaTools } from 'react-icons/fa'
const Mantenimiento = () => {
  return (
    <Layout tituloPestaña='Mantenimiento'>
      <AppShel tituloPagina='Mantenimiento'>
      <Container size={700} px={0} >
      <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white' 
            }}>
      <Text><FaTools/>   Mantenimiento de Computo </Text>
      <hr/>
            <AgregarMantenimiento/>
              <Space h="lg" />
              <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
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

export default Mantenimiento