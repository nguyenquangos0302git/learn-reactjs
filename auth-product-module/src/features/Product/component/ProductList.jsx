import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import Product from "./Product";

ProductList.propTypes = {
  listProducts: PropTypes.array,
};

ProductList.defaultProps = {
  listProducts: [],
};

function ProductList(props) {
  const { listProducts } = props;
  return (
    <Box>
      <Grid container>
        {listProducts.map((product) => {
          return (
            <Grid item item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Product product={product} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductList;
