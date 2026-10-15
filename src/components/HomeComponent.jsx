import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import loading from '../assets/images/yeison.jpg'
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {
  
    state = {
        departamentos: [],
        status: false,
        eliminado: false
    }
    service = new ServiceDepartamentos();

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((res) => {
            this.setState({ departamentos: res, status: true });
        });
    }

    componentDidMount() {
        this.loadDepartamentos();
    }

    eliminarDept = (id) => {
        this.service.deleteDept(id).then((res) => {
            this.setState({
                eliminado: true
            });
            this.loadDepartamentos();
        })
    }

    render() {
        return (
        <div>
            <h1>Home Component</h1>
            {
                this.state.eliminado === true &&
                <h1 style={{color: 'red'}}>El registro ha sido eliminado</h1>
            }
            {
                this.state.status === false ?
                <img src={loading} alt='Yeison'/>
                :
                <ul>
                    {
                        this.state.departamentos.map((dep, index) => {
                            return(
                            <li key={index}>{dep.numero}. {dep.nombre} ({dep.localidad})
                                <NavLink className="btn btn-info" to={"/update/" + dep.numero + "/" + dep.nombre + "/" + dep.localidad} >Editar</NavLink>
                                <button className='btn btn-info' onClick={() => {
                                    this.eliminarDept(dep.numero);
                                }}>Eliminar MAAAAL</button>
                                <NavLink className="btn btn-info" to={"/delete/" + dep.numero}>Eliminar</NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
        )
    }
}
