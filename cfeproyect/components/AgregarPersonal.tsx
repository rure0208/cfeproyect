import React from 'react'
import { TextInput,Container ,Button,Grid, Group, Space} from '@mantine/core';
import { useState, useEffect } from 'react'
import api from '../services/api';
import axios from 'axios';

const baseURL="http://localhost:1337/api/personals"
const AgregarPersonal = () => {
    const [post, setPost] = useState([]);

   
async function createPost() {
    const resp = await axios.post(baseURL,
     { rpe:"200",
      nombre:"200",
      puesto:"200",
      area:"200",
    }).then((response)=>{
      console.log(response)
        setPost(response.data);
    });
}



  return (
<Container>
<Grid>
      <Grid.Col span={4}>  
      <TextInput
      label="RPE"
      withAsterisk
    />
     <TextInput
    label="Puesto"
    withAsterisk
  />
  </Grid.Col>
      <Grid.Col span={4}>
      <TextInput
  label="Nombre"
  withAsterisk
/>
<TextInput
  label="Area"
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
</Container>
  )
}

export default AgregarPersonal