import React, { Component } from 'react';

class ColorPicker extends Component {
	constructor(props){
		super(props);
		this.state = {
			colors : ["red","blue","yellow","black"]
		}
	}
render() {
	var isColor = this.state.colors.map((color, index) => {
		return <span key = {index}>
	                		
	           </span> 
	})
	return(
			 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <div className="panel panel-primary">
	                <div className="panel-heading">
	                    <h3 className="panel-title">Color Picker</h3>
	                </div>
	                <div className="panel-body">
	                	      {isColor}
	                </div>
	            </div>
            </div>

		)
	}
}
export default ColorPicker;