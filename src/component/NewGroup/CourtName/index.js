import React from "react";
import { FormControl } from "../../../component/Common";

export default ({ name, onChange}) => (
    <FormControl>
        <label>場地名稱：</label>
        <input type="text" value={name} onChange={onChange} placeholder="請輸入場地名稱" />
    </FormControl>
);