import React from 'react';
const Header = (props) =>{
    return(
        <div class="header">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
}

export default Header