import React from 'react';
import vector from '../../../img/Vector.png'
function CloseButton(props) {
    return (
        <button {...props}>
            <img src={vector} alt="close button"/>
        </button>
    );
}

export default CloseButton;