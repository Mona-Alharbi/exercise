import userReduser from "./user";
import { combineReducers } from "redux";
const allReduser = combineReducers({
    user:userReduser
})
export default allReduser;