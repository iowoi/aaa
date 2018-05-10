import React from "react";

export default ({ Password, handlePasswordChange }) => (
    <div className="form-control">
        <input type="text" value={Password} onChange={handlePasswordChange} placeholder="密碼" />
    </div>
);