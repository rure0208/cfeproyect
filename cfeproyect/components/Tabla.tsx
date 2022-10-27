import React from 'react';
import { Table, Text, NumberInput} from '@mantine/core';

const Tabla = () => {
  return (
    <div>
          <Table>
      <thead>
        <tr>
          <th>RPE</th>
          <th>Máquina</th>
          <th>Área</th>
          <th>Estatus</th>
        
        </tr>
      </thead>
      
      <tbody>
        {/* {rows} */}
        <tr>
          <td>Efrain04</td>
            <td><Text>HP</Text></td>
            <td><Text>Cableado</Text></td>
            <td><Text>En curso</Text></td>   
        </tr>

        <tr>
          <td>Karen09</td>
            <td><Text>Dell</Text></td>
            <td><Text>Recepción</Text></td>
            <td><Text>En curso</Text></td> 
            

        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Tabla