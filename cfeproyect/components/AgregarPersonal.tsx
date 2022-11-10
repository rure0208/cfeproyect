import React from 'react'
import { TextInput, Container, Button, Grid, Space } from '@mantine/core';
import { useState } from 'react'
import axios from 'axios';

const AgregarPersonal = () => {
  const [rpe, setrpe] = useState('');
  const [puesto, setpuesto] = useState('');
  const [nombre, setnombre] = useState('');
  const [area, setarea] = useState('');
  const baseURL = "http://localhost:1337/api/personals";
  async function createPost() {
    await axios.post(baseURL, {
      data: {
        rpe: rpe,
        nombre: nombre,
        puesto: puesto,
        area: area
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
        <Button onClick={createPost}>agregar</Button>
      </Grid.Col>
    </Grid>
  )
}

export default AgregarPersonal
