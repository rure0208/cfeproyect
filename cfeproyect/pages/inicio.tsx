import React from 'react';
import AppShel from '../components/appshel';
import Layout from '../components/Layout';
import Tabla from '../components/Tabla';

const Inicio = (resultado) => {  

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

export async function getStaticProps(){
  const url='http://localhost:1337/api/maquinas'
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()
  console.log(resultado.data)
  {
  return{
    props:{
      resultado
    }
  }
  }
}
export default Inicio