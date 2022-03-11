import {
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_BOOKING_FAIL,
  PRODUCT_CREATE_BOOKING_REQUEST,
  PRODUCT_CREATE_BOOKING_RESET,
  PRODUCT_CREATE_BOOKING_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  CART_SAVE_SHIPPING_ADDRESS,
  PRODUCT_CREATE_GALLARY_REQUEST,
  PRODUCT_CREATE_GALLARY_SUCCESS,
  PRODUCT_CREATE_GALLARY_FAIL,
  PRODUCT_CREATE_GALLARY_RESET,
  PRODUCT_CREATE_DAYS_REQUEST,
  PRODUCT_CREATE_DAYS_SUCCESS,
  PRODUCT_CREATE_DAYS_FAIL,
  PRODUCT_CREATE_DAYS_RESET,
} from "../Constants/ProductConstants";

// PRODUCT LIST
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        products: action.payload.products,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE PRODUCT
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT REVIEW CREATE
export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

// PRODUCT BOOKING CREATE
export const productBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_BOOKING_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_BOOKING_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_BOOKING_RESET:
      return {};
    default:
      return state;
  }
};
// PRODUCT GALLARY CREATE
export const productGallaryReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_GALLARY_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_GALLARY_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_GALLARY_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_GALLARY_RESET:
      return {};
    default:
      return state;
  }
};
// PRODUCT DAYS CREATE
export const productDaysReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_DAYS_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_DAYS_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_DAYS_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_DAYS_RESET:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = { shippingAddress: {} }, action) => {
  switch (action.type) {
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};
