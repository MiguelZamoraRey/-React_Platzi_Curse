import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './welcome.css';
import reactImg from '../../images/reactIcon.png';

class WelcomeComponent extends Component {
    render() {
        return (
            <div className='WelcomeComponent'>
                <h1>¡Bienvenido al entorno básico!</h1>
                <img src={reactImg} alt="imgReact" />
                <p>Este entorno esta preparado para trabajar con un servidor de desarrollo en el puerto 9000,
                tambien puedes modificar el index.html para recoger los archivos finales en la carpeta dist</p>
                <p>Buena Suerte</p>
            </div>
        )
    }
}

export default WelcomeComponent;