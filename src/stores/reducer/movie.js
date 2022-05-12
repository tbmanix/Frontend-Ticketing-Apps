const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: ""
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_MOVIE_FULFILLED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg
      };
    }
    case "GET_MOVIE_REJECTED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg
      };
    }

    default: {
      return state;
    }
  }
};

export default movie;
