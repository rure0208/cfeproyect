import React, { useState } from 'react'
import {Card, Container, Space,Text,Divider,Group,ActionIcon} from '@mantine/core';
import AppShel from '../components/appshel';
import Layout from '../components/Layout'
import TablaEquipo from '../components/TablaEquipo';
import { BsPencilSquare } from 'react-icons/bs'
import AgregarMaquinas from '../components/AgregarMaquinas';
import { RiComputerFill } from 'react-icons/ri'

const Equipo = () => {

  const [reload, setReload] = useState(false);
  
  function cargarData(){
    setReload(!reload);  
  }
  return (
    <Layout tituloPestaña='Maquinas'>
      <AppShel tituloPagina='Maquinas'>
      <Container size={700} px={0} >
            <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white',
                marginTop: 20 
            }}>
              <Text size={19}><RiComputerFill/>Agregar Maquina</Text>
              <Divider color={"black"} size={2}/>
              
              <AgregarMaquinas recargar = {cargarData}/>
              <Space h="lg" />
              <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
                width: 630, 
                marginLeft: 20,
                marginBottom: 4,
              }}>  
                <TablaEquipo reload={reload} />
              </Card.Section>
              <Group position='right' style={{ 
                marginTop: 6,
                marginRight: 19, }}>
            <ActionIcon variant="light" size={35} color="dark">
                <BsPencilSquare/>
            </ActionIcon>
            </Group>
          </Card>
        </Container>
      </AppShel>
    </Layout>
  )
}

export default Equipo