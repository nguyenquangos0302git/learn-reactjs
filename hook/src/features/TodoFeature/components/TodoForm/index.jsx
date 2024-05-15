import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onHandlerFormSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onHandlerFormSubmit: null,
};

function TodoForm(props) {
  const { onHandlerFormSubmit } = props;
  const [text, setText] = useState(() => {
    return "";
  });
  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (!onHandlerFormSubmit) return;
    const textSend = {
      title: text,
    };
    onHandlerFormSubmit(textSend);
  };
  const handlerChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handlerFormSubmit}>
        <input type="text" value={text} onChange={handlerChangeText} />
      </form>
    </div>
  );
}

export default TodoForm;
