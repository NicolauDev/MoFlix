import React from 'react';
function ButtonLink(props) {
// props => {ClassName: "Nome que você passar", href: "/"}
    console.log(props)
    return (
    <a href={props.href} className={props.className}>

        {props.children}
    </a>
    );
         
}

//exportar pra importar em outros lugares
export default ButtonLink; 