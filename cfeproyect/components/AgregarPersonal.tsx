import React from 'react'
import { TextInput,Container ,Button,Grid, Group, Space} from '@mantine/core';
import { useState, useEffect } from 'react'
import api from '../services/api';
import axios from 'axios';

const baseURL="http://localhost:1337/api/personals";
const AgregarPersonal = () => {
   
async function createPost() {
  await axios.post(baseURL,{ 
    rpe:" 9b802",
  nombre:"Efrain Ruiz",
  puesto:"Estudiante",
  area:"TI"
})   
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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