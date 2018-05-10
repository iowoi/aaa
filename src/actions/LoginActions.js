import { createAction } from "redux-actions";
import { hashHistory  } from 'react-router';  //引入路由函数

import {
    LOGIN,
} from "../constants/actionTypes";

export const userlogin = createAction("LOGIN");


const API_URL = "https://bonny-live.me:1337/api/v1";

// const Body = {
//   email: 'max12345@gmail.com',
//   password:'1234'
//   };
  

export const fetchlogin = (Body) => {
    return (dispatch, getState) => {
        fetch(`${API_URL}/user/login`, {
            method: 'post',
            body: JSON.stringify(Body)
          })
            .then(function(response) {
                //debugger
                if (response.status >= 404 && response.status < 600) {
                    throw new Error("Bad response from server");
                  }
                return response.json();
            })
            .then(function(json) {
                //debugger
                console.log(json);
                dispatch(userlogin(json));

                if(json.code == 'LOGIN_MISMATCH')
                {
                    alert(json.details);  
                }else{
                 // setter
                localStorage.setItem('myData', JSON.stringify(json));
                window.location.href= "MyInfo";             
                    
                }
            })
            .catch(function(ex) {
               // alert(ex);
                console.log("login failed", ex);
            });
    };
};
