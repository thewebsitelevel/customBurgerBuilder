import React, { Component } from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import BackDrop from '../Backdrop/Backdrop';


import './Modal.css';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    render(){
        return (
            <Auxi>
                <BackDrop show={this.props.show} clicked ={ this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform:this.props.show? "translateY(0)" : 'translateY(-100vh)',
                        opacity:this.props.show? '1': '0'
                    }} >
                    {this.props.children}
                </div>
            </Auxi>
        );
    }
} 


export default Modal;