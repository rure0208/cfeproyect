import React from 'react'
import { Grid, TextInput, Space, Button, Container,Select ,NativeSelect} from '@mantine/core'
import { FcPlus } from 'react-icons/fc'
import { useState,useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
import api from '../services/api';

const AgregarMantenimiento = () => {
  const [dataw, setDataw] = useState([]);
  useEffect(() => {
      init();
  }, [])

  async function init() {
      const list = await api.listaDePersonal();
      setDataw(list.data);
      
  }

  const [noInventario, setNoInventario] = useState('');
  const [centroCoste, setCentroCoste] = useState('');
  const [noSerie, setNoSerie] = useState('');
  const [rpe, setRpe] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const baseURL = "http://localhost:1337/api/mantenimientos";

  async function createPost() {
    
    await axios.post(baseURL, {
      data: {
        noInventario: noInventario,
        centroCoste: centroCoste,
        noSerie: noSerie,
        rpe: rpe,
        fecha: fecha
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    location.reload();
  }


  return (
      <Grid>
        <Grid.Col span={4}>
          <TextInput
            label="No. Inventario"
            withAsterisk
            value={noInventario} onChange={(event) => setNoInventario(event.currentTarget.value)}
          />

          <TextInput
            label="No. Serie"
            withAsterisk
            value={noSerie} onChange={(event) => setNoSerie(event.currentTarget.value)}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            label="Centro de Coste"
            withAsterisk
            value={centroCoste} onChange={(event) => setCentroCoste(event.currentTarget.value)}
          />
             <TextInput
            label="RPE"
            withAsterisk
            value={rpe} onChange={(event) => setRpe(event.currentTarget.value)}
          />


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
          <Button sx={(theme) => ({ backgroundColor: '#D9D9D9', '&:hover': { backgroundColor: theme.fn.darken('#D9D9D9', 0.05), }, })} size="md" compact leftIcon={<FcPlus></FcPlus>} onClick={createPost}></Button>
        </Grid.Col>
      </Grid>
  
  )
}

export default AgregarMantenimiento
