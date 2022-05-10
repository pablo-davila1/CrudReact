import React,{useState} from 'react'

const Form = (props) => {
    const agregarUsuario = props.agregarUsuario

    //Se crean Hook para setiar lo ingresado por el usuario
    const [nombre,setNombre] = useState("")
    const [usuario,setUsuario] = useState("")

    const capturarNombre = (e) => {
        //se implementa el seteo
        setNombre(e.target.value)
    }

    const capturarUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const crear = (e) => {
        e.preventDefault()
        const objetoUsuario = {
            nombre:nombre,
            usuario:usuario
        }
        agregarUsuario(objetoUsuario)

    }
   
 
  return (
    <>
        <form>
            <input onChange={capturarNombre} id='nombre' name='nombre' type="text" placeholder='Ingrese nombre' />
            <input  onChange={capturarUsuario} id='usuario' name='usuario' type="text" placeholder='Ingrese usuario'/>
            <button onClick={crear} type='submit'>Crear</button>
        </form>
    </>
  )
}

export default Form