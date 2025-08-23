import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "api/ApiAuth";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (credentials) => {
    const request = await ApiAuth.post("/users/signup", credentials);
    const response = await request.data;
    localStorage.setItem("user", JSON.stringify(response?.user));
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials) => {
    const request = await ApiAuth.post("/users/login", credentials);
    const response = await request.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    if (token) {
      await ApiAuth.post("/users/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    localStorage.removeItem("user");
  } catch (error) {
    throw error;
  }
});


export const confirmEmail = createAsyncThunk(
  "user/emailConfirm",
  async (otp) => {
    const request = await ApiAuth.post("/users/confirm", otp);
    const response = await request.data;
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email) => {
    const request = await ApiAuth.patch("/users/forgotPassword", email);
    const response = await request.data;
    return response;
  }
);


const authUser = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
    error: false,
    success: false,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access Denied!!! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        state.success = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        state.success = null;
      })
      .addCase(confirmEmail.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(confirmEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.success = action.payload?.status;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.error;
        state.success = null;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
        state.success = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        state.success = null;
      })
  },
});

export const { setUser, clearUser } = authUser.actions;

export default authUser.reducer;
