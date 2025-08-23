import { configureStore } from "@reduxjs/toolkit";
import authUser from "./slices/authUser";
import transactions from "./slices/transactions";
import marketplace from "./slices/marketplace";
import settings from "./slices/settings";

const reduxStore = configureStore({
  reducer: {
    user: authUser,
    transaction: transactions,
    marketPLace: marketplace,
    settings: settings,
  },
});

export default reduxStore;