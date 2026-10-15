import React, { Component } from 'react'
import axios from 'axios'
import global from '../Global.js'



export default class ServiceDepartamentos extends Component {
    getDepartamentos() {
        return new Promise(function(resolve) {
            axios.get(global.urlDepartamentos + "api/Departamentos").then((res) => {
                resolve(res.data);
            });
        })
    }

    getDepartamento(id) {
        return new Promise(function(resolve, reject) {
            axios.get(global.urlDepartamentos + "api/Departamentos/" + id).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    insertDept(numero, nombre, localidad) {
        return new Promise(function(resolve, reject) {
            axios.post(global.urlDepartamentos + "api/Departamentos", {
                numero: numero,
                nombre: nombre,
                localidad: localidad
            }).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    updateDept(objeto){
        return new Promise(function(resolve, reject) {
            axios.put(global.urlDepartamentos + "api/Departamentos", objeto).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    deleteDept(id) {
        return new Promise(function(resolve, reject) {
            axios.delete(global.urlDepartamentos + "api/Departamentos/" + id).then((res) => {
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            });
        })
    }
}
