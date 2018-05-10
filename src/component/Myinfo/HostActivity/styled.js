import styled from 'styled-components';

export const Wrapper = styled.div `
    padding: 10px 30px 10px 10px;
    
    div.header {
      display: flex; 
      align-items: baseline;
      
      > * {
        flex: none
      }
    }

    h2 {
      margin: 0 10px 10px 10px;
    }

    div.btn-group {
      margin-left: auto;
    }
`
