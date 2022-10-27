import React from 'react'
import { Container, Card, Text, Center} from '@mantine/core'
import { useForm } from '@mantine/form';
import Password from './Password';
import Groups from './Groups';
import Images from './Image';
import TextInputs from './TextInput';
const Logeo = () => {
    const form = useForm({

        initialValues: { email: '' },
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'RPE no valido'),
        },
    
      });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
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
          <Images/>   
        </Center>
      </Card.Section>
      <br></br>
      <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Iniciar Sesión</Text>
      <TextInputs/>
      <Password/>
      <Groups/> 
    </Card>
  </Container>
  </form>
  )
}

export default Logeo