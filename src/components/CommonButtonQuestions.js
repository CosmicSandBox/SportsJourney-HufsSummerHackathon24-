import React from 'react';
import styled, { keyframes } from 'styled-components';

const CommonButton = ({ text, onClick, isLoading }) => {
  return (
    <Button onClick={onClick} disabled={isLoading}>
      {isLoading ? <Loader /> : text}
    </Button>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`;

const Button = styled.button`
  width: 12.6875rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #164863;
  font-family: "Gowun Batang-Bold", serif;
  position: static;
  bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 400;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export default CommonButton;
