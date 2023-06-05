import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 90px; 
    text-align: center;
    margin: 10px;
    font-weight: 700;
`


export const GoHome = styled.p`
  color:  var(--text-error-color);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 25px;
`;

export const Image = styled.img`
    display: block;
    margin: 'auto'
`