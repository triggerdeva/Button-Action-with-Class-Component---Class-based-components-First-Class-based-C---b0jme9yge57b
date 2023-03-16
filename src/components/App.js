import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
		super();
		this.state={
			msg:""
		}
	};
	handleclick(){
		this.setState({
			msg:<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
		})
	}
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={()=>this.handleclick()}>
					click here
				</button>
				{this.state.msg}
				
    		</div>
    	);
    }
}


export default App;
