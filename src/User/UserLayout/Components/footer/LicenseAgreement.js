import React, { Component } from 'react';

class LicenseAgreement extends Component {
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
              <h1 style={this.state.style}>Kiran Reddy, Shashi Reddy 04</h1>
           </div>
       );
   }
}

export default LicenseAgreement;
