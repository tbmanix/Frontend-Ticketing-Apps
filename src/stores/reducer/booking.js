const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: ""
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKING_BY_USER_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_BOOKING_BY_USER_ID_FULFILLED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.message
      };
    }
    case "GET_BOOKING_BY_USER_ID_REJECTED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.message
      };
    }

    default: {
      return state;
    }
  }
};

export default booking;
