import React from "react";
import faker from "faker";

const CommentDetails = () => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">Stevie Feliciano</a>
        <div className="metadata">
          <div className="date">2 days ago</div>
        </div>
        <div className="text">
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
