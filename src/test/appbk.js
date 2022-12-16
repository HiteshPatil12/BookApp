class BookApp extends React.Component{
    render(){
        const title = 'Book Application'
        const subtitle = 'Help me decide a book.'
        const books = ['ABC', 'PQR', 'XYZ']
        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Options books = {books}/>
            <AddOption/>
            <Action/>
            <Counter/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll(){
        console.log(this.props.books);
        console.log('handlePick called');
    }
    render(){
        return (
        <div>
            {this.props.books.map((mybook) => <Option optiontext={mybook}/>)}
            <button onClick={this.handleRemoveAll}>Remove all</button>
        </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
        <div>{this.props.optiontext}</div>
        )
    }
}

class AddOption extends React.Component{
    handleOnFormSubmit(e){
        e.preventDefault()
        console.log('handleOnFormSubmit')
    }
    render(){
        return (
        <form onSubmit={this.handleOnFormSubmit}>
            <input type="text" name="options"></input>
            <button>Add Book</button>
        </form>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        console.log('handlePick called');
        alert('I am handlePick')
    }
    render(){
        return (
        <div>
            <button onClick={this.handlePick}>Help me decide a book?</button>
        </div>
        )
    }
}

// Just for execise: Counter, Button Components

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addToCounter = this.addToCounter.bind(this)
        this.subToCounter = this.subToCounter.bind(this)
        this.resetCounter = this.resetCounter.bind(this)
        this.state = {
            counter : 0
        }
    }
   
    addToCounter(){
        console.log('addToCounter ' + this.props.name)
        this.setState((oldState)=>{
            return{
                counter : oldState.counter + 1
            }
        })
    }
    subToCounter(){
        console.log('subToCounter ' + this.props.name)
        this.setState((oldState)=>{
            return{
                counter : oldState.counter - 1
            }
        })
    }
    resetCounter(){
        console.log('resetCounter ' + this.props.name)
        this.setState(()=>{
            return{
                counter : 0
            }
        })
    }
    render(){
        // var counter = 0;
        return (
        <div>
            <p>Counter {this.state.counter}</p>
            <button onClick={this.addToCounter}>Add</button>
            <button onClick={this.subToCounter}>Subtract</button>
            <button onClick={this.resetCounter}>Reset</button>
        </div>
        )
    }
}

class Button extends React.Component{
    constructor(props){
        super(props)
        this.handleBtn = this.handleBtn.bind(this)
        this.state = {
            visible: false
        }
    }
   
    handleBtn(){
        this.setState((oldState)=>{
            return{
                visible: !oldState.visible
            }
        })
    }
    render(){
        return (
        <div>
            <button onClick={this.handleBtn}>{this.state.visible?'Hide':'Show'}</button>
            <p>{this.state.visible == true? 'Well done!': ''}</p>
        </div>
        )
    }
}

ReactDOM.render(<Button buttonText="Show"/>, document.getElementById('root'))