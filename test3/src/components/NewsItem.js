import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card my-3">
        <img
          src={
            !imgUrl
              ? "https://th.bing.com/th/id/OIP.kyJTjHucP0ZsW6euBlk7VAHaEK?rs=1&pid=ImgDetMain"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span
              className="position-absolute top-0 translate-middle badge ronded-pill text-bg-secondary"
              style={{ left: "70%", zIndex: 1 }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            {" "}
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary "
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
