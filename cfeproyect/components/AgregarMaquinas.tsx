import React, { useEffect } from 'react'
import { Grid, TextInput, Space, Button, Select,ActionIcon } from '@mantine/core'
import { FcPlus } from 'react-icons/fc'
import axios from 'axios';
import { useState } from 'react'
import api from '../services/api';
const AgregarMaquinas = () => {
  const [dataw, setDataw] = useState([]);
  const [noInventario, setNoInventario] = useState('');
  const [modelo, setModelo] = useState('');
  const [rpe, setrpe] = useState('');
  const [centroCoste, setCentroCoste] = useState('');
  const [noSerie, setNoSerie] = useState('');
  const baseURL = "http://localhost:1337/api/maquinas";
  useEffect(() => {
    init();
}, [])

async function init() {
    const list = await api.listaDePersonal();
    setDataw(list.data);
} 
  async function createPost() {
    await axios.post(baseURL, {
      data: {
        noInventario: noInventario,
        modelo: modelo,
        centroCoste: centroCoste,
        rpe: rpe,
        noSerie: noSerie
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
  var task_rpe = dataw.map((d)=>{
    return(   
      d.attributes.rpe
     )

  })

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
         {/* <Select
            label="RPE"
            withAsterisk
            data={task_rpe}
            value={rpe} onChange={setrpe}
          /> */}
          <TextInput
            label="RPE"
            withAsterisk
          />
      </Grid.Col>

      <Grid.Col span={4}>
        <TextInput
          label="Centro de coste"
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

        <ActionIcon variant="light" size={22} color="dark" onClick={createPost}>
                <FcPlus/>
        </ActionIcon>
        {/* <Button sx={(theme) => ({ backgroundColor: '#D9D9D9', '&:hover': { backgroundColor: theme.fn.darken('#D9D9D9', 0.05), }, })} size="md" compact leftIcon={<FcPlus></FcPlus>} onClick={createPost}></Button> */}
      </Grid.Col>
    </Grid>

  )
}

export default AgregarMaquinas