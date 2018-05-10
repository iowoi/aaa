import moment from "moment";
import { createAction } from "redux-actions";
import { fetchObject, VALIDATE_ERROR_CODE } from "./fetchModule";
import {
    FETCH_ACTIVITY_DATA,
    GET_BANNER_LIST,
    UPDATE_SEARCH_QUERY,
    LEAVE_ACTIVITY
} from "../constants/actionTypes";

import { getGroupDetail } from "./groupDetailActions";

export const fetchActivityData = createAction(FETCH_ACTIVITY_DATA);
export const getBannerListData = createAction(GET_BANNER_LIST);
export const updateSearchQuery = createAction(UPDATE_SEARCH_QUERY);
export const leaveActivity = createAction(LEAVE_ACTIVITY);

const queryString = params =>
    Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");

export const fetchActivity = ( defaultQuery = {}) => {
    const userObj = localStorage.getItem("myData");
    return (dispatch, getState) => {
        const state = Object.keys(defaultQuery).length == 0? 
          Object.assign({}, getState().activity.query): 
          defaultQuery;
        
        const query = queryString(state);
        
        let config;
        if (userObj) {
            let { id: user, token } = JSON.parse(userObj);
            config = { headers: { token } };
        }
        fetchObject(`activity/list?${query}`, "", config)
            .then(function(response) {
                if (response.ok) return response.json();
                else
                    response.json().then(function(err) {
                        throw new Error(err);
                    });
            })
            .then(function(json) {
                dispatch(fetchActivityData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
                alert(VALIDATE_ERROR_CODE(ex.code));
            });
    };
};

export const fetchJoin = (defaultQuery = {}) => {
    let userObj = localStorage.getItem("myData");
    return (dispatch, getState) => {
        const state = Object.keys(defaultQuery).length == 0? 
          Object.assign({}, getState().activity.query): 
          defaultQuery;
        delete state.end;
        delete state.start;
        const query = queryString(state);

        let { id: user, token } = JSON.parse(userObj);
        fetchObject(`join/list`, "", { headers: { token } })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(fetchActivityData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const getBannerList = type => {
    return dispatch => {
        fetchObject(`landingbanner/list?type=${type}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getBannerListData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const postLeaveActivity = data => {
    const query = queryString(data);
    return (dispatch, getState) => {
        let userObj = localStorage.getItem("myData");
        let { id: user, token } = JSON.parse(userObj);
        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { token }
        };
        fetchObject(`activity/leave?${query}`, "", options)
            .then(function(response) {
                if (response.ok) {
                    dispatch(leaveActivity);
                    dispatch(getGroupDetail(data.activity));

                } else {
                    response.json().then(function(err) {
                        throw new Error(err);
                    });
                }
            })
            .then(function(json) {})
            .catch(function(ex) {
                alert("Leave Activity should return json, but it didn't.");
                console.log("parsing failed", ex);
            });
    };
};



export const postSignUpLeaveActivity = data => {
    const query = queryString(data);
    return (dispatch, getState) => {
        let userObj = localStorage.getItem("myData");
        let { id: user, token } = JSON.parse(userObj);
        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { token }
        };
        fetchObject(`activity/leave?${query}`, "", options)
            .then(function(response) {
                if (response.ok) {
                    dispatch(leaveActivity);
                    dispatch(getGroupDetail(data.activity));
                    window.location.replace("/myInfo/JoinActivity");
                } else {
                    response.json().then(function(err) {
                        throw new Error(err);
                    });
                }
            })
            .then(function(json) {})
            .catch(function(ex) {
                alert("Leave Activity should return json, but it didn't.");
                console.log("parsing failed", ex);
            });
    };
};



export const resetSearch = data => {
    return (dispatch, getState) => {
        dispatch(updateSearchQuery(data));
    };
};

export const updateSearch = data => {
    return (dispatch, getState) => {
        const query = getState().activity.query;
        const result = Object.assign(query, data);
        dispatch(updateSearchQuery(result));
    };
};
