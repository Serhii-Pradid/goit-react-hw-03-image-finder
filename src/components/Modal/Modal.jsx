import {Component} from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

handleKeyDown = e => {
    if (e.code === 'Escape') {
        console.log('нужно закрыть модалку')
        this.props.onClose();
    }
};

handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
        this.props.onClose();
    }
}

    render() {

    return createPortal (

<div className="Overlay" onClick={this.handleBackdropClick} >
  <div className="Modal" >
  <img src={this.props.largeImageURL} alt="" />
  </div>
</div>,
modalRoot
)  

    }


}