import React from "react";

export default ({ Name, handleClick }) => (
    <div className="form-control">
        <label>姓名：</label>
        <input type="text" value={Name} onChange={handleClick} placeholder="請輸入您的姓名" />
    </div>
);