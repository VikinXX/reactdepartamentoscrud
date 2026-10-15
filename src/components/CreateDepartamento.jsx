import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    cajaID = React.createRef();
    nombre = React.createRef();
    localidad = React.createRef();
    service = new ServiceDepartamentos();

    state = {
        status: false,
        mensaje: ""
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        
        let numero= parseInt(this.cajaID.current.value)
        let nombre= this.nombre.current.value
        let localidad= this.localidad.current.value
        
        this.service.insertDept(numero, nombre, localidad).then((res) => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
        <div>
            <h1>Create Departamento</h1>
            
            <form onSubmit={this.insertarDepartamento}>
                <label>ID: <input type='text' ref={this.cajaID}/></label>
                <br />
                <label>Nombre: <input type='text' ref={this.nombre}/></label>
                <br />
                <label>Localidad: <input type='text' ref={this.localidad}/></label>
                <br />
                <button>Enviar</button>
            </form>
            {
                this.state.status === true && 
                <>
                    <h1 style={{color: 'green'}}>Datos introducidos correctamente!!!!!</h1>
                    <Navigate to='/' />
                </>
            }
        </div>
        )
    }
}
