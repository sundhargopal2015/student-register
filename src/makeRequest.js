import axios from "axios";

const baseUrl = "https://6415f10ec42f59a203ab5f6a.mockapi.io/api/v1/student";

export const makeRequest = (method, data) => {
  return axios({
    method: method,
    url: baseUrl,
    data: data,
  })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
};