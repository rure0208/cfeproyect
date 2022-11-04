import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import TablaEquipo from '../components/TablaEquipo';


const Inicio = () => {

  return (
    <Layout tituloPestaña='Inicio'>
      <AppShel tituloPagina='Mantenimiento del día'>
        <div>

          <TablaEquipo />
        </div>
      </AppShel>
    </Layout>
  )
}

export default Inicio