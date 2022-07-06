const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: ""
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_SCHEDULE_FULFILLED": {
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
    case "GET_SCHEDULE_REJECTED": {
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

    // create movie
    case "POST_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "POST_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.message
      };
    }
    case "POST_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message
      };
    }

    // update schedule
    case "UPDATE_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.message
      };
    }
    case "UPDATE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message
      };
    }

    // delete schedule
    case "DELETE_SCHEDULE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "DELETE_SCHEDULE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.message
      };
    }
    case "DELETE_SCHEDULE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message
      };
    }

    default: {
      return state;
    }
  }
};

export default schedule;
