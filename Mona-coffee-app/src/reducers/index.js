import userReduser from "./user";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const allReduser = combineReducers({
  user: userReduser,
});
export default persistReducer(persistConfig, allReduser);
