const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_USER_FULFILLED": {
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
    case "GET_USER_REJECTED": {
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

    case "UPDATE_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_PROFILE_FULFILLED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [{ ...state.data[0], ...action.payload.data.data }],
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.message
      };
    }
    case "UPDATE_PROFILE_REJECTED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        pageInfo: {},
        msg: action.payload.response.data.message
      };
    }

    case "UPDATE_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_PASSWORD_FULFILLED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [{ ...state.data[0], ...action.payload.data.data }],
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.message
      };
    }
    case "UPDATE_PASSWORD_REJECTED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        pageInfo: {},
        msg: action.payload.response.data.message
      };
    }

    case "UPDATE_IMAGE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "UPDATE_IMAGE_FULFILLED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [{ ...state.data[0], ...action.payload.data.data }],
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.message
      };
    }
    case "UPDATE_IMAGE_REJECTED": {
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        pageInfo: {},
        msg: action.payload.response.data.message
      };
    }

    default: {
      return state;
    }
  }
};

export default user;
