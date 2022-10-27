import React from 'react'
import Link from 'next/link';
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserSettingsLine} from 'react-icons/ri'
import {FaUsers,FaDesktop} from 'react-icons/fa'
import {GoSignOut} from 'react-icons/go'
import {Button,  useMantineTheme, Stack} from '@mantine/core';

const StackButton = () => {
    const theme = useMantineTheme();
  return (
    <Stack sx={(theme) => ({ backgroundColor: '#A4E5A4' })}>
           <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} size="md" compact leftIcon={<AiOutlineHome></AiOutlineHome>}><Link href='/inicio'>Inicio</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} size="md" compact leftIcon={<FaUsers></FaUsers>}><Link href='/personal'>Personal</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} size="md" compact leftIcon={<FaDesktop></FaDesktop>}><Link href='/equipo'>Equipo Computo</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} size="md" compact leftIcon={<RiUserSettingsLine></RiUserSettingsLine>}><Link href='/mantenimiento'>AF13</Link></Button>           
           <Button sx={(theme) => ({ backgroundColor: '#758E75', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} size="md" compact leftIcon={<GoSignOut></GoSignOut>}><Link href='/'>Cerrar Sesion</Link></Button>
      </Stack>
  )
}

export default StackButton