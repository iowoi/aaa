import { createAction } from "redux-actions";
import { user, token, fetchObject } from "./fetchModule";
import {
    GET_MY_INFO_ACTIVITY_DATA,
    GET_ALL_HOST_ACTIVITY_DATA,
    UPDATE_ACTIVITY_STATUS,
    GET_USER_INFO,
    PUT_USER_INFO,
    GET_HOBBY_LIST
} from "../constants/actionTypes";

export const getMyInfoActivityData = createAction(GET_MY_INFO_ACTIVITY_DATA);
export const getAllHostActivityData = createAction(GET_ALL_HOST_ACTIVITY_DATA);
export const updateActivityStatus = createAction(UPDATE_ACTIVITY_STATUS);
export const getUserInfoData = createAction(GET_USER_INFO);
export const putUserInfo = createAction(PUT_USER_INFO);
export const getHobbyListData = createAction(GET_HOBBY_LIST);

export const fetchAllHostActivityData = () => {
    /* Deprecated, use fetchActivity in ./activityActions.js
    console.log("fetchAllHostActivityData....");
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject("activity/list", `user=${user}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log("parsed json", json);
                let { total, data } = json;
                if (total > 0) {
                    return dispatch(fetchMyInfoActivityData(json.data[0].id));
                }
                dispatch(getAllHostActivityData({ total, data }));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
    */
};
export const fetchMyInfoActivityData = id => {
    /* Deprecated, use getGroupDetail in ./groupDetailactions
    console.log("fetchMyInfoActivityData....");
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`activity/${id}`) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
          let data = json
            dispatch(getMyInfoActivityData(data));
        }) 
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
    */
};

export const fetchUpdateActivityData = (id = 0, hash = {}) => {
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`activity/${id}`, "", {
            method: "PUT",
            body: JSON.stringify(hash)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getMyInfoActivityData(id));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const fetchUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("myData"));
    return dispatch => {
        fetchObject(`user/${userInfo.id}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getUserInfoData(json));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const sendUserInfo = data => {
    console.log("sendUserInfo", data);
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`user`, "", {
            method: "PUT",
            body: JSON.stringify(data)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(putUserInfo(json));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const getHobbyList = type => {
    return dispatch => {
        fetchObject(`hobby/list`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getHobbyListData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};
