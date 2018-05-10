import React from "react";

export default ({ Password, handlePasswordChange }) => (
    <div className="form-control">
        <label>密碼：</label>
        <input type="text" value={Password} onChange={handlePasswordChange} placeholder="請輸入6~25英文數字混和密碼" />
    </div>
);