import {createAction, createReducer} from "@reduxjs/toolkit";
const INITIAL_STATE = [];

export const addProduct = createAction("ADD_PRODUCT");
export const getProducts = createAction("ADD_PRODUCTS");

export default createReducer(INITIAL_STATE, {
  [addProduct.type]: (state, action) => [...state, action.payload],
  [getProducts.type]: (state, action) => [...action.payload],
});
