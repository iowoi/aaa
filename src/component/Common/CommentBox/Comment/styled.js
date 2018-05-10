import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
  &.child-comment {
    margin: 10px 0px;
    background: white;
    .comment {
      align-items: center;
    }
    .content {
      color: black;
    }
  }
  
  &.parent-comment {
    margin: 10px;
    .content {
      color: #525252;
    }
  }

  .comment {
    display: flex;
    .content-wrapper {
      flex: 1;
    }
    .content {
      line-height: 24px;
      font-size: 14px;
      color: #525252;
    }
  }

  img.avatar {
    width: 70px;
    height: 70px;
    margin-right: 5px;
    border-radius: 50%;
  }
  
  .user-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .reply-btn {
    display: flex;
    justify-content: flex-end;

    button {
      flex: 0 0 auto;
    }
  }
`
