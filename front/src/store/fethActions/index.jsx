import api from "../../services/api";

import {login} from "../ducks/auth";
import {addProducts, addProduct} from "../ducks/products";

export const authLogin = (user) => {
  return (dispatch) => {
    api
      .post("/", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(login());

        window.location.pathname = "/products";
      })
      .catch((error) => {
        const {message} = error.response.data;
        return alert(message);
      });
  };
};

export const addProductFetch = (product) => {
  return (dispatch) => {
    api
      .post("/products", product)
      .then((res) => dispatch(addProduct(res.data)))
      .catch(console.log);
  };
};
