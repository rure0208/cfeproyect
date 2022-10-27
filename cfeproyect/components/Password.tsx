import React from 'react'
import { BiLock } from 'react-icons/bi'
import { PasswordInput } from '@mantine/core'
const Password = () => {
    return (
        <PasswordInput
            style={{
                paddingLeft: 30,
                paddingRight: 20,
                width: 300
            }}
            placeholder="Contraseña"
            label="Contraseña"
            icon={<BiLock></BiLock>}
        />
    )
}

export default Password