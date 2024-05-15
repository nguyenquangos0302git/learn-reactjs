import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product(props) {
  const { product } = props;
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  return (
    <Box padding={1}>
      <Box padding={1}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="100%"
          image={thumbnailUrl}
          title="Contemplative Reptile"
        ></CardMedia>
      </Box>
      <Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
