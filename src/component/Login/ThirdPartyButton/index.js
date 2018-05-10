import React, { Component } from "react";
import { FormControl } from "../../../component/Common";
import { Wrapper } from './styled';


export default class CourtFeatures extends Component {

    render() {
       
        return (
            <Wrapper>
                <label class="text">其他登入方式:</label>
                <div>
                <button class="line">LINE</button>
                <button class="facebook">facebook</button>
                <button class="google">Google+</button>
                </div>
                <hr className='hr'/>
            </Wrapper>
        );
    }
}
