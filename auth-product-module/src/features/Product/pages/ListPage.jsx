import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import productApi from "../../../api/product";
import ProductList from "../component/ProductList";
import ProductSkeletonList from "../component/ProductSkeletonList";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));

function ListPage(props) {
  const [loading, setLoading] = useState(() => {
    return true;
  });
  const [listProducts, setListProducts] = useState(() => {
    return [];
  });
  useEffect(() => {
    const getListProduct = async () => {
      try {
        const response = await productApi.getAll({ _page: 1, _limit: 10 });
        const { data } = response;
        setListProducts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getListProduct();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>Left Column</Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                {loading ? (
                  <ProductSkeletonList />
                ) : (
                  <ProductList listProducts={listProducts} />
                )}
                <Pagination count={10} color="primary" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
