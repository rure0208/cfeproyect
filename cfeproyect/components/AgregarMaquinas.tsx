import React from 'react'
import { Grid, TextInput, Space, Button, Container} from '@mantine/core'
import {FcPlus} from 'react-icons/fc'
import axios from 'axios';
import { useState } from 'react'
const AgregarMaquinas = () => {
  
  const [noInventario, setNoInventario] = useState('');
  const [modelo, setModelo] = useState('');
  const [rpe, setrpe] = useState('');
  const [centroCoste, setCentroCoste] = useState('');
  const [noSerie, setNoSerie] = useState('');
  const baseURL="http://localhost:1337/api/maquinas";   
  async function createPost() {
    await axios.post(baseURL,{data:{ 
      noInventario:noInventario,
      modelo:modelo,
      centroCoste:centroCoste,
      rpe:rpe,
      noSerie:noSerie
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
        <Grid>
            <Grid.Col span={4}>  
            <TextInput
            label="No. Inventario"
            withAsterisk
            value={noInventario} onChange={(event) => setNoInventario(event.currentTarget.value)}
          />
             <TextInput
            label="Modelo"
            withAsterisk
            value={modelo} onChange={(event) => setModelo(event.currentTarget.value)}
          />
             <TextInput
          label="RPE"
          value={rpe} onChange={(event) => setrpe(event.currentTarget.value)}
          />
            </Grid.Col>

            <Grid.Col span={4}>
            <TextInput
            label="RPE"
            withAsterisk
            value={centroCoste} onChange={(event) => setCentroCoste(event.currentTarget.value)}
          />
            <TextInput
            label="No. Serie"
            withAsterisk
            value={noSerie} onChange={(event) => setNoSerie(event.currentTarget.value)}
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

export default AgregarMaquinas