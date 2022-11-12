import { Card,Container, createStyles, Space,Text } from '@mantine/core';
import React, { useState } from 'react';
import AgregarPersonal from '../components/AgregarPersonal';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
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
  
  function cargarData(){
    setReload(!reload);  
  }

  return (
    <Layout tituloPestaña='Personal'>
      <AppShel tituloPagina='Personal'>
          <Container size={700} px={0} >
            <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white' 
            }}>
            <Text><AiOutlineUserAdd/>   Agregar Personal</Text>
            <hr/>
            <AgregarPersonal recargar = {cargarData}/>
            
            <Space h="lg" />
            <Card.Section style={{ 
                background: '#D9D9D9',
                // height: 700,
                width: 600, 
                marginLeft: 40,
                marginBottom: 4
            }}>
              <TablaPersonal reload={reload} />
            </Card.Section>
            </Card>
          </Container>

      </AppShel>
    </Layout>
  )
}

export default Personal