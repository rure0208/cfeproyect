import React, { useEffect, useRef, useState } from 'react'
import { Container, Card, Text, Center, TextInput, PasswordInput, Group, Button } from '@mantine/core'
import Link from 'next/link'
import { BiUser, BiLock } from 'react-icons/bi'
import { CgLogIn } from 'react-icons/cg'
import { useForm } from '@mantine/form';

import Images from './Image';

import { useRouter } from 'next/router'
import axios from 'axios'
import api from '../services/api'
const Logeo = () => {
  const userRef=useRef("");
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(e) {
    e.preventDefault()
    try {
        const res = await axios.post(`http://localhost:1337/auth/local`, {
            identifier: this.user,
            password: password
        });

    } catch(error) {
        console.log(error);
  
    }
}


  return (
    <Container size={400} px={0} >
      <form onSubmit={login}>
      <Card shadow="sm" p="lg" radius="md" withBorder
        style={{
          width: 350,
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 400,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        }}>
        <Card.Section>
          <Center>
            {/*eslint-disable-next-line jsx-a11y/alt-text*/}
            <Images />
          </Center>
        </Card.Section>
        <br></br>
        <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Iniciar Sesión</Text>
        <TextInput
          style={{
            paddingLeft: 30,
            paddingRight: 20,
            width: 300
          }}
          mt="sm"
          label="Usuario"
          /*placeholder="RPE"*/
          icon={<BiUser></BiUser>}
          value={user} onChange={(event) => setUser(event.currentTarget.value)}
        />
        <PasswordInput
          style={{
            paddingLeft: 30,
            paddingRight: 20,
            width: 300
          }}
          /** placeholder="Contraseña"*/
          label="Contraseña"
          icon={<BiLock></BiLock>}
          value={password} onChange={(event) => setPassword(event.currentTarget.value)}

        />
        <Group position="center" mt="md" mb="xs">
          <br></br>
          <Button leftIcon={<CgLogIn />} sx={(theme) => ({ backgroundColor: '#3F6D3F', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} type="submit" >
            <Link href="/inicio">Iniciar Sesión</Link> 
          </Button>
        </Group>
      </Card>
      </form>
    </Container>
  )
}


export default Logeo