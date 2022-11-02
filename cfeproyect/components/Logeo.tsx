import React, { useState } from 'react'
import { Container, Card, Text, Center, TextInput, PasswordInput, Group, Button } from '@mantine/core'
import Link from 'next/link'
import { BiUser, BiLock } from 'react-icons/bi'
import { CgLogIn } from 'react-icons/cg'


import Images from './Image';

import { useRouter } from 'next/router'
const Logeo = () => {

  return (
    <Container size={400} px={0} >
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
        />
        <Group position="center" mt="md" mb="xs">
          <br></br>
          <Button leftIcon={<CgLogIn />} sx={(theme) => ({ backgroundColor: '#3F6D3F', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} type="submit" >
            <Link href="/inicio">Iniciar Sesión</Link>
          </Button>
        </Group>
      </Card>
    </Container>
  )
}

export default Logeo