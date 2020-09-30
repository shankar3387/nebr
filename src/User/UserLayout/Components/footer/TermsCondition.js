import React, { Component } from 'react';

class TermsCondition extends Component {
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
              <h1 style={this.state.style}>Kiran Reddy, Shashi Reddy 06</h1>
           </div>
       );
   }
}

export default TermsCondition;
