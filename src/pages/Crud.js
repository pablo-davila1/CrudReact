
import React from 'react'
import Form from '../components/Form'
import List from '../components/List'


const usuarios = []

const Crud = () => {

const agregarUsuario = (objeto) => {
    usuarios.push(objeto)
}

return (
    <>
        <Form agregarUsuario={agregarUsuario} />
        <List usuarios={usuarios}/>
    </>
)
}

export default Crud