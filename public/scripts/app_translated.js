'use strict';

// class BookApp extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleRemoveAll = this.handleRemoveAll.bind(this)
//         this.handlePick = this.handlePick.bind(this)
//         this.handleRemoveBook = this.handleRemoveBook.bind(this)
//         this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
//         this.state = {
//             // books : ['Lava', 'Autobography of a Yogi', 'Yayati']
//             books : []
//         }
//     }
//     componentDidMount(){
//         const json = localStorage.getItem("books")
//         const books = JSON.parse(json)
//         if(books){
//             this.setState(()=>({books:books}))
//         }
//     }
//     componentDidUpdate(a,b){

//         if(b.books.length !== this.state.books.length){
//             const json = JSON.stringify(this.state.books)
//             localStorage.setItem('books',json)
//         }
//     }

//     handleRemoveAll(){
//         this.setState(()=>{
//             return{
//                 books:[]
//             }
//         })
//     }
//     handlePick(){
//         const randomIndex = Math.floor(Math.random() * this.state.books.length);
//         const item = this.state.books[randomIndex];
//         alert(item)
//     }
//     handleRemoveBook(book){
//         console.log(this.state.books)
//         this.setState((oldState)=>({
//             books:oldState.books.filter((mybook)=>book !== mybook)
//         }))
//         console.log(this.state.books)
//         console.log(book + ' is dropped.');
//     }
//     handleOnFormSubmit(bookname){
//         console.log(bookname)
//         this.setState((oldState)=>({
//             books:oldState.books.concat(bookname)
//         }))
//     }
//     render(){
//         const title = 'Book Application'
//         const subtitle = 'Read books here...'
//         // const books = ['Lava', 'Autobography of a Yogi', 'Yayati']
//         return(
//             <div>
//             <Header title={title} subtitle={subtitle}/>
//             <Options books = {this.state.books} deleteAll = {this.handleRemoveAll} dropBook = {this.handleRemoveBook}/>
//             <AddOption handleOnFormSubmit = {this.handleOnFormSubmit}/>
//             <Action pickbook = {this.handlePick}/>
//             </div>
//         )
//     }
// }

// // class Header extends React.Component{
// //     render(){
// //         return (
// //         <div>
// //             <h1>{this.props.title}</h1>
// //             <h2>{this.props.subtitle}</h2>
// //         </div>
// //         )
// //     }
// // }

// const Header = (props) =>{
//     return(
//         <div>
//             <h1>{props.title}</h1>
//             <h1>{props.subtitle}</h1>
//         </div>
//     )
// }

// // class Options extends React.Component{
// //     render(){
// //         return (
// //         <div>
// //             {this.props.books.map((mybook) => <Option optiontext={mybook}/>)}
// //             <button onClick={this.props.deleteAll}>Remove all</button>
// //         </div>
// //         )
// //     }
// // }

// const Options = (props) =>{
//     return(
//         <div>
//             {props.books.map((mybook) => <Option optiontext={mybook} dropBook={props.dropBook}/>)}
//             <button onClick={props.deleteAll}>Remove all</button>
//         </div>
//     )
// }

// // class Option extends React.Component{
// //     render(){
// //         return (
// //         <div>
// //             {this.props.optiontext}
// //             <button onClick={this.props.dropBook}>Drop</button>
// //         </div>
// //         )
// //     }
// // }

// const Option = (props) =>{
//     return(
//         <div>
//             {props.optiontext}
//             <button onClick={ () => {props.dropBook(props.optiontext)}}>Drop</button>
//         </div>
//     )
// }

// class AddOption extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this)
//     }
//     handleOnFormSubmit(e){
//         e.preventDefault()
//         const bookname = e.target.elements.option.value;
//         this.props.handleOnFormSubmit(bookname)
//     }
//     render(){
//         return (
//         <form onSubmit={this.handleOnFormSubmit}>
//             <input type="text" name="option"></input>
//             <button onClick= {this.props.addBook}>Add Book</button>
//         </form>
//         )
//     }
// }

// // class Action extends React.Component{
// //     render(){
// //         return (
// //         <div>
// //             <button onClick={this.props.pickbook}>Help me decide a book?</button>
// //         </div>
// //         )
// //     }
// // }

// const Action = (props) =>{
//     return(
//         <div>
//             <button onClick={props.pickbook}>Help me decide a book?</button>
//         </div>
//     )
// }

// // class Counter extends React.Component{
// //     constructor(props){
// //         super(props)
// //         this.addToCounter = this.addToCounter.bind(this)
// //         this.subToCounter = this.subToCounter.bind(this)
// //         this.resetCounter = this.resetCounter.bind(this)
// //         this.state = {
// //             counter : 0
// //         }
// //     }

// //     componentDidMount(){
// //         const json = localStorage.getItem("counter")
// //         const counter = JSON.parse(json)
// //         // if(counter){
// //             this.setState(()=>({counter:counter}))
// //         // }
// //         console.log(localStorage.json)
// //     }
// //     componentDidUpdate(a,b){
// //         // if(b.counter.length !== this.state.counter.length){
// //             const json = JSON.stringify(this.state.counter)
// //             localStorage.setItem('counter',json)
// //             console.log('componentDidUpdate')
// //         // }
// //     }

// //     addToCounter(){
// //         console.log('addToCounter ' + this.props.name)
// //         this.setState((oldState)=>{
// //             return{
// //                 counter : oldState.counter + 1
// //             }
// //         })
// //     }
// //     subToCounter(){
// //         console.log('subToCounter ' + this.props.name)
// //         this.setState((oldState)=>{
// //             return{
// //                 counter : oldState.counter - 1
// //             }
// //         })
// //     }
// //     resetCounter(){
// //         console.log('resetCounter ' + this.props.name)
// //         this.setState(()=>{
// //             return{
// //                 counter : 0
// //             }
// //         })
// //     }
// //     render(){
// //         // var counter = 0;
// //         return (
// //         <div>
// //             <p>Counter {this.state.counter}</p>
// //             <button onClick={this.addToCounter}>Add</button>
// //             <button onClick={this.subToCounter}>Subtract</button>
// //             <button onClick={this.resetCounter}>Reset</button>
// //         </div>
// //         )
// //     }
// // }

// ReactDOM.render(<BookApp/>, document.getElementById('root'))

console.log('webpack running');
