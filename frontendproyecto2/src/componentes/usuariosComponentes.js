//importar use efect
import React, { useEffect, useState } from "react";
//servicios
import usuarioServicio from "../servicios/usuarioServicio";
//css
import "./usuariosComponentes.css";

function UsuarioComponente() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        getUsuarios();
    }, [])

    const eliminarUsuario = async (id) => {
        await usuarioServicio.eliminarUsuario(id);
        getUsuarios();
    }

    const getUsuarios = async () => {
        const usuarios = await usuarioServicio.obtenerUsuarios();
        if (usuarios) setUsuarios(usuarios);
    };

    const agregarUsuario = async () => {
        const usuario = { nombre, id };
        await usuarioServicio.crearUsuario(usuario);
        getUsuarios();
    }

    const editarUsuario = async (id) => {
        const usuario = { nombre, id };
        console.log('editando usuario', usuario)
        await usuarioServicio.actualizarUsuario(id, usuario);
        getUsuarios();
    }

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
      };
    
      const handleIdChange = (event) => {
        setId(event.target.value);
      };

    return (
        <div>
            <div className="form-container"> {/* Aplica la clase CSS a un contenedor */}
                <h2>Formulario</h2>
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                    className="form-input"
                />
                <br />
                <label htmlFor="id" className="form-label">ID:</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={handleIdChange}
                    className="form-input" 
                />
                <br />
                <button onClick={agregarUsuario} className="form-button">Enviar</button> {/* Aplica la clase CSS al botón */}
            </div>

            <table className="two-column-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Id Usuario</th>
                        <th>Eliminar usuario</th>
                        <th>Editar usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.id}</td>
                                <td>
                                    <button
                                        onClick={() => eliminarUsuario(usuario.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => editarUsuario(usuario.id)}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    {/* Puedes agregar más filas según tus necesidades */}
                </tbody>
            </table>
        </div>
    );
}

export default UsuarioComponente;
