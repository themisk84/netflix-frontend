export const API_URL = "https://express-api-themisk84.herokuapp.com";
export const UNIQUE_ID = (id) =>
  `https://express-api-themisk84.herokuapp.com/titles/${id}`;
export const SORT_URL = (type, page, country) =>
  `https://express-api-themisk84.herokuapp.com/type/${type}&page=${page}&country=${country}`;
export const YEAR_URL = (year) =>
  `https://express-api-themisk84.herokuapp.com/type/${year}`;
