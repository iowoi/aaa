import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    width:100%;
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .social-item {
      display: flex;
      align-items: center;
      margin-right: 10px;
      padding-left: 0px;

      &:first-child {
        margin-left: 10px;
      }
    };

    img {
      width: 24px;
      height: 24px;
    };
`
