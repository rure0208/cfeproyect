import React from 'react'
import { Grid, TextInput, Space, Button, Container} from '@mantine/core'
import {FcPlus} from 'react-icons/fc'

const AgregarMaquinas = () => {
  return (
    <Container>
        <Grid>
            <Grid.Col span={4}>  
            <TextInput
            label="No. Inventario"
            />
            <TextInput
            label="Modelo"
            />
            <TextInput
            label="RPE"
            />
            </Grid.Col>

            <Grid.Col span={4}>
            <TextInput
            label="Centro de Coste"
            />
            <TextInput
            label="No. Serie"
            />
            </Grid.Col>

            <Grid.Col span={4}>
            <Space h="lg" />
            <Space h="lg" />
            <Space h="lg" />
            <Button sx={(theme) => ({ backgroundColor: '#D9D9D9', '&:hover': {backgroundColor: theme.fn.darken('#D9D9D9', 0.05),}, })} size="md" compact leftIcon={<FcPlus></FcPlus>} ></Button>
            </Grid.Col>
        </Grid>
    </Container>
  )
}

export default AgregarMaquinas