import React from 'react'
import { Table} from '@mantine/core';
const InicioMod = () => {
    const ths = (
        <tr>
          <th>RP</th>
          <th>Fecha</th>
          <th>Centro de Coste</th>
          <th>No. Serie</th>
          <th>Estatus</th>
        </tr>
      );
    
      
    
      return (
        <Table captionSide="bottom">
          <thead>{ths}</thead>
        </Table>
      );
}

export default InicioMod