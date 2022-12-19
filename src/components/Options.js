import React from 'react';
import Option from './Option'
const Options = (props) =>{
    return(
        <div className='widget'>
            <h2 className='widget-header__title'>List of Books</h2>
            <div className='widget-header'>
                {props.books.map((mybook) => <Option optiontext={mybook} dropBook={props.dropBook}/>)}
            </div>
            <button className='button' onClick={props.deleteAll}>Remove all</button>
        </div>
    )
}
export default Options