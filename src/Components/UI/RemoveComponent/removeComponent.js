import React, {useState} from 'react';
import s from './removeComponent.module.css'
function RemoveComponent(props) {
    const [test,closeFunc1]= useState()



    const closeFunc = ()=>{
        if(classesAuth ===s.testObs){
            console.log(classesAuth)
            classesAuth = s.testObsClose
        }else if(classesAuth ===s.testObsClose){
            console.log(classesAuth)
           classesAuth = s.testObs

        }
    }

    return (
        <div  onClick={()=>closeFunc1(()=>closeFunc())} className={classesAuth}>
                 <div className={s.removeBlockQuestion} >
                     <h2>Are you sure you want to delete?</h2>
                     <div className={s.buttons}>
                         <button>
                             Yes
                         </button>
                         <button>
                             No
                         </button>
                     </div>
                 </div>

        </div>
    );
}

export default RemoveComponent;