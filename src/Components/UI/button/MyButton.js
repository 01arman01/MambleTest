import React from 'react';
import s from './MyButton.module.css'
function MyButton({children,...props}) {
    return (
        <button {...props} className={s.myButton}>Add</button>
    );
}

export default MyButton;