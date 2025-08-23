import { apiSlice } from "./apiSlice";

const USERS_URL = "/users/";
const USERS_URLs = "https://dummyjson.com/auth/login";

// const REG_USER_URL = "/";
const REG_USER_URL = "/api/profile/";

const TRANSACT_URL = "/transaction";
// const TRANSACT_URL = "/";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        // url: `${USERS_URL}/authenticate`,
        url: `${USERS_URLs}`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        // url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        // url: `${USERS_URL}/logout`,
        url: `${USERS_URL}`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        // url: `${REG_USER_URL}`,
        url: `${REG_USER_URL}/edit/:id`,
        method: "POST",
        body: data,
      }),
    }),
    createTransaction: builder.mutation({
      query: (data, token) => ({
        url: `${TRANSACT_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useCreateTransactionMutation,
} = usersApiSlice;
