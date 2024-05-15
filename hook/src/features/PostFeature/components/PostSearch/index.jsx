import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostSearch.propTypes = {
  onHandlerSubmitForm: PropTypes.func,
};

PostSearch.defaultProps = {
  onHandlerSubmitForm: null,
};

function PostSearch(props) {
  const [text, setText] = useState(() => {
    return "";
  });
  const timeString = useRef(null);
  const { onHandlerSubmitForm } = props;
  const handlerSubmitForm = (e) => {
    e.preventDefault();
  };
  const handlerChangeText = (e) => {
    setText(e.target.value);
    if (!onHandlerSubmitForm) return;
    const searchTerm = {
      search: e.target.value,
    };
    if (timeString.current) {
      clearTimeout(timeString.current);
    }
    timeString.current = setTimeout(() => {
      onHandlerSubmitForm(searchTerm);
    }, 300);
  };
  return (
    <form onSubmit={handlerSubmitForm}>
      <input type="text" value={text} onChange={handlerChangeText} />
    </form>
  );
}

export default PostSearch;
