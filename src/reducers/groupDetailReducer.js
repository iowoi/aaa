import { handleActions } from "redux-actions";
import {
	GET_GROUP_DETAIL,
} from "../constants/actionTypes";

const initialState = {
	information: {},
	joinedList: {}
};

const groupDetailReducer = handleActions(
	{
		GET_GROUP_DETAIL: (state, { payload }) => {
			return { ...state, information: payload };
		},

		GET_JOIN_HOST_DATA: (state, { payload }) => {
			return { ...state, joinHost: payload };
		},

		signup_group: (state, { payload }) => {
			return { ...state };
		},

		GET_JOINED_LIST: (state, { payload }) => {
			return { ...state, joinedList: payload };
		},
	},
	initialState
);

export default groupDetailReducer;
