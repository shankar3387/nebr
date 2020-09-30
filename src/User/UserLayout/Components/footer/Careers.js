import React, { Component } from 'react';

class Careers extends Component {
    constructor(props) {
        super(props);
        this.state ={
           style:{
               padding:'100px',
               textAlign:'center',
           }
    }
   }
   render() {
       return (
           <div>
              <h1 style={this.state.style}>Kiran Reddy, Shashi Reddy 02</h1>
           </div>
       );
   }
}

export default Careers;
