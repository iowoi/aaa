import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    select{
        width:95%
    };
    .image-uploader-section{
        width: 110%;
        margin-left:-6%
    }    
    .features{
        border: 1px solid
        padding: 8px 10px 8px 10px
        border-color: #D8D8D8
        border-radius: 20px
        text-align: center
        margin: 7px
        width: 80px
        display:inline-block
    }
    .view_follow{
        text-align: center
    }
    .banner{
        background-color: #D8D8D8;
        width: 100%;
        height: 200px;
    }
    .banner-avatar{
        position: relative
        margin-top: 25%;
        left: 20px;
    }
    .avatarWrapper{
        width:30%;
        float: left
    }
    .userName{
        position: relative
        font-weight: bolder;
        font-size: 26px;
        top: 30px;
        left: 30px;
    }
    .userNameWrapper{
     
    }

    .b1{
        text-align: center;
        width:100%
        background-color: #D5D5D5;
        border: 0 none
        padding-top: 10PX
        padding-bottom: 10PX
        font-size: large
        font-weight: bolder
        color: #fff
        border-radius: 5px
        font-weight: bolder
        img{
          padding-left: 5px;
          top: 5px;
          position: relative;
        }
    }

    .share{
        position: relative;
        left: 10px;
        top: 5px;
        cursor: pointer;
    }
`
