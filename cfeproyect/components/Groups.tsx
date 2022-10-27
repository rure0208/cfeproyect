import React from 'react'
import { CgLogIn } from 'react-icons/cg'
import Link from 'next/link';
import { Button, Group} from '@mantine/core'
const Groups = () => {
  return (
    <Group position="center" mt="md" mb="xs">
        <br></br>
        <Button leftIcon={<CgLogIn />} sx={(theme) => ({ backgroundColor: '#3F6D3F', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} type="submit" >
          <Link href='/inicio'>Iniciar Sesión</Link>
        </Button>
      </Group>
  )
}

export default Groups