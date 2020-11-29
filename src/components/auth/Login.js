import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //extraer de usuario
    const { email, password } = usuario;

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

        // Pasarlo al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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

                    <div className="campor-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Iniciar Sesión" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;