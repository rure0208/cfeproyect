import React from 'react'
import api from '../services/api';
import { useState, useEffect } from 'react'
import { Table, Text } from '@mantine/core';

const TablaPersonal = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        init();
    }, [])

    async function init() {
        const list = await api.listaDePersonal();
        setData(list.data);
    }
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>RPE</th>
                    <th>Nombre</th>
                    <th>Puesto</th>
                    <th>Area</th>
                </tr>
            </thead>

            <tbody>
                {/* {rows} */}
                <tr>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.rpe}
                                    </Text>
                                )
                            })
                        }

                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.nombre}
                                    </Text>
                                )
                            })
                        }
                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.puesto}
                                    </Text>
                                )
                            })
                        }
                    </td>
                    <td>
                        {
                            data.map(d => {
                                return (
                                    <Text key={d.id}>
                                        {d.attributes.area}
                                    </Text>
                                )
                            })
                        }
                    </td>

                </tr>
            </tbody>
        </Table>
    )
}

export default TablaPersonal