import React from 'react'
import { Grid, TextInput, Space, Card,Button, Group,Select,ActionIcon } from '@mantine/core'
import { FcPlus } from 'react-icons/fc'

import { useState,useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
import api from '../services/api';
import Notification from './NotificationToast';


const AgregarMantenimiento = (props) => {
  const [dataw, setDataw] = useState([]);
  const [noInventario, setNoInventario] = useState('');
  const [centroCoste, setCentroCoste] = useState('');
  const [proceso, setProceso] = useState('');
  const [noSerie, setNoSerie] = useState('');
  const [rpe, setRpe] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [usuarios, setUsuarios] = useState([]);



useEffect(() => {
    init();
}, [props.reload])

  async function init() {
    const list = await api.listaDeMaquinas();
    setDataw(list.data);
  }


  async function createPost() {

    if(!validacion()){
      return;
    }
    const body = {
      data: {
              noInventario: noInventario,
               centroCoste: centroCoste,
               noSerie: noSerie,
               rpe: rpe,
               fecha:fecha,
               proceso:proceso,
             }
      }
    try {
      await api.agregarMantenimiento(body);
      limpiarFormulario();
      props.recargar();
      Notification.success("Usuarios","Usuario agregado correctamente");
    } catch (error) {
      Notification.error("Usuarios","Usuario no creado");
      console.error(error);
    }
  }
  
function limpiarFormulario(){
  setNoInventario('');
  setCentroCoste('');
  setNoSerie('');
  setRpe('');
  setFecha(new Date());

}

function validacion() {
  return noInventario != '' && centroCoste != '' && noSerie != '' && rpe != '' ;
}

  var task_noInv = dataw.map((d)=>{
     return(d.attributes.noInventario
      )
      
  })
 
  return (
      <Grid style={{ 
        marginTop: 10 ,
        marginLeft: 14
        }}>
        <Grid.Col span={4}>

        <Select
            label="No.Inventario"
            withAsterisk
            searchable clearable
            data={task_noInv}
            value={noInventario} onChange={setNoInventario}
          />
         {
         /* <TextInput
              label="No. Inventario:"
              withAsterisk
              value={noInventario} onChange={(event) => setNoInventario(event.currentTarget.value)}
            /> */}
            <TextInput
             disabled
            label="No. Serie:"
            withAsterisk
            value={noSerie} onChange={(event) => setNoSerie(event.currentTarget.value)}
          />
            
           <Select
            label="Proceso"
            withAsterisk
            data={["proceso","terminado"]}
            value={proceso} onChange={setProceso}
          />
          </Grid.Col>
        <Grid.Col span={4}>
            <TextInput
            label="Centro Coste:"
            disabled
            withAsterisk
            value={centroCoste} onChange={(event) => setCentroCoste(event.currentTarget.value)}
            />
            <TextInput
            disabled
            label="RPE"
            withAsterisk
            value={rpe} onChange={(event) => setRpe(event.currentTarget.value)}
            />

            {/* <TextInput
            label="Fecha:"
            // disabled
            withAsterisk
            /> */}
            <DatePicker
            placeholder="Seleccione una fecha"
            label="Fecha"
            inputFormat="DD/MM/YYYY"
            value={fecha}
                
          />
   </Grid.Col>

        <Grid.Col span={4}>
          <Space h="lg" />
          <Space h="lg" />
          <Space h="lg" />
          <ActionIcon variant="light" size={22} color="dark" onClick={createPost} style={{ 
                    marginBottom: 5,
                    width: 40}}>
                <FcPlus/>
          </ActionIcon>
          </Grid.Col>
      </Grid>
  
  )
}

export default AgregarMantenimiento
