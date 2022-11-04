import React from 'react'
import { Grid, TextInput, Space, Button} from '@mantine/core'
import {FcPlus} from 'react-icons/fc'

const AgregarMantenimiento = () => {
  return (
    <Grid>
        <Grid.Col span={4}>  
        <TextInput
        label="No. Inventario"
        />
        <TextInput
        label="No. Serie"
        />
        </Grid.Col>

        <Grid.Col span={4}>
        <TextInput
        label="Centro de Coste"
        />
        <TextInput
        label="RPE"
        />
        <TextInput
        label="Fecha"
        />
        </Grid.Col>

        <Grid.Col span={4}>
        <Space h="lg" />
        <Space h="lg" />
        <Space h="lg" />
          <Button sx={(theme) => ({ backgroundColor: '#D9D9D9', '&:hover': {backgroundColor: theme.fn.darken('#D9D9D9', 0.05),}, })} size="md" compact leftIcon={<FcPlus></FcPlus>}></Button>
        </Grid.Col>
    </Grid>
  )
}

export default AgregarMantenimiento