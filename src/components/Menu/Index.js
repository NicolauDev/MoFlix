// importar o react
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/Index';
//import ButtonLink from './components/ButtonLink/Index';


// componente ( função que retorna o html dentro do react)
function Menu() {
    return (
        
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="MoFlix Logo" />
            </a>
            
            <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
            </Button>
        </nav>
    );
         
}

//exportar pra importar em outros lugares
export default Menu; 