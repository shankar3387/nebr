import React, { Component } from 'react';

export default class AboutUs extends Component {
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
               <h1 style={this.state.style}>Kiran Reddy, Shashi Reddy</h1>
            </div>
        );
    }
}


