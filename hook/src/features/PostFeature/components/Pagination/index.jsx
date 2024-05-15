import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object,
  onHandlerPaginationClick: PropTypes.func,
};

Pagination.defaultProps = {
  pagination: {},
  onHandlerPaginationClick: null,
};

function Pagination(props) {
  const { pagination, onHandlerPaginationClick } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalRows = _totalRows / _limit;
  const handlerPage = (page) => {
    const newPage = page + _page;
    onHandlerPaginationClick(newPage);
  };
  return (
    <div>
      <button disabled={_page <= 1} onClick={(_) => handlerPage(-1)}>
        Prev
      </button>
      <button disabled={_page >= totalRows} onClick={(_) => handlerPage(1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
