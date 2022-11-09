import React from 'react'
import { Grid, TextInput, Space, Button, Container } from '@mantine/core'
import { FcPlus } from 'react-icons/fc'
import { useState } from 'react';
import axios from 'axios';
const AgregarMantenimiento = () => {

  const [noInventario, setNoInventario] = useState('');
  const [centroCoste, setCentroCoste] = useState('');
  const [noSerie, setNoSerie] = useState('');
  const [rpe, setRpe] = useState('');
  const [fecha, setFecha] = useState('');
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
    <Container>
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
            value={rpe} onChange={(event) => setRpe(event.currentTarget.value)}
          />
          <TextInput
            label="Fecha"
            value={fecha} onChange={(event) => setFecha(event.currentTarget.value)}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <Space h="lg" />
          <Space h="lg" />
          <Space h="lg" />
          <Button sx={(theme) => ({ backgroundColor: '#D9D9D9', '&:hover': { backgroundColor: theme.fn.darken('#D9D9D9', 0.05), }, })} size="md" compact leftIcon={<FcPlus></FcPlus>} onClick={createPost}></Button>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default AgregarMantenimiento