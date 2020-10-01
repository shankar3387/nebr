import React, { Component } from "react";

export default class ChitBoard extends Component {
  render() {
    console.log(this.props.blogs, "hhhh");

    return (
      <div className="post-review border_bottom py-2">
        <div className="media_blog idea_media pb-1">
          <div className="d-flex mr-1">
            <a href>
              <img
                className="img-fluid rounded-circle"
                src={this.props.blogs.ImageSrc}
                alt="User"
              />
            </a>
          </div>
          <div className="media-body">
            <small>
              <span className="m-0 on_name">{this.props.blogs.name}</span>
            </small>
            <br />
            <small>
              <span className="on_date">{this.props.blogs.datetime}</span>
            </small>
            <br />
            <small>
              Commented on <a href>{this.props.blogs.title}</a>
            </small>
            <br />
          </div>
        </div>
        <div className="media_blog idea_media pb-1">
          <div className="media-body">
            <small>{this.props.blogs.description}</small>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
