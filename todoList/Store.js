import { createStore } from "redux";
//import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import allReduser from "./reducers";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, allReduser);
const store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
