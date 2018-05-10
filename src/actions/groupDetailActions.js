import { createAction } from 'redux-actions';
import { fetchObject, VALIDATE_ERROR_CODE } from "./fetchModule";
import {
    GET_GROUP_DETAIL,
    GET_JOIN_HOST_DATA,
    SIGNUP_GROUP,
} from '../constants/actionTypes';

export const getGroupDetailData = createAction("GET_GROUP_DETAIL");
export const signUpGroupData = createAction("SIGNUP_GROUP");

export const getJoinHostData = createAction(GET_JOIN_HOST_DATA);

export const getGroupDetail = (data) => {
    return (dispatch) => {
        fetchObject(`activity/${data}`, "", {
            method: "GET",
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(getGroupDetailData(json));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const fetchJoinHost = () => {
    return (dispatch, getState) => {
        fetchObject(`join/host`) 
            .then(function(response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(getJoinHostData(json.data));
            })
            .catch(function (ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const signUpGroup = (data) => {
    return (dispatch) => {
        fetchObject(`join`, "", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(signUpGroupData(json.data));
                window.location.reload(); 
            })
            .catch(function (ex) {
                console.log("parsing failed", ex);
            });
    }
};
