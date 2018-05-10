import { createAction } from 'redux-actions';
import { user, token, fetchObject } from "./fetchModule";
import {
    CREATE_GROUP,
    GET_LEVELS,
    CREATE_FEATURE,
    GET_JOINED_LIST,
    EDIT_GROUP_DATA,
} from '../constants/actionTypes';

export const getLevelsData = createAction("GET_LEVELS");
export const createGroupData = createAction(CREATE_GROUP);
export const editGroupData = createAction(EDIT_GROUP_DATA);
export const createFeatureData = createAction("CREATE_FEATURE");
export const getJoinedListData = createAction("GET_JOINED_LIST");


export const createGroup = (data) => {
    debugger
    return (dispatch) => {
        fetchObject(`activity/`, "", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(createGroupData(json.data));
                //debugger
                window.location.href = "/myInfo/hostActivity"
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const editGroup = (data) => {
    return (dispatch) => {
        dispatch(editGroupData(data));
    }
}

export const updateGroup = (data) => {
    return (dispatch) => {
        delete data.user
        fetchObject(`activity/${data.id}`, "", {
            method: "PUT",
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(createGroupData(json.data));
                window.location.href = `/myInfo/activityDetail/${data.id}`
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const createFeature = (data) => {
    return (dispatch) => {
        fetchObject(`tag`, '', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                var payload = { name: data.name, id: json.id };
                dispatch(createFeatureData(payload));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const getLevels = () => {
    return (dispatch) => {
        fetchObject(`level/list`, '', {
            method: 'GET',
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(getLevelsData(json.data));
            })
            .catch(function (ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const getJoinedList = () => {
    return (dispatch) => {
        fetchObject(`join/list`, '', {
            method: 'GET',
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(getJoinedListData(json.data));
            })
            .catch(function (ex) {
                console.log("parsing failed", ex);
            });
    };
};
