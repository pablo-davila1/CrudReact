import React, { useState,useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { v4 as uuidv4 } from "uuid";
import Form2 from "../components/Form2";

const Crud = () => {
  //Estado que se utilizaran para  inicializar usuarios con un array vacio y luego irlo llenando
 const [usuarios, setUsuarios] = useState([]);
 const [usuarioActual,setUsuarioActual] = useState({})
 const [editar, setEditar] = useState(false);


  useEffect(() => {
    let usuariosLocal = JSON.parse(localStorage.getItem("localUsuarios"));
    if (usuariosLocal === null) {
      setUsuarios([]);
    } else {
      setUsuarios(usuariosLocal);
    }
  }, []);

  const agregarUsuario = (objeto) => {
      objeto.id = uuidv4();
      usuarios.push(objeto)
      localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
  };

  const usuarioSeleccionado = (usuarioSeleccionado) =>{
      setUsuarioActual(usuarioSeleccionado)
  }
  
  return (
    <>
     {editar ? (
         <Form2 usuarioActual={usuarioActual}/>
     ):(
        <Form agregarUsuario={agregarUsuario} />
     )}
     
      <List  usuarios={usuarios} usuarioSeleccionado={usuarioSeleccionado} setEditar={setEditar}/>
    </>
  );
};

export default Crud;