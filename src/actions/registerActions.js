import { createAction } from 'redux-actions';
import { user, token, fetchObject } from './fetchModule'
import fetch from 'isomorphic-fetch';
import {
  REGISTER,
  GET_LEVELS,
  GET_OCCUPATIONS
} from '../constants/actionTypes';


export const register = createAction('REGISTER');
export const getLevelsData = createAction("GET_LEVELS");
export const getoccupationData = createAction("GET_OCCUPATIONS");

const API_URL = "https://bonny-live.me:1337/api/v1";



  

export const fetchRegister = (Body) => {
    console.log(Body);
  return (dispatch, getState) => {
      fetch(`${API_URL}/user/register`, {
          method: 'post',
          body: JSON.stringify(Body)
        })
          .then(function(response) {
              return response.json();
          })
          .then(function(json) {
              dispatch(register(json));
              console.log(json);
              switch (json.code) {
                case 'EMAIL_USED': {
                 alert(json.code);
                 console.log(json); 
                  break
                }
                case 'E_INVALID_NEW_RECORD': {
                  alert(json.code);
                  console.log(json); 
                  break
                }
                default:
                // setter
                //localStorage.setItem('Register', JSON.stringify(json));
                alert('success');
                window.location.href= "Login";    
                console.log(json);            
                break;
              }

          })
          .catch(function(ex) {
              console.log("Register failed", ex);
          });
  };
};


export const getlevellist = () => {

  return (dispatch, getState) => {
      fetch(`${API_URL}/level/list`)
          .then(function(response) {
              return response.json();
          })
          .then(function(json) {
              dispatch(getLevelsData(json.data));

          })
          .catch(function(ex) {
              console.log("parsing failed", ex);
          });
  };
};

export const getoccupationlist = () => {
    return (dispatch, getState) => {
        fetch(`${API_URL}/occupation/list`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getoccupationData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
  };
