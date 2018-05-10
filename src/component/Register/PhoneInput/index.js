import React from "react";

export default ({ Phone, handlePhoneChange }) => (
    <div className="form-control">
        <label>行動電話：</label>
        <input type="text" value={Phone} onChange={handlePhoneChange} placeholder="請輸入您的行動電話" />
    </div>
);