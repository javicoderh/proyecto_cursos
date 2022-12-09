import React, { Component} from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Formik } from "formik";

const api = axios.create({
baseURL: `http://localhost:5000/cursos`
})

class CrearCurso extends Component {    
 
 constructor(props) {
   super(props);
   this.view = {view: "descripcionCurso"}       
 }  
 
 crearCurso = async () => {
 let res = await api.post('/', { nombre: "", descripcion: "", img: "" })
 console.log(res)
 }

enviarCurso = async () => {
 let res = await api.post('/', { nombre: "", descripción: "", img: ""})
}
 
 render() {
  const {nombre, descripcion, img, onChange, onSubmit, form} = this.props
  return (
  <header className="App-header"> 
  <h1 className="titulo">Cursimple</h1>      
  <form className="Crear">
  <h3>Crear nuevo curso</h3>
  <label for="nombre">Nombre</label>
  <input maxLength={30} type="text" name="nombre" placeholder="ingresa el nombre del curso..."></input>
  <label for="descripcion">Descripción</label>
  <textarea maxLength={300} type="text" name="descripcion" placeholder="escribe una breve descripción del curso"></textarea>
  <label for="img">Imagen</label>
  <input name="img" maxLength={300} placeholder="ingresa la URl de la imagen que quieres agregar"></input>
  <button className="enviarCurso" onClick={this.crearCurso}>Crear</button>
  </form>
  <Link to="/inicio"><button type="submit" className="cerrar">↑</button></Link>          
  </header>   
  );
  }
 }
 
 export default CrearCurso