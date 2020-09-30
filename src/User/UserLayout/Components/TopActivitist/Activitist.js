import React, { Component } from 'react'

export default class Activitist extends Component {
    render() {
        return (
            <div classname="col-lg-6 p-2">
            <div classname="blog bg-white rounded text-center">
                 <div classname="blog_img">
                 <img src={this.props.blogs.ImageSrc} className="img-fluid rounded" />
                 </div>
                <div classname="blog_desc">
                 <span><small><b>{this.props.blogs.activitis_title}</b></small></span>
                 <span><small>+{this.props.blogs.number_of_activitis} Blogs</small></span>
                 </div>
            </div>	
        </div>
        )
    }
}

