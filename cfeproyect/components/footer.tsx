import React from 'react'
import {Footer, Text} from '@mantine/core';
const Footers = () => {
  return (
    <Footer height={40} p="sm" sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>
    <Text color={'black'}>Derechos Reservados @cfe.mx</Text>
   </Footer>
  )
}
export default Footers