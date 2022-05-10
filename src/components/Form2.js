import React, { useState } from "react";

const Form2 = (props) => {
  //Por props traemos del componente padre el usuario actual que se desea actualizar
  const usuarioActual = props.usuarioActual;

  //Estado para los valores iniciales del formulario de actualizar
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: usuarioActual.id,
    nombre: usuarioActual.nombre,
    usuario: usuarioActual.usuario,
  });

  //Esta funcion se ejecuta con el onClick del button de Actualizar
  const actualizar = (e) => {
    e.preventDefault();
    const objetoActualizado = {
      id: usuarioActual.id,
      nombre: usuarioSeleccionado.nombre,
      usuario: usuarioSeleccionado.usuario,
    };

    let usuarios = JSON.parse(localStorage.getItem("localUsuarios"));
    usuarios.map((element, index) => {
      if (element.id === usuarioSeleccionado.id) {
        usuarios[index] = usuarioSeleccionado;
      }
    });
    //Se almacena el usuario con la actualizacion de datos
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
    window.location.replace("");
  };

  //Esta siempre capturando los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ingrese nombre"
          value={usuarioSeleccionado && usuarioSeleccionado.nombre}
          onChange={handleChange}
        />
        <input
          id="usuario"
          name="usuario"
          type="text"
          placeholder="Ingrese usuario"
          value={usuarioSeleccionado && usuarioSeleccionado.usuario}
          onChange={handleChange}
        />
        <button onClick={actualizar} type="submit">
          Actualizar
        </button>
      </form>
    </>
  );
};

export default Form2;