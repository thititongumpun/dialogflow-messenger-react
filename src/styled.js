import styled, { keyframes } from "styled-components";
import { ReactComponent as ReactLogo } from './logo.svg';

export const Header = styled.div`
  font-size: 25px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  background-color: #282c34;
  color: wheat;
`;

export const AppTitle = styled.h1`
  margin-bottom: 4px;
  margin-top: 50px;
  width: 100%;
`;

export const Footer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  color: wheat;
  background-color: #282c34;
  
`

export const Name = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled(ReactLogo)`
  display: inline-block;
  animation: ${rotate} 15s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;