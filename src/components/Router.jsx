import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteComponent from './DeleteComponent'

function GetDatosUpdate(){
    let {id, nombre, localidad} = useParams();

    return (<UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />)
}
function GetIdDept (){
    let {id} = useParams();

    return(<DeleteComponent id={id}/>)
}

export default class Router extends Component {

    

    render() {
        return (
        <BrowserRouter>
        <MenuComponent />
            <Routes>
                <Route path='/' element={<HomeComponent />} />
                <Route path='/delete/:id' element={<GetIdDept />} />
                <Route path='/insertarDepartamento' element={<CreateDepartamento />} />
                <Route path='/update/:id/:nombre/:localidad' element={<GetDatosUpdate />} />
            </Routes>
        </BrowserRouter>
        )
    }
}
