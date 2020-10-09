import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Result from './components/result';
import Reset from './components/reset';
import Size from './components/size';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'red' ,
            fontSize : 12
        };
    }
    setColor = (params) => {
        this.setState({
            color : params
        })
    };
    setSize = (value) =>{
        if (this.state.fontSize + value >=8 && this.state.fontSize + value <=36) {
            this.setState({
                fontSize : this.state.fontSize + value
            })
        }
        
    }
    onReset = (value) =>{
        if (value){
            this.setState({
                color : 'red' ,
                fontSize : 12
            })
        }
    }
  render() {
    return(

    <div className="container-fluid mg-50">
        <div className="row">
             <ColorPicker color={this.state.color} onReceiveColor={this.setColor}/>
             <Size  fontSize = {this.state.fontSize} onUpdateSize={this.setSize}/>
             <Reset onReset = {this.onReset} /> 
            <div className="row">
                <Result color = {this.state.color} fontSize = {this.state.fontSize} />
                
            </div>
        </div>
    </div>
    )
    
    
  }
}
export default App;