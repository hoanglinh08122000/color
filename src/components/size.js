import React, { Component } from 'react';

class Size extends Component {
render() {
	return(
		<div className="col-xs-54 col-sm-4 col-md-45 col-lg-54">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size = ?</h3>
                    </div>
                    <div className="panel-body">
                        <button type="submit" className="btn btn-success">Tăng</button>
                        <button type="submit" className="btn btn-success">Giảm</button> 
                    </div>
                </div>
               
            </div>

		)
	}
}
export default Size;