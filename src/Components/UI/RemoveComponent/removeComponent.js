import React, {useState} from 'react';
import s from './removeComponent.module.css'
function RemoveComponent(props) {


    return (
        <div  className={s.testObs} onClick={(event)=>props.funcBlockEdit(event)}>
                 <div className={s.removeBlockQuestion} >
                     <h2>Are you sure you want to delete?</h2>
                     <div className={s.buttons}>
                         <button   onClick={()=>props.remove(props.post)}>
                             Yes
                         </button>
                         <button className={s.cancelButton} onClick={(event)=>props.funcBlockEdit(event)}>
                             No
                         </button>
                     </div>
                 </div>

        </div>
    );
}

export default RemoveComponent;