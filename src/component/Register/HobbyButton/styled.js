import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    

        
    .btn {
        width:30%
        border: 1px solid;
        background-color: white;
        color: black;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 60px;
        margin:4px
        font-family: Microsoft JhengHei
    }

    .checkbox{
        margin-right:100px;
        padding: 14px 28px;
    }


    .cktext{
        font-size: 18px;
        padding: 20px 20px;
        font-weight: bold;
        color: #000000;
        font-family: Microsoft JhengHei
      }
 

    .group:hover {
        background-color: #C7C7C7;
        color: white;
      }

   
      .hr {
        color: #000000;
        margin-top:10%
    }
    
    div label input {
        margin-right:100px;
     }
     body {
         font-family:sans-serif;
     }
     
     #ck-button {
        width:20%
        border: 1px solid;
        background-color: white;
        color: black;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 60px;
        margin:4px
        font-family: Microsoft JhengHei
     }
     
     #ck-button:hover {
         background:grey;
     }
     
     #ck-button label {
         float:left;
         width:4.0em;
     }
     
     #ck-button label span {
         text-align:center;
         padding:3px 0px;
         display:block;
     }
     
     #ck-button label input {
         position:absolute;
         top:0px;
     }
     
     #ck-button input:checked + span {
      background-color: #C7C7C7;
        color: white;
     }



`





