import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  postList: PropTypes.array,
};

PostList.defaultProps = {
  postList: [],
};

function PostList(props) {
  const { postList } = props;
  return (
    <div>
      <ul>
        {postList.length > 0 ? (
          postList.map((data) => {
            return <li key={data.id}>{data.title}</li>;
          })
        ) : (
          <li>No item</li>
        )}
      </ul>
    </div>
  );
}

export default PostList;
