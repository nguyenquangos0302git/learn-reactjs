import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    const newParams = { ...params };

    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);

    delete newParams._page;

    const productList = await axiosClient.get("/products", {
      params: newParams,
    });

    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });

    return {
      data: productList,
      paging: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
};

export default productApi;
