import axios from "../../utils/axios";

export const getBookingByUserId = (id) => {
  return {
    type: "GET_BOOKING_BY_USER_ID",
    payload: axios.get(`booking/user/${id}`)
  };
};
