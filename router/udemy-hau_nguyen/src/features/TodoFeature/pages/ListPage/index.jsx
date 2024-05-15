import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";

function ListPage(props) {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [filter, setFilter] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || "all";
  });

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilter(param.status || "all");
  }, [location.search]);

  const handlerOnClickAll = (_) => {
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handlerOnClickCompleted = (_) => {
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handlerOnClickInCompleted = (_) => {
    const queryParams = { status: "incompleted" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  return (
    <div>
      List Page {filter}
      <button onClick={handlerOnClickAll}>All</button>
      <button onClick={handlerOnClickCompleted}>Completed</button>
      <button onClick={handlerOnClickInCompleted}>InCompleted</button>
    </div>
  );
}

export default ListPage;
