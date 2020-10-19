import React, { Component } from 'react';


// let App =(props) => {
//     let greeting = <h1>Hello World!</h1>;
//     return greeting;
// }
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Zach",
            placeholder: "Text here",
        }
    }
    onInputChange = (value) => {
        this.setState({ value: value })
    }


    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.value}</h1>
                <input placeholder={this.state.placeholder}
                    value={this.state.text} onChange={(event) => this.onInputChange(event.target.value)} />

            </div>
        )
    }
}

export default App;

