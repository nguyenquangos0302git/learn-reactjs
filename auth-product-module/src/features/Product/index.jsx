import React from "react";
import PropTypes from "prop-types";
import ListPage from "./pages/ListPage";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Box } from "@material-ui/core";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} component={ListPage} exact></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
