import { handleActions } from "redux-actions";
import moment from "moment";
import {
    FETCH_ACTIVITY_DATA,
    GET_BANNER_LIST,
    UPDATE_SEARCH_QUERY
} from "../constants/actionTypes";

const initialState = {
    activity: [],
    banner: [],
    query: {},
    loading: false
};
const activityReducer = handleActions(
    {
        FETCH_ACTIVITY_DATA: (state, { payload }) => {
            return { ...state, activity: payload };
        },
        GET_BANNER_LIST: (state, { payload }) => {
            return { ...state, banner: payload };
        },
        UPDATE_SEARCH_QUERY: (state, { payload }) => {
            return { ...state, query: payload };
        },
        POST_LEAVE_ACTIVITY: (state, { payload }) => {
          return { ...state }
        },
    },
    initialState
);

export default activityReducer;
