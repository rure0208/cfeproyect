import React, { useState, useEffect,useRef } from 'react';
import { Table, ActionIcon, ScrollArea, TextInput, Group, Divider } from '@mantine/core';
import api from '../services/api';
import Notification from './NotificationToast';
import { GoTrashcan } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { BsPencilSquare } from 'react-icons/bs'
import { VscSettingsGear,VscFilePdf } from 'react-icons/vsc'
import { useDownloadExcel } from 'react-export-table-to-excel';
const Excel = (props) => {
  const [data, setData] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [buscar, setBuscar] = useState("");
  const tableRef = useRef(null);

  useEffect(() => {
    init();
}, [])

useEffect(() => {
    init();
}, [props.reload])


const { onDownload } = useDownloadExcel({
  currentTableRef: tableRef.current,
  filename: 'ListaMantenimiento',
  sheet: 'Users'
})
  async function init() {
    const list = await api.listaDeMantenimiento();
    const list2 = await api.listaDeMaquinas();
    setUsuarios(list.data);
    setData(list.data);
  }
  const handleChange = e => {
    setBuscar(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = data.filter((elemento) => {
      if (elemento.attributes.noInventario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }




  const rows = usuarios.map((d) => (
    <tr key={d.id}>
      <td>{d.attributes.fecha}</td>
      <td>{d.attributes.fecha}</td>
      <td>DA</td>
      <td>080</td>
      <td>{d.attributes.noInventario}</td>
      <td>{d.attributes.fecha}</td>
      <td>{d.attributes.proceso}</td>
      <td>{d.attributes.rpe}</td>
      <td>
      </td>
    </tr>
  ));



  return (
 
    <ScrollArea style={{ height: 250 }} type="always" scrollbarSize={18}>
      
      <Group style={{ 
                    height: 40}}>
        <TextInput
          style={{
            width: 200,
            marginTop: 4,
            marginLeft: 5,
          }}
          placeholder="Buscar"
          value={buscar}
          onChange={handleChange}
          mb="sm"
          icon={<BiSearch></BiSearch>}
        />
        
        <ActionIcon onClick={onDownload} variant="light" size={23} color="dark" style={{ 
                    marginLeft: 350,
                    marginBottom: 5,
                    width: 40}}>
          <VscFilePdf/>
        </ActionIcon>
      </Group>
      <Divider color={"black"} size={1}/>
      <Table ref={tableRef} horizontalSpacing="xl" verticalSpacing="md" fontSize="xs">
      <thead>
    <tr>
      <th>Año</th>
      <th>Mes</th>
      <th>Div</th>
      <th>Zona</th>
      <th>No Invetario</th>
      <th>Fecha</th>
      <th>Estatus</th>
      <th>RPE</th>
    </tr>
  </thead>

        <tbody>
          {rows}
        </tbody>
      </Table>

    </ScrollArea>

    
  )
}

export default Excel