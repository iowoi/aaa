import React from "react";

export default ({ value, onChange }) => (
    <div className="form-control">
        <label>團名：</label>
        <input type="text" value={value} onChange={onChange} placeholder="請輸入您揪團的團名" />
    </div>
);