import axios from "../../utils/axios";

export const getMovie = (page, limit, search, sort, releaseDate) => {
  return {
    type: "GET_MOVIE",
    payload: !releaseDate
      ? axios.get(`movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}`)
      : axios.get(
          `movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}&searchReleaseDate=${releaseDate}`
        )
  };
};

export const postMovie = (form) => {
  console.log(form);
  // const { durationHour, durationMinute } = form;
  // setForm({ ...form, duration: `${durationHour}h ${durationMinute}m` });
  // const data = {
  //   ...form,
  //   duration: `${form.durationHour}h ${form.durationMinute}m`
  // };
  // delete form.durationHour;
  // delete form.durationMinute;
  form.set("duration", `${form.get("durationHour")}h ${form.get("durationMinute")}m`);
  form.delete("durationHour");
  form.delete("durationMinute");
  return {
    type: "POST_MOVIE",
    payload: axios.post(`movie`, form)
  };
};

export const updateMovie = (id, form) => {
  console.log(form);
  // const { durationHour, durationMinute } = form;
  // setForm({ ...form, duration: `${durationHour}h ${durationMinute}m` });
  // const data = {
  //   ...form,
  //   duration: `${form.durationHour}h ${form.durationMinute}m`
  // };
  // delete form.durationHour;
  // delete form.durationMinute;
  form.set("duration", `${form.get("durationHour")}h ${form.get("durationMinute")}m`);
  form.delete("durationHour");
  form.delete("durationMinute");
  return {
    type: "UPDATE_MOVIE",
    payload: axios.patch(`movie/${id}`, form)
  };
};

export const deleteMovie = (id) => {
  // console.log(form);
  // const { durationHour, durationMinute } = form;
  // setForm({ ...form, duration: `${durationHour}h ${durationMinute}m` });
  // const data = {
  //   ...form,
  //   duration: `${form.durationHour}h ${form.durationMinute}m`
  // };
  // delete form.durationHour;
  // delete form.durationMinute;
  // form.set("duration", `${form.get("durationHour")}h ${form.get("durationMinute")}m`);
  // form.delete("durationHour");
  // form.delete("durationMinute");
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`movie/${id}`)
  };
};
