import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './components/BookApp'

ReactDOM.render(<BookApp/>, document.getElementById('root'))

// class Header extends React.Component{
//     render(){
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//         )
//     }
// }


// class Options extends React.Component{
//     render(){
//         return (
//         <div>
//             {this.props.books.map((mybook) => <Option optiontext={mybook}/>)}
//             <button onClick={this.props.deleteAll}>Remove all</button>
//         </div>
//         )
//     }
// }


// class Option extends React.Component{
//     render(){
//         return (
//         <div>
//             {this.props.optiontext}
//             <button onClick={this.props.dropBook}>Drop</button>
//         </div>
//         )
//     }
// }



// class Action extends React.Component{
//     render(){
//         return (
//         <div>
//             <button onClick={this.props.pickbook}>Help me decide a book?</button>
//         </div>
//         )
//     }
// }

// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.addToCounter = this.addToCounter.bind(this)
//         this.subToCounter = this.subToCounter.bind(this)
//         this.resetCounter = this.resetCounter.bind(this)
//         this.state = {
//             counter : 0
//         }
//     }
    
//     componentDidMount(){
//         const json = localStorage.getItem("counter")
//         const counter = JSON.parse(json)
//         // if(counter){
//             this.setState(()=>({counter:counter}))
//         // }
//         console.log(localStorage.json)
//     }
//     componentDidUpdate(a,b){
//         // if(b.counter.length !== this.state.counter.length){
//             const json = JSON.stringify(this.state.counter)
//             localStorage.setItem('counter',json)
//             console.log('componentDidUpdate')
//         // }
//     }

//     addToCounter(){
//         console.log('addToCounter ' + this.props.name)
//         this.setState((oldState)=>{
//             return{
//                 counter : oldState.counter + 1
//             }
//         })
//     }
//     subToCounter(){
//         console.log('subToCounter ' + this.props.name)
//         this.setState((oldState)=>{
//             return{
//                 counter : oldState.counter - 1
//             }
//         })
//     }
//     resetCounter(){
//         console.log('resetCounter ' + this.props.name)
//         this.setState(()=>{
//             return{
//                 counter : 0
//             }
//         })
//     }
//     render(){
//         // var counter = 0;
//         return (
//         <div>
//             <p>Counter {this.state.counter}</p>
//             <button onClick={this.addToCounter}>Add</button>
//             <button onClick={this.subToCounter}>Subtract</button>
//             <button onClick={this.resetCounter}>Reset</button>
//         </div>
//         )
//     }
// }
