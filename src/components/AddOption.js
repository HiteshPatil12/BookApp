import React from 'react';
export default class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
    }
    handleOnFormSubmit(e){
        e.preventDefault()
        const bookname = e.target.elements.option.value;
        this.props.handleOnFormSubmit(bookname)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleOnFormSubmit}>
                    <input className='add-option__input' type="text" name="option"></input>
                    <button className='button' onClick= {this.props.addBook}>Add Book</button>
                </form>
            </div>
        )
    }
}