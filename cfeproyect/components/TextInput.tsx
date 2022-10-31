import React from 'react'
import { BiUser } from 'react-icons/bi'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
const TextInputs = () => {
  const form = useForm({

    initialValues: { email: '' },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'RPE no valido'),
    },

  });
  return (

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
      {...form.getInputProps('email')}
    />
  )
}

export default TextInputs