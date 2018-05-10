import { handleActions } from "redux-actions";
import {
	GET_SIGNUP_DETAIL,
} from "../constants/actionTypes";

const initialState = {
	signupinfo: {}
};

const signupDetailReducer = handleActions(
	{
		GET_SIGNUP_DETAIL: (state, { payload }) => {
			return { ...state, signupinfo: payload };
		},
	},
	initialState
);

export default signupDetailReducer;
