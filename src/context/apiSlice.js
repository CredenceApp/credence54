import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://credenceapp-api.onrender.com",
});
// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://jsonplaceholder.typicode.com",
// });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
