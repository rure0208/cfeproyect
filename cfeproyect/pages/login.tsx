import React from 'react';
import { useForm } from '@mantine/form';
import { PasswordInput, TextInput, Button } from '@mantine/core';


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
    
    <TextInput mt="sm" label="RPE" placeholder="RPE" {...form.getInputProps('email')} />
    <PasswordInput
      placeholder="Contraseña"
      label="Contraseña"
      withAsterisk
    />
    <Button type="submit" mt="sm">
      Submit
    </Button>
  </form>
  )
}

export default Login