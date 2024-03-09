import { combineReducers } from "redux";
import counterSlice from "./slice/counterSlice";

const reducer = combineReducers({
    counter: counterSlice.reducer
})

export default reducer;