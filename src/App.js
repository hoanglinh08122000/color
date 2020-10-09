import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Result from './components/result';
import Reset from './components/reset';
import Size from './components/size';

class App extends Component {
  render() {
    return(

    <div className="container-fluid">
        <div className="row">
             <ColorPicker />
             <Size />
             <Reset /> 
            <div className="row">
                <Result />
                
            </div>
        </div>
    </div>
    )
    
    
  }
}
export default App;