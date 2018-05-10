import React from "react";
import CapitalWord from "../CapitalProtection/CapitalWord/";
import { Wrapper, TimePickerWrapper } from "./styled";

export default () => {
    console.log(this)
    const handleInputChange = () =>{}
    return (
        <Wrapper>
            <label>個資保護聲明</label>
        <CapitalWord />
        </Wrapper>
    );
};
