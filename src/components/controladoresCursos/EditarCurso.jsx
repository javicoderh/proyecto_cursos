import React, { Component} from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

const api = axios.create({
baseURL: `http://localhost:5000/cursos`
})

class EditarCurso extends Component {     

 state = {
   cursos: []
 }
 
 constructor(props) {
   super(props);
   this.view = {view: "descripcionCurso"}       
 }  
 
 createCourse = async () => {
 let res = await api.post('/', { nombre: "Test", descripcion: 'testeando la creación de cursos', img: 'https://previews.123rf.com/images/keviz/keviz1706/keviz170600074/79886816-aplicaci%C3%B3n-de-logotipo-de-flor-de-loto.jpg' })
 console.log(res)
 }
 
 render() {   
  return (
  <header className="App-header"> 
  <h1 className="titulo">Cursimple</h1>      
  <form className="Crear">
   <h3>Editar curso</h3>
  <label for="id">ID</label>
  <input name="id" placeholder="ingresa la ID del curso..."></input>
  <label for="nombre">Nombre</label>
  <input name="nombre" placeholder="ingresa el nuevo nombre..."></input>
  <label for="descripcion">Descripción</label>
  <input name="descripcion" placeholder="escribe la nueva descripción..."></input>
  <label for="img">Imagen</label>
  <input name="img" placeholder="ingresa la nueva url de imagen..."></input>
  <button className="enviarCurso">Editar</button>
  </form>
  <Link to="/inicio"><button className="cerrar">↑</button></Link>          
  </header>   
  );
  }
 }
 
 export default EditarCurso