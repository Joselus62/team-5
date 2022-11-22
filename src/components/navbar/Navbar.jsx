import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Home from './iconos/home-page.png'
import Autor from './iconos/buscarAutores.jpg'
export default function NavBar(props) {
    return (
        <>
        
            <nav className="nav">
                        < img src={ Home } width={ 30 } height={ 30 } alt="logo"></img >
                        <Link className="navLink" to="/Login">Inicio</Link>
                        <Link className="navLink" to="/Libros">Lista de Libros</Link>
                        < img src={Autor} width={ 30 } height={ 30 } alt="autor"></img>
                        <Link className="navLink" to="/Autor">Autores</Link>
                        <Link className="navLink" to="./Profile">Perfil</Link>
                        <Link className="navLink" to="/Categoría">Categorías</Link>
                        <div>
                            <label className="navLabel" htmlFor="txtTitulo">Título del Libro: </label>
                            <input type="text" className="input" placeholder="Buscar"></input>
                        
                        </div>
                        <Button type="submit" className="Enviar">Enviar</Button>{' '} 
                        <Link to="/"></Link>
                
            </nav>
        </>
    );
}


