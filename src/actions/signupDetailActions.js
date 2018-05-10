import { createAction } from 'redux-actions';
import {
	GET_SIGNUP_DETAIL,
} from "../constants/actionTypes";

const API_URL = "https://bonny-live.me:1337/api/v1";
var _Token =
    "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";
const header = {
    headers: new Headers({
        token: _Token
    })
};

export const getSignUpDetailData = createAction("GET_SIGNUP_DETAIL");


const queryString = params =>
    Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");

export const getSignUpDetail = (data) => {
    return (dispatch) => {
        fetch(`${API_URL}/activity/${data}`, header)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(getSignUpDetailData(json));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}
