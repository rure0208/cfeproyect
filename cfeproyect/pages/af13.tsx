import React from 'react'
import AppShel from '../components/appshel'
import { Container, Space,Card,Text,Group,TextInput,ActionIcon,Divider} from '@mantine/core';
import Layout from '../components/Layout'
import { VscSettingsGear,VscFilePdf,VscFile } from 'react-icons/vsc'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineSearchCircle} from 'react-icons/hi'
const AF13 = () => {
    
  return (
    <Layout tituloPestaña='Equipo de cómputo'>
    <AppShel tituloPagina='AF13'>
    <Group style={{ 
                marginTop: 4,
                marginLeft: '17%',  
            }}>
            <Text color={'black'}>No. Inventario:</Text>
            <TextInput
            style={{ 
                width: 180,
             
            }}
                // placeholder="Buscar"
                mb="sm"
                // icon={<BiSearch></BiSearch>}
            />
            <ActionIcon variant="light">
                <HiOutlineSearchCircle/>
            </ActionIcon>
        </Group>
      <Container size={700} px={0} >
      <Card style={{ 
                background: '#758E75',
                // height: 700,
                width: 700,
                color: 'white' 
            }}>
            <Text size={19}><VscFile/>  Plantilla de Excel</Text>
            <Divider color={"black"} size={2}/>
            <Space h="lg" />
            <Card.Section style={{ 
                background: '#D9D9D9',
                 height: 400,
                width: 600, 
                marginLeft: 40,
                marginBottom: 4
            }}>

            </Card.Section>
            <Group position='right' >
            <ActionIcon variant="light" size={35} color="dark">
                <VscFilePdf/>
            </ActionIcon>
            </Group>
            </Card>
        </Container>
    </AppShel>
    </Layout>
  )
}

export default AF13