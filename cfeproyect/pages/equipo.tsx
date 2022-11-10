import React from 'react'
import {Card, Container, Space,Text} from '@mantine/core';
import AppShel from '../components/appshel';
import Layout from '../components/Layout'
import TablaEquipo from '../components/TablaEquipo';
import AgregarMaquinas from '../components/AgregarMaquinas';
import { RiComputerFill } from 'react-icons/ri'

const Equipo = () => {


  return (
    <Layout tituloPestaña='Maquinas'>
      <AppShel tituloPagina='Maquinas'>
      <Container size={700} px={0} >
            <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white' 
            }}>
              <Text><RiComputerFill/>   Agregar Maquinas</Text>
              <hr/>
              <AgregarMaquinas/>
              <Space h="lg" />
              <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
                width: 600, 
                marginLeft: 40,
                marginBottom: 4
              }}>  
              <Space h="lg" />
                <TablaEquipo />
              </Card.Section>
          </Card>
        </Container>
      </AppShel>
    </Layout>
  )
}

export default Equipo