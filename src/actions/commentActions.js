import { createAction } from 'redux-actions';
import { fetchObject } from './fetchModule'
import {
    GET_ALL_COMMENTS,
    POST_COMMENT,
} from '../constants/actionTypes';

export const getAllComments = createAction('GET_ALL_COMMENTS');
export const postComment = createAction('POST_COMMENT');
export const postCommentFinish = createAction('POST_COMMENT_FINISH');
export const postCommentFailed = createAction('POST_COMMENT_FAILED');

export const fetchAllComments = (id = 0) => {
    let userObj = localStorage.getItem('myData')
    return (dispatch, getState) => {
        fetchObject(`chatroom/${id}`) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          let data = json;           
          dispatch(getAllComments(data));
        }) 
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
}

export const fetchPostComment = (id, type, message) => {
    let userObj = localStorage.getItem('myData')
    return (dispatch, getState) => {
      let hash = {message, [type]: id}
      let chatroom_id = getState().commentReducer.chatroom_data.id;
      let { id: user, token } = JSON.parse(userObj)
      dispatch(postComment())
        
      fetchObject("reply", "", {method: 'POST', body: JSON.stringify(hash), headers: {token}}) 
        .then(function (response) {
          if (response.ok){
            dispatch(postCommentFinish({status: 'ok', comment: {id, type, message}}))
            dispatch(fetchAllComments(chatroom_id));
          } else {
          dispatch(postCommentFailed({state: 'error', comment: {id, type, message, response: response}}))
          }
        }) 
        .catch(function (ex) { 
          dispatch(postCommentFailed({state: 'error', comment: {id, type, message}}))
        }) 
        
    }
}

