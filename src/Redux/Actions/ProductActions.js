import axios from "axios";
import {
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_BOOKING_FAIL,
  PRODUCT_CREATE_BOOKING_REQUEST,
  PRODUCT_CREATE_BOOKING_SUCCESS,
  PRODUCT_CREATE_GALLARY_FAIL,
  PRODUCT_CREATE_GALLARY_REQUEST,
  PRODUCT_CREATE_GALLARY_SUCCESS,
  PRODUCT_CREATE_DAYS_FAIL,
  PRODUCT_CREATE_DAYS_REQUEST,
  PRODUCT_CREATE_DAYS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../Constants/ProductConstants";
import { logout } from "./userActions";

// PRODUCT LIST
export const listProduct =
  (keyword = " ", pageNumber = " ") =>
  async dispatch => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        `https://rwenjura-server.herokuapp.com/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE PRODUCT
export const listProductDetails = id => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://rwenjura-server.herokuapp.com/api/products/${id}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// SAVE SHIPPING ADDRESS
export const saveShippingAddress = data => dispatch => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// PRODUCT REVIEW CREATE
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `https://rwenjura-server.herokuapp.com/api/products/${productId}/review`,
        review,
        config
      );
      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

// PRODUCT BOOKING CREATE
export const createProductBooking =
  (productId, booking) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_BOOKING_REQUEST });

      // const {
      //   userLogin: { userInfo },
      // } = getState();

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };

      await axios.post(
        `https://rwenjura-server.herokuapp.com/api/products/${productId}/booking`,
        booking
        // config
      );
      dispatch({ type: PRODUCT_CREATE_BOOKING_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: PRODUCT_CREATE_BOOKING_FAIL,
        payload: message,
      });
    }
  };
// PRODUCT GALLARY CREATE
export const createProductGallary =
  (productId, gallary) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_GALLARY_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `https://rwenjura-server.herokuapp.com/api/products/${productId}/images`,
        gallary,
        config
      );
      dispatch({ type: PRODUCT_CREATE_GALLARY_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: PRODUCT_CREATE_GALLARY_FAIL,
        payload: message,
      });
    }
  };
// PRODUCT DAYS CREATE
export const createProductDays =
  (productId, day) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_DAYS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `https://rwenjura-server.herokuapp.com/api/products/${productId}/days`,
        day,
        config
      );
      dispatch({ type: PRODUCT_CREATE_DAYS_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: PRODUCT_CREATE_DAYS_FAIL,
        payload: message,
      });
    }
  };
