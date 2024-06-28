import React from "react";
import { styled } from "styled-components";

const MainButton = ({ text, onClick, width, height }) => {
    return (
        <Button onClick={onClick} width={width} height={height}>
            {text}
        </Button>
    );
};

export default MainButton;

const Button = styled.button`
    // 디자인 속성
    width: ${props => props.width || "12.6875rem"};
    height: ${props => props.height || "3.5rem"};
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #164863;
    // 정렬 속성

    // text prop 속성
    display: flex;
    align-items: center;    //글자 상하 가운데 정렬
    justify-content: center;    // 글자 좌우 가운데 정렬
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 400;
`