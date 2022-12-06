import { Card,Container, createStyles, Space,Text, Divider,Group, ActionIcon } from '@mantine/core';
import React, { useState } from 'react';
import AgregarPersonal from '../components/AgregarPersonal';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import { BsPencilSquare } from 'react-icons/bs'
import TablaPersonal from '../components/TablaPersonal';
import { AiOutlineUserAdd } from 'react-icons/ai'

// const useStyles = createStyles(() => ({
//   container: {
//       margin: 0,
//       padding: 0,
//       width: 1033,
//       height: 800,

//       backgroundColor: '#758E75'
//   },

// }));

const Personal = () => {
  // const { classes } = useStyles();
  const [reload, setReload] = useState(false);
  const [update,setUpdate] = useState({});

  function cargarData(){
    setReload(!reload);  
  }

  function actualizarData(personal : Object) {
    setUpdate(personal);
  }

  function clean(){
    setUpdate({});
  }

  return (
    <Layout tituloPestaña='Personal'>
      <AppShel tituloPagina='Personal'>
          <Container size={700} px={0} >
            <Card style={{ 
                background: '#758E75',
                height: 610,
                width: 700,
                color: 'white',
                marginTop: 20
            }}>
            <Text size={19}><AiOutlineUserAdd/>Agregar Personal</Text>
            <Divider color={"black"} size={2}/>
            <AgregarPersonal recargar = {cargarData} actualizando = {update} limpiar = {clean} />
  
            <Space h="lg" />
            <Space h="lg" />
            <Space h="lg" />
            <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
                width: 630, 
                marginLeft: 20,
                marginBottom: 4
            }}>
            <TablaPersonal reload={reload}  actualizar = {actualizarData}/>
            </Card.Section>
            <Space/>
            <Group position='right' style={{ 
                marginTop: 6,
                marginRight: 20,
               
            }} >
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

export default Personal