import React from "react";

export default ({ AuthPassword, handlePasswordChange }) => (
    <div className="form-control">
        <label>密碼確認：</label>
        <input type="text" value={AuthPassword} onChange={handlePasswordChange} placeholder="請再次輸入您的密碼" />
    </div>
);