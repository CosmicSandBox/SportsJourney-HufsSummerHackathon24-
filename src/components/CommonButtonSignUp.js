import React from "react";
import { styled } from "styled-components";

const CommonButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
};

export default CommonButton;

const Button = styled.button`
    // 디자인 속성
    width: 12.6875rem;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #003E5F;
    font-family: "Gowun Batang-Bold", serif;
    // 정렬 속성

    margin-left: 5.88rem;
    position: absolute;
    bottom: 13rem;
    transform: translate(0,70px);  //민석 버튼 옮김 

    // text prop 속성
    display: flex;
    align-items: center;    //글자 상하 가운데 정렬
    justify-content: center;    // 글자 좌우 가운데 정렬
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 400;
`