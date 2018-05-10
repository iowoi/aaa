import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    width:100%;

    .modal-btn {
      flex: 1;
      border: 2px solid #437CAE;
      background-color: white;
      color: #437CAE;
      padding: 5px 10px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 60px;
      margin: 3px;
      font-family: Microsoft JhengHei;
  
      &:hover {
        color: white;
        background-color: #437CAE;
      };
  
      &.red {
        border: 2px solid #DE263A;
        color: #DE263A;
        background-color: white;
  
        &:hover, &.active {
          color: white;
          background-color:#DE263A;
        }
      }
    }
`
