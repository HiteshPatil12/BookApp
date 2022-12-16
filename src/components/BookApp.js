import React from 'react';
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'
import '../styles/styles.scss'

export default class BookApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveBook = this.handleRemoveBook.bind(this)
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
        this.state = {
            // books : ['Lava', 'Autobography of a Yogi', 'Yayati']
            books : [],
            selectedOption: undefined
        }
    }
    componentDidMount(){
        const json = localStorage.getItem("books")
        const books = JSON.parse(json)
        if(books){
            this.setState(()=>({books:books}))
        }
    }
    componentDidUpdate(a,b){
        
        if(b.books.length !== this.state.books.length){
            const json = JSON.stringify(this.state.books)
            localStorage.setItem('books',json)
        }
    }

    handleRemoveAll(){
        this.setState(()=>{
            return{
                books:[]
            }
        })
    }
    handlePick(){
        const randomIndex = Math.floor(Math.random() * this.state.books.length);
        const item = this.state.books[randomIndex];
        this.setState(()=> ({
            selectedOption:this.state.books[randomIndex]
        }))
    }
    handleRemoveBook(book){
        console.log(this.state.books)
        this.setState((oldState)=>({
            books:oldState.books.filter((mybook)=>book !== mybook)
        }))
        console.log(this.state.books)
        console.log(book + ' is dropped.');
    }
    handleOnFormSubmit(bookname){
        console.log(bookname)
        this.setState((oldState)=>({
            books:oldState.books.concat(bookname)
        }))
    }
    handleClearSelectedOption(){
        this.setState(() => ({
            selectedOption:undefined
        }))
    }
    render(){
        const title = 'Books App'
        const subtitle = 'A reader lives a thousand lives before he dies.'
        // const books = ['Lava', 'Autobography of a Yogi', 'Yayati']
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Options books = {this.state.books} deleteAll = {this.handleRemoveAll} dropBook = {this.handleRemoveBook}/>
            <AddOption handleOnFormSubmit = {this.handleOnFormSubmit}/>
            <Action pickbook = {this.handlePick}/>
            <OptionModal selectedOption = {this.state.selectedOption} handleClearSelectedOption = {this.handleClearSelectedOption}/>
            </div>
        )
    }
}