import React from 'react';
import {  AppShell } from '@mantine/core'
import Layout from '../components/Layout';
import Logeo from '../components/Logeo';

const Login = () => {

  

  return (
    <Layout tituloPestaña='Iniciar sesión'>
        <AppShell
          sx={(theme) => ({ backgroundColor: '#3F6D3F' })}>
        <Logeo/>
        </AppShell>

      
    </Layout>
  )
}

export default Login