import { createStore } from "redux";
import authReducer from "./authReducer";


//store accepts one reducer
const store = createStore(authReducer);

export default store