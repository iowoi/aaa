import React from "react";
import { DateTimePicker, FormControl } from "../../../component/Common";


export default ({ date, time, name, onDateChange, onTimeChange }) => (
    <FormControl>
        <label>打球時間：</label>
        <DateTimePicker date={date} time={time} name={name} onDateChange={onDateChange} onTimeChange={onTimeChange} />
    </FormControl>
);