import React from 'react';
const Action = (props) =>{
    return(
            <button className='big-button' onClick={props.pickbook}  disabled={!props.hasOption}>Suggest Book</button>
    )
}
export default Action