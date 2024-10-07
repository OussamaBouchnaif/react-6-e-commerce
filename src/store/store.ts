import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import reviewsReducer from "./reviewsSlice"; // Assurez-vous que le chemin est correct
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration de la persistance
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Configuration des reducers persistés
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedReviewsReducer = persistReducer(persistConfig, reviewsReducer);

// Configuration du store Redux
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    reviews: persistedReviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// Types dérivés pour l'utilisation de Redux dans l'application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
