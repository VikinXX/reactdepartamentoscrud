import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import ServiceDepartamentos from '../services/ServiceDepartamentos';

export default class DeleteComponent extends Component {
    
    state = {
        departamento: [],
        cancelar: false,
        eliminado: false
    }
    service = new ServiceDepartamentos();

    eliminarDept = (id) => {
        this.service.deleteDept(id).then((res) => {
            this.setState({
                eliminado: true
            });
        })
    }

    loadDepartamento = (id) => {
        this.service.getDepartamento(id).then((res) => {
            this.setState({
                departamento: res
            });
        });
    }

    componentDidMount = () => {
        this.loadDepartamento(parseInt(this.props.id));
    }
    
    render() {
        return (
        <div>
            {
                this.state.cancelar === true &&
                <Navigate to='/' />
            }
            {
                this.state.eliminado === true && 
                <Navigate to='/' />
            }
            <h1>¿Quieres eliminar el registro?</h1>
            <p>ID: {this.state.departamento.numero}</p>
            <p>Nombre: {this.state.departamento.nombre}</p>
            <p>Localidad: {this.state.departamento.localidad}</p>
            <button onClick={() => {
                this.eliminarDept(this.props.id);
            }}>Eliminar</button>

            <button onClick={() => {
                this.setState({
                    cancelar: true
                })
            }}>No eliminar</button>
        </div>
        )
    }
}
