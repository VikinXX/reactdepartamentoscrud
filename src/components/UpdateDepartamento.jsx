import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    cajaID = React.createRef();
    nombre = React.createRef();
    localidad = React.createRef();
    service = new ServiceDepartamentos();

    state = {
        status : false
    }

    recogerDatos = (e) => {
        e.preventDefault();
        this.service.updateDept({numero: parseInt(this.cajaID.current.value), nombre: this.nombre.current.value, localidad: this.localidad.current.value}).then((res) => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
        <div>
            <h1>Datos</h1>
            <p>ID: {this.props.id}</p>
            <p>Nombre: {this.props.nombre}</p>
            <p>Localidad: {this.props.localidad}</p>
            <form onSubmit={this.recogerDatos}>
                <label>ID: <input type='text' value={this.props.id} ref={this.cajaID} disabled/></label>
                <br />
                <label>Nombre: <input type='text' defaultValue={this.props.nombre} ref={this.nombre}/></label>
                <br />
                <label>Localidad: <input type='text' defaultValue={this.props.localidad} ref={this.localidad}/></label>
                <br />
                <button>Actualizar</button>
            </form>
            {
                this.state.status === true &&
                <Navigate to='/' />
            }
        </div>
        )
    }
}
