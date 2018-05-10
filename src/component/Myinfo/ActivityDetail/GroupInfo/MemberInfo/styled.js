import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  > .user-info {
    flex: auto;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }

  img.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`
