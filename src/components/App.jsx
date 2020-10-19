import React, { Component, Fragment } from 'react';


// let App =(props) => {
//     let greeting = <h1>Hello World!</h1>;
//     return greeting;
// }
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Hello world",
            placeholder: "Text here",
            inputText: '',
            hasLoaded: false
        }
    }
    handleClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
    }



    onInputChange = (e) => {
        this.setState({ inputText: e.target.value })
    }


    render() {
        if (this.state.hasLoaded === true) {
            return (
                <Fragment>
                    <h1>{this.props.name}</h1>
                    <input type="text" value={this.state.inputText} placeholder={this.state.placeholder} onChange={(e) => { this.onInputChange(e) }} />
                    <h1>{this.state.inputText}</h1>
                    <button onClick={this.handleClick} >Load it!</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Load it!</button>
                </Fragment>
            )
        }
    }
}
    export default App;
