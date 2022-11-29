import React from 'react'
import { TextInput, Grid, Space, ActionIcon } from '@mantine/core';
import { FcPlus } from 'react-icons/fc'
import {IoIosCheckmarkCircle, IoIosCloseCircle} from 'react-icons/io'
import { useState, useEffect } from 'react'
import api from '../services/api';
import Notification from './NotificationToast';

const AgregarPersonal = (props) => {
  const [rpe, setrpe] = useState('');
  const [puesto, setpuesto] = useState('');
  const [nombre, setnombre] = useState('');
  const [area, setarea] = useState('');
  const [id, setId] = useState();
  const [editando, setEditando] = useState(false);


  useEffect(() => {
    if (props.actualizando.attributes == undefined) return;
    setId(props.actualizando.id);
    setrpe(props.actualizando.attributes.rpe);
    setpuesto(props.actualizando.attributes.puesto);
    setnombre(props.actualizando.attributes.nombre);
    setarea(props.actualizando.attributes.area);
    setEditando(true);
  }, [props.actualizando])



  async function createPost() {

    if (!validacion()) {
      return;
    }

    const body = {
      data: {
        rpe: rpe,
        nombre: nombre,
        puesto: puesto,
        area: area
      }
    }
    try {
      await api.agregarPersonal(body);
      limpiarFormulario();
      props.recargar();
      Notification.success("Usuarios", "Usuario agregado correctamente");
    } catch (error) {
      Notification.error("Usuarios", "Usuario no creado");
      console.error(error);
    }
  }

  async function updatePost() {
    const body = {
      data: {
        rpe: rpe,
        nombre: nombre,
        puesto: puesto,
        area: area
      }
    }
    try {
      await api.actualizarPersonal(id,body);
      limpiarFormulario();
      props.limpiar();
      setEditando(false);
      props.recargar();
      Notification.success("Usuarios", "Usuario actualizado correctamente");
    } catch (error) {
      Notification.error("Usuarios", "Usuario no actualizado");
      console.error(error);
    }
  }

  function cancelUpdate(){
    limpiarFormulario();
    props.limpiar();
    setEditando(false);
  }

  function limpiarFormulario() {
    setrpe('');
    setpuesto('');
    setnombre('');
    setarea('');
  }

  function validacion() {
    return rpe != '' && puesto != '' && nombre != '' && area != '';
  }

  return (
    <Grid style={{
      marginTop: 10,
      marginLeft: 14,
    }}>
      <Grid.Col span={4}>
        <TextInput
          label="Ingresa RPE:"
          value={rpe} onChange={(event) => setrpe(event.currentTarget.value)}
          withAsterisk
        />
        <TextInput
          label="Nombre:"
          value={nombre} onChange={(event) => setnombre(event.currentTarget.value)}
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Puesto:"
          value={puesto} onChange={(event) => setpuesto(event.currentTarget.value)}
          withAsterisk
        />
        <TextInput
          label="Area:"
          value={area} onChange={(event) => setarea(event.currentTarget.value)}
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Space h="lg" />
        <Space h="lg" />
        <Space h="lg" />
        {editando ?
          (
            <div>
          <ActionIcon variant="light" size={22} onClick={updatePost} color="green"  style={{
            marginBottom: 5,
            width: 40
          }}>
            <IoIosCheckmarkCircle />
          </ActionIcon>
          <ActionIcon variant="light" size={22} onClick={cancelUpdate} color="red" style={{
            marginBottom: 5,
            width: 40
          }}>
            <IoIosCloseCircle />
          </ActionIcon>
          </div>
          )
          :
          (<ActionIcon variant="light" size={22} onClick={createPost} style={{
            marginBottom: 5,
            width: 40
          }}>
            <FcPlus />
          </ActionIcon>)
        }
        {/* <Button onClick={createPost}>agregar</Button> */}
      </Grid.Col>
    </Grid>
  )
}

export default AgregarPersonal
