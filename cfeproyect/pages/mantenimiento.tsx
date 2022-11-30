import React, { useState } from 'react';
import AppShel from '../components/appshel';
import { Card, Container, Space,Text, Divider,Group,ActionIcon } from '@mantine/core';
import Layout from '../components/Layout'
import { BsPencilSquare} from 'react-icons/bs'
import TablaMantenimiento from '../components/TablaMantenimiento';

import AgregarMantenimiento from '../components/AgregarMantenimiento';
import { FaTools } from 'react-icons/fa'
const Mantenimiento = () => {
  const [reload, setReload] = useState(false);
  const [update,setUpdate] = useState({});
  function cargarData(){
    setReload(!reload);  
  }
  
  function actualizarData(mantenimiento : Object) {
    setUpdate(mantenimiento);
  }

  function clean(){
    setUpdate({});
  }
  return (
    <Layout tituloPestaña='Mantenimiento'>
      <AppShel tituloPagina='Mantenimiento'>
      <Container size={700} px={0} >
      <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white',
                marginTop: 20 
            }}>
      <Text size={19}><FaTools/>   Mantenimiento de Computo </Text>
      <Divider color={"black"} size={2}/>
            <AgregarMantenimiento recargar = {cargarData} actualizando = {update} limpiar = {clean} />
              <Space h="lg" />
              <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
                width: 630, 
                marginLeft: 20,
                marginBottom: 4
              }}>   
                <TablaMantenimiento  reload={reload}  actualizar = {actualizarData}/>
                </Card.Section>
                <Group position='right' style={{ 
                marginTop: 6,
                marginRight: 20,}} >
                {/* <ActionIcon variant="light" size={35} color="dark">
                    <BsPencilSquare/>
                </ActionIcon> */}
                </Group>
              </Card>
          </Container>
        
      </AppShel>
    </Layout>
  )
}

export default Mantenimiento