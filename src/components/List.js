import React, { useState } from "react";

const List = (props) => {
  //Usuarios para renderizar en la tabla en el Dom
  const usuarios = props.usuarios;
  const usuariosSeleccionadoFuncion = props.usuarioSeleccionado;
  const setEditarPadre = props.setEditar;
  const [Editar, setEditar] = useState(false);
  const [Eliminar, setEliminar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: "",
    nombre: "",
    usuario: "",
  });

  setEditarPadre(Editar);

  const seleccionarUsuario = (user, caso) => {
    setUsuarioSeleccionado(user);
    caso === "Editar" ? setEditar(true) : setEliminar(true);
  };

  usuariosSeleccionadoFuncion(usuarioSeleccionado);

  if (Eliminar) {
    let usuarios = JSON.parse(localStorage.getItem("localUsuarios"));
    usuarios.map((element, index) => {
      if (element.id === usuarioSeleccionado.id) {
        usuarios.splice(index, index + 1);
      }
    });
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
    window.location.replace("");
  }
  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => {
            return (
              <tr key={index}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td>
                  <button
                    id="btneditar"
                    onClick={() => seleccionarUsuario(usuario, "Editar")}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    id="btneliminar"
                    onClick={() => seleccionarUsuario(usuario, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;