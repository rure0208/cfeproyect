import React from 'react'
import { TextInput,Container ,Button,Grid, Group, Space} from '@mantine/core';
import { useState, useEffect } from 'react'
import api from '../services/api';

const AgregarPersonal = () => {
  const [rpe, setrpe] = useState('');
  const [puesto, setpuesto] = useState('');
  const [nombre, setnombre] = useState('');
  const [area, setarea] = useState('');

async function createPost() {
  location.reload();

  const body = {
    data:{ 
        rpe:rpe,
        nombre:nombre,
        puesto:puesto,
        area:area
      }
    }

  await api.agregarPersonal(body);
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
