// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const Container = styled.div`
//   min-height: 100vh;
//   background: var(--auth-bg-color);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 20px;
//   padding-bottom: 20px;

//   @media (max-width: 375px) {
//     width: 100%;
//     padding-left: 20px;
//     padding-right: 20px;
//   }
// `;

// export const CloudButton = styled(Link)`
//   width: 150px;
//   height: 60px;
//   position: absolute;
//   top: 30px;
//   left: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   color: #000;
//   font-size: 14px;
//   font-weight: bold;
//   background: linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
//   background: -webkit-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
//   background: -moz-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
//   background: -ms-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
//   background: -o-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
//   border-radius: 100px;
//   transition: background-color 0.3s ease;
//   z-index: 10;

//   &:after,
//   &:before {
//     content: '';
//     position: absolute;
//     background: inherit;
//     z-index: -1;
//   }

//   &:after {
//     width: 50px;
//     height: 50px;
//     top: -15px;
//     left: 15px;
//     border-radius: 100px;
//   }

//   &:before {
//     width: 90px;
//     height: 90px;
//     top: -45px;
//     right: 25px;
//     border-radius: 100px;
//   }

//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// export const CloudButton = styled(Link)`
//   position: relative;
//   width: 6em;
//   height: 6em;
//   background: #d5dee9;
//   border-width: 0.25em;
//   border-style: solid;
//   border-color: #6e839e;
//   border-radius: 50% 50% 0 0;

//   &:after,
//   &:before {
//     content: '';
//     position: absolute;
//     bottom: -0.25em;
//     background: inherit;
//     border-width: 0.25em;
//     border-style: solid;
//     border-color: #6e839e;
//   }

//   &:after {
//     right: 80%;
//     width: 80%;
//     height: 80%;
//     border-right: none;
//     border-radius: 50% 50% 0;
//   }

//   &:before {
//     left: 80%;
//     width: 60%;
//     height: 60%;
//     border-left: none;
//     border-radius: 50% 50% 50% 0;
//   }

//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background: var(--auth-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 375px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const CloudButton = styled(Link)`
  display: flex;
  position: fixed;
  top: 25px;
  left: 70px;
  width: 5em;
  height: 5em;
  color: rgba(136, 165, 191, 1);
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-width: 0.25em;
  border-style: solid;
  border-color: #abcdef;
  border-radius: 50% 50% 0 0;
  z-index: 9999;

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: -0.25em;
    background: inherit;
    border-width: 0.25em;
    border-style: solid;
    border-color: #abcdef;
  }

  &:after {
    right: 80%;
    width: 80%;
    height: 80%;
    border-right: none;
    border-radius: 50% 50% 0;
  }

  &:before {
    left: 80%;
    width: 60%;
    height: 60%;
    border-left: none;
    border-radius: 50% 50% 50% 0;
  }

  &:hover {
    background-color: #abcdef;
    color: #ffffff;
  }
}`;

export const ButtonText = styled.span`
  display: inline-block;
  line-height: 1;
  z-index: 5;
  padding-top: 25px;
  font-weight: bold;
`;
