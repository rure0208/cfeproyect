import React from 'react'
import { TextInput,Grid, Space,ActionIcon} from '@mantine/core';
import { FcPlus } from 'react-icons/fc'
import { useState} from 'react'
import api from '../services/api';
import Notification from './NotificationToast';

const AgregarPersonal = (props) => {
  const [rpe, setrpe] = useState('');
  const [puesto, setpuesto] = useState('');
  const [nombre, setnombre] = useState('');
  const [area, setarea] = useState('');

async function createPost() {

  if(!validacion()){
    return;
  }

  const body = {
    data:{ 
        rpe:rpe,
        nombre:nombre,
        puesto:puesto,
        area:area
      }
    }
  try {
    await api.agregarPersonal(body);
    limpiarFormulario();
    props.recargar();
    Notification.success("Usuarios","Usuario agregado correctamente");
  } catch (error) {
    Notification.error("Usuarios","Usuario no creado");
    console.error(error);
  }
}

function limpiarFormulario(){
  setrpe('');
  setpuesto('');
  setnombre('');
  setarea('');
}

function validacion() {
  return rpe != '' && puesto != '' && nombre != '' && area != '' ;
}

  return (
    <Grid>
      <Grid.Col span={4}>
        <TextInput
          label="RPE"
          value={rpe} onChange={(event) => setrpe(event.currentTarget.value)}
          withAsterisk
        />
        <TextInput
          label="Puesto"
          value={puesto} onChange={(event) => setpuesto(event.currentTarget.value)}
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Nombre"
          value={nombre} onChange={(event) => setnombre(event.currentTarget.value)}
          withAsterisk
        />
        <TextInput
          label="Area"
          value={area} onChange={(event) => setarea(event.currentTarget.value)}
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Space h="lg" />
        <Space h="lg" />
        <Space h="lg" />
        <ActionIcon variant="light" size={22} color="dark" onClick={createPost}>
                <FcPlus/>
        </ActionIcon>
        {/* <Button onClick={createPost}>agregar</Button> */}
      </Grid.Col>
    </Grid>
  )
}

export default AgregarPersonal
