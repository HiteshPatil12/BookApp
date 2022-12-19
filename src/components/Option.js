import React from 'react';
const Option = (props) =>{
    return(
        <div className='widget-align-content'>
            {props.optiontext}
            <button className='button' onClick={ () => {props.dropBook(props.optiontext)}}>Drop</button>
        </div>
    )
}

export default Option