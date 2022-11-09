import React from 'react'
import { TextInput,Container ,Button,Grid, Group, Space} from '@mantine/core';
import { useState, useEffect } from 'react'
import axios from 'axios';

const AgregarPersonal = () => {
  const [rpe, setrpe] = useState('');
  const [puesto, setpuesto] = useState('');
  const [nombre, setnombre] = useState('');
  const [area, setarea] = useState('');
  const baseURL="http://localhost:1337/api/personals";   
async function createPost() {
  await axios.post(baseURL,{data:{ 
    rpe:rpe,
  nombre:nombre,
  puesto:puesto,
  area:area
}})   
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
      label="RPE"
      withAsterisk
      value={rpe} onChange={(event) => setrpe(event.currentTarget.value)}
    />
     <TextInput
    label="Puesto"
    withAsterisk
    value={puesto} onChange={(event) => setpuesto(event.currentTarget.value)}
  />
  </Grid.Col>
      <Grid.Col span={4}>
      <TextInput
  label="Nombre"
  withAsterisk
  value={nombre} onChange={(event) => setnombre(event.currentTarget.value)}
/>
<TextInput
  label="Area"
  withAsterisk
  value={area} onChange={(event) => setarea(event.currentTarget.value)}
/>
      </Grid.Col>
    <Grid.Col span={4}>
    <Space h="lg" />
    <Space h="lg" />
    <Space h="lg" />
      <Button onClick={createPost}>agregar</Button>
    </Grid.Col>
    </Grid>
</Container>
  )
}

export default AgregarPersonal
