import React from 'react';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

const Home = () => {
  const form = useForm({
    initialValues: { email: '' },

    // functions will be used to validate values at corresponding key
    validate: {
     
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),

    },

  });
  return (
   
    <form onSubmit={form.onSubmit(console.log)}>
    
    <TextInput mt="sm" label="Correo" placeholder="Email" {...form.getInputProps('email')} />
   
    <Button type="submit" mt="sm">
      Submit
    </Button>
  </form>
  )
}

export default Home