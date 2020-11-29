import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.prevenDefault();


        // Validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Los 2 pasword sean iguales

        // Pasarlo al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Pasword</label>
                        <input
                            type="pasword"
                            id="pasword"
                            name="pasword"
                            placeholder="Tu Pasword"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Pasword</label>
                        <input
                            type="pasword"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Pasword"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campor-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Registrarme" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;