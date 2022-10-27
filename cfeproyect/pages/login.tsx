import React from 'react';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { Button, TextInput, PasswordInput, Container, AppShell ,Card,Group,Text,Image,Center, Space} from '@mantine/core'

const Login = () => {
   
  const form = useForm({
    initialValues: { email: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'RPE no valido'),
    },

  });

  return (
   
    <form onSubmit={form.onSubmit(console.log)}>

    <AppShell 
    sx={(theme) => ({ backgroundColor: '#3F6D3F' })}>
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
          <Image
            style={{ 
              paddingTop: 30
            }}
            src="data:image/png;base64,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"
            height={70}
            width={240}
            
          />
          </Center>
        </Card.Section>
        <br></br>
        <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Iniciar Sesion</Text>
        <TextInput 
            style={{ 
              paddingLeft: 30,
              paddingRight: 20,
              width: 300
            }}
            mt="sm" 
            label="RPE" 
            placeholder="RPE" 
            {...form.getInputProps('email')}
        />
        <PasswordInput
            style={{ 
              paddingLeft: 30,
              paddingRight: 20,
              width: 300
            }}
            placeholder="Contraseña"
            label="Contraseña"
        />
        <Group position="center" mt="md" mb="xs">
        <br></br>
        <Button sx={(theme) => ({ backgroundColor: '#3F6D3F', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} type="submit" >
        <Link href='/inicio'>Iniciar Sesion</Link>        
        </Button>
        </Group>
        </Card>
      </Container>
    </AppShell>
  
  </form>
  )
}

export default Login