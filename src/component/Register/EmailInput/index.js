import React from "react";

export default ({ Email, handleEmailChange }) => (
    <div className="form-control">
        <label>E-MAIL：</label>
        <input type="text" value={Email} onChange={handleEmailChange} placeholder="請輸入您的E-MAIL" />
    </div>
);