import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "api/ApiAuth";

export const changePassword = createAsyncThunk(
  "settings/changePassword",
  async (password) => {
    const request = await ApiAuth.patch("/users/changePassword", password);
    const response = request.data;
    return response;
  }
);

export const updateProfile = createAsyncThunk(
  "settings/updateProfile",
  async(details) => {
    const request = await ApiAuth.patch("/users/updateProfile", details);
    const response = request.data;
    return response;
  }
);

const settings = createSlice({
  name: "settings",
  initialState: {
    isLoading: false,
    settings: null,
    error: false,
    success: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(changePassword.pending, (state) => {
      state.isLoading = true;
      state.settings = null;
      state.error = null;
      state.success = null;
    })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.settings = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.settings = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Request could not be completed!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.settings = null;
        state.error = null;
        state.success = null;
      })
        .addCase(updateProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.settings = action.payload;
          state.error = null;
          state.success = action.payload.status;
        })
        .addCase(updateProfile.rejected, (state, action) => {
          state.isLoading = false;
          state.settings = null;
          if (action.error.message === "Request failed with status code 401") {
            state.error = "Request could not be completed!!!!!";
          } else {
            state.error = action.error.message;
          }
        });
  },
});

export default settings.reducer;