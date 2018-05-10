import { combineReducers } from "redux";
import activity from "./activityReducer";
import myInfo from "./myInfo";
import NewGroup from "./NewGroup";
import Register from "./Register";
import groupDetailReducer from "./groupDetailReducer";
import signupDetailReducer from "./signupDetailReducer";
import comment from './comment';
import user from './user';

export default combineReducers({
    activity: activity,
    myInfoReducer: myInfo,
    newGorupReducer: NewGroup,
    registerReducer: Register,
    groupDetailReducer: groupDetailReducer,
    signupDetailReducer: signupDetailReducer,
    commentReducer: comment,
  userReducer: user
});
