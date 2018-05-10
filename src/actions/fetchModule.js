import Config from "../component/config.js";
const userInfo = JSON.parse(localStorage.getItem("myData"));

export const user = userInfo ? userInfo.id : "";
export const token = userInfo ? userInfo.token : "";

export const fetchObject = (edge, queryString = "", options = {}) => {
    let url = `${Config.serverUrl}/api/v1/${edge}`;
    if (queryString !== "") {
        url += `?${queryString}`;
    }
    options = Object.assign({}, { headers: { token } }, options);
    return fetch(url, options);
};

export const ERROR_CODES = {
  "ACTIVITY_IS_FULL": "活動已滿",
  "ACTIVITY_NOT_EXIST": "活動不存在",
  "CHATROOM_NOT_EXIST": "聊天室不存在",
  "E_INVALID_NEW_RECORD": "產生資料失敗，欠缺必填項目或是格式不符",
  "EMAIL_USED": "信箱已被使用",
  "JOIN_NOT_EXIST": "報名不存在",
  "LESSON_NOT_EXIST": "課程不存在",
  "LOGIN_MISMATCH": "使用者帳號密碼錯誤",
  "SOCKET_REQUIRED": "需要使用 socket",
  "TOKEN_INVALID": "token 無效",
  "USER_NOT_EXIST": "使用者不存在",
  "USER_NOT_VEIFIED": "使用者未驗證",
  "VERIFY_CODE_INVALID": "驗證碼無效",
}

export const VALIDATE_ERROR_CODE = (code) => {
  if (ERROR_CODES[code]) return ERROR_CODES[code]
  return "未預期錯誤";
}
