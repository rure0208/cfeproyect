import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import Tabla from '../components/Tabla';

const Inicio = () => {  

  return (
    <Layout tituloPestaña='Inicio'>
    <AppShel tituloPagina='Inicio'>
      <div>
      <Tabla/>
     
      </div>
    </AppShel>
    </Layout>
  )
}

export default Inicio