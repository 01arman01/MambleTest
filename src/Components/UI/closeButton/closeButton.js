import React from 'react';
import vector from '../../../img/Vector.png'
import s from './closeButton.module.css'

function CloseButton(props) {
    return (
        <button {...props} className={s.closeButton}>
            <img src={vector} alt="close button"/>
        </button>
    );
}

export default CloseButton;