// @flow

import { REGISTER_USER } from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';


export  const FetchUserRegister =(store: any) => (next: any) => (action: Object) => {
  if (action.type !== REGISTER_USER) return next(action)
   
  const payload = {
    name: "max9999",
    email: "test08@gmail.com",
    password: "1234",
    country_code: "886",
    phone: "0934123456",
    badminton_level: 1,
    occupation: "pm",
    hobby: [2, 3, 4],
  };

 

  //作Register POST
  fetch('http://bonny-live.me:1337/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
   })
    .then((response) => {
      //ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })  .then(res => action.callback(res, store.dispatch))
    .catch((error) => {
      //這裡可以顯示一些訊息
      console.error(error)
    })
};
  
export default FetchUserRegister
