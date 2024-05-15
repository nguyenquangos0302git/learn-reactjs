import React, { useEffect, useState } from "react";
import queryString from "query-string";

import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import PostSearch from "./components/PostSearch";

function PostFeature(props) {
  const [postList, setPostList] = useState(() => {
    return [];
  });
  const [pagination, setPagination] = useState(() => {
    return {
      _page: 1,
      _limit: 10,
      _totalRows: 1,
    };
  });
  const [filter, setFilter] = useState(() => {
    return {
      _page: 1,
      _limit: 10,
      title_like: "",
    };
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const query = queryString.stringify(filter);
        const rawResponse = await fetch(
          "http://js-post-api.herokuapp.com/api/posts?" + query
        );
        const rawData = await rawResponse.json();
        const { data, pagination } = rawData;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        setPostList([]);
      }
    }
    fetchPostList();
  }, [filter]);
  const handlerPaginationClick = (value) => {
    setFilter({
      ...filter,
      _page: value,
    });
  };
  const handlerSubmitForm = (value) => {
    setFilter({
      ...filter,
      title_like: value.search,
      _page: 1,
    });
  };
  return (
    <div>
      <PostSearch onHandlerSubmitForm={handlerSubmitForm}></PostSearch>
      <PostList postList={postList}></PostList>
      <Pagination
        pagination={pagination}
        onHandlerPaginationClick={handlerPaginationClick}
      ></Pagination>
    </div>
  );
}

export default PostFeature;
