import React from 'react';
const Header = (props) =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header__title">
                    <h1>{props.title}</h1>
                    <div className="header__subtitle">
                        <h3>{props.subtitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header