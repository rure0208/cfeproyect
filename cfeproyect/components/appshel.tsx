import React from 'react'
import { AppShell, Text } from '@mantine/core';
import Footers from './footer';
import Headers from './headers';
import NavBar from './navbar';

const AppShel = ({ children, tituloPagina }) => {

  return (
    <AppShell
      styles={{
        main: {
          background: '#FFFFFF',
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <NavBar/>
      }
      footer={
        <Footers />
      }
      header={
        <Headers />
      }
    >
      <Text align="center" color='#A1C298' size="xl" transform="uppercase">{tituloPagina}</Text>
      {children}
    </AppShell>
  )
}

export default AppShel



