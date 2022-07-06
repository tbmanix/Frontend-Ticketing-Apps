import axios from "../../utils/axios";

export const getSchedule = (page, limit, searchLocation, sort, searchById) => {
  return {
    type: "GET_SCHEDULE",
    payload: !searchById
      ? axios.get(
          `schedule/?page=${page}&limit=${limit}&sort=${sort}&searchLocation=${searchLocation}`
        )
      : axios.get(
          `schedule/?page=${page}&limit=${limit}&sort=${sort}&searchMovieId=${searchById}&searchLocation=${searchLocation}`
        )
  };
};

export const postSchedule = (form) => {
  console.log(form);
  const { time } = form;
  // setForm({ ...form, duration: `${durationHour}h ${durationMinute}m` });
  const data = {
    ...form,
    time: time.join(",")
  };
  // delete form.durationHour;
  // delete form.durationMinute;
  return {
    type: "POST_SCHEDULE",
    payload: axios.post(`schedule`, data)
  };
};

export const updateSchedule = (id, form) => {
  const { time } = form;
  form = {
    ...form,
    time: time.join(",")
  };
  return {
    type: "UPDATE_SCHEDULE",
    payload: axios.patch(`schedule/${id}`, form)
  };
};

export const deleteSchedule = (id) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axios.delete(`schedule/${id}`)
  };
};
