import React, { useEffect } from 'react';
import { Table, Text, Card } from '@mantine/core';

const Tabla = () => {
  return (
    <div>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Table>
          <thead>
            <tr>
              <th>RPE</th>
              <th>Fecha</th>
              <th>Centro de coste</th>
              <th>No.Serie</th>
              <th>Estatus</th>

            </tr>
          </thead>

          <tbody>
            {/* {rows} */}
            <tr>
              
           <td> </td> 
              <td>Efrain04</td>
              <td><Text>HP</Text></td>
              <td><Text>Cableado</Text></td>
              <td><Text>En curso</Text></td>
            </tr>

          
          </tbody>
        </Table>
      </Card>
    </div>
  )
}

export default Tabla