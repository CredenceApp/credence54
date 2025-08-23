import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "api/ApiAuth";

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (info) => {
    const request = await ApiAuth.post("/transactions/create", info);
    const response = request.data;
    return response;
  }
);

export const acceptTransaction = createAsyncThunk(
  "transaction/acceptTransaction",
  async (id) => {
    const request = await ApiAuth.post(`/transactions/accept/${id}`);
    const response = request.data;
    return response;
  }
);

export const rejectTransaction = createAsyncThunk(
  "transaction/rejectTransaction",
  async (id) => {
    const request = await ApiAuth.post(`/transactions/reject/${id}`);
    const response = request.data;
    return response;
  }
);

export const cancelTransaction = createAsyncThunk(
  "transaction/cancelTransaction",
  async (id) => {
    const request = await ApiAuth.post(`/transactions/cancle/${id}`);
    const response = request.data;
    return response;
  }
);

export const getAllTransactions = createAsyncThunk(
  "transaction/getAllTransactions",
  async () => {
    const request = await ApiAuth.get(`/transactions/allTransactions`);
    const response = request.data;
    return response;
  }
);

export const getAllUserTransactions = createAsyncThunk(
  "transaction/getAllUserTransactions",
  async (transactionId) => {
    const request = await ApiAuth.get(
      `/transactions/listUserTransactions/${transactionId}`
    );
    const response = request.data;
    return response;
  }
);

export const getPendingTransaction = createAsyncThunk(
  "transaction/getPendingTransaction",
  async (userId) => {
    const request = await ApiAuth.get(`/transactions/pendingTransaction`);
    const response = request.data;
    return response;
  }
);

export const deleteTransactions = createAsyncThunk(
  'transaction/deleteTransactions',
  async (transactionId) => {
    const request = await ApiAuth.delete(
      `/transactions/delete/:${transactionId}`
    )
    const response = request.data;
    return response;
  }
);

export const paystackPayment = createAsyncThunk(
  'transaction/payment',
  async (info) => {
    const request = await ApiAuth.post(`/billing/paystack/webhook`);
    const response = await request.data;
    return response;
  }
)

export const initiateBilling = createAsyncThunk(
  'transaction/initiateBilling',
  async (info) => {
    const request = await ApiAuth.get(`/billing/initiate`);
    const response = await request.data;
    return response;
  }
)

const transactions = createSlice({
  name: "transaction",
  initialState: {
    isLoading: false,
    transaction: null,
    error: false,
    success: false,
    isAuthenticated: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Creating Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(acceptTransaction.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(acceptTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;

      })
      .addCase(acceptTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Accepting Transaction!!!!!";
        } else {
          state.error = action.error.message;


        }
      })
      .addCase(cancelTransaction.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(cancelTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(cancelTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Canceling Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getAllTransactions.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Fetching Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getAllUserTransactions.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(getAllUserTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;
      })
      .addCase(getAllUserTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Fetching Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(deleteTransactions.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(deleteTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;

      })
      .addCase(deleteTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Fetching Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getPendingTransaction.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(getPendingTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;

      })
      .addCase(getPendingTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;

        if (action.error.message === "Request failed with status code 401") {
          state.error = "Error Fetching Transaction!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(initiateBilling.pending, (state) => {
        state.isLoading = true;
        state.transaction = null;
        state.error = null;
        state.success = null;
      })
      .addCase(initiateBilling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transaction = action.payload;
        state.error = null;
        state.success = action.payload.status;

      })
      .addCase(initiateBilling.rejected, (state, action) => {
        state.isLoading = false;
        state.transaction = null;
        if (action.error.message) {
          state.error = "Paystack Error try again!!!!!";
        } else {
          state.error = action.error.message;
        }
      })
  },
});

export default transactions.reducer;
