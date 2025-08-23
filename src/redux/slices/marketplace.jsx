import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "api/ApiAuth";

export const requestCommodity = createAsyncThunk(
  "marketPlace/requestCommodity",
  async (info) => {
    const request = await ApiAuth.post("/commodity/request/submit", info);
    const response = request.data;
    return response;
  }
);

export const becomeSeller = createAsyncThunk("seller/create", async (info) => {
  const request = await ApiAuth.post("/seller/create", info);
  const response = request.data;
  return response;
});

export const getCommodityRequest = createAsyncThunk(
  "seller/get",
  async () => {
    const request = await ApiAuth.get("/commodity/getAllRfq");
    const response = request.data;
    return response;
  }
)

export const fulfilOrder = createAsyncThunk(
  "marketPlace/fulfilOrder",
  async (_id) => {
    const request = await ApiAuth.post(`/seller/fullfill-order/${_id}`, _id)
    const response =request.data;
    return response;
  }
)

const marketPlace = createSlice({
  name: "marketPlace",
  initialState: {
    isLoading: false,
    marketPlace: null,
    error: false,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestCommodity.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(requestCommodity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(requestCommodity.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Request could not be completed!!!!!";
        } else {
          state.error = action.error.message;
          // console.log("market error", state.error);
        }
      })
      .addCase(becomeSeller.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(becomeSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(becomeSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Request could not be completed!!!!!";
        } else {
          state.error = action.error.message;
          // console.log('market error',state.error)
        }
      })
      .addCase(getCommodityRequest.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(getCommodityRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(getCommodityRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Request could not be completed!!!!!";
        } else {
          state.error = action.error.message;
          // console.log('market error',state.error)
        }
      })
      .addCase(fulfilOrder.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(fulfilOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(fulfilOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Request could not be completed!!!!!";
        } else {
          state.error = action.error.message;
          // console.log('market error',state.error)
        }
      })
  },
});

export default marketPlace.reducer;
