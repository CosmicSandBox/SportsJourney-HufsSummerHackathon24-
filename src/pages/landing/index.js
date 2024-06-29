import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import AppBarLanding from "../../components/AppBarLanding";
import CommonButton from "../../components/CommonButton";
import { useNavigate } from "react-router-dom";

//navigate사용해서 페이지 넘김 구현 
const Landing = () => {
    const navigate = useNavigate();

    const goToloading = () => {
        navigate('/login')
    }

    return (
        <Container>
            <AppBarLanding />
                <BigLogo
                    src = {"../../../images/logo_icon.svg"}
                />
                <TextContainer> 
                    <StyledParagraph>
                        Sports Journey에서는<br />똑똑한 AI가 나에게 어울리는<br />스포츠를 찾아주고,<br /><br />
                        세계 여러 각국의<br />특색있는 스포츠를 소개해줍니다.<br /><br />
                        또한, 해당 스포츠에 대한<br />튜토리얼과 영상을 제공하여<br />스스로 배울 수 있게<br />도와줍니다.
                        </StyledParagraph>
                </TextContainer>
            <CommonButton onClick = {goToloading} text={"시작!"}/>
        </Container>
    );
};

const BigLogo = styled.img`
  width: 25rem;
  height: 13rem;
  margin-bottom: -50px;
`;
const TextContainer = styled.div`
    text-align: center;
    border-radius: 0.625rem;
    border: 0.188rem solid #003E5F;
    background: rgba(141, 209, 245, 0.28);
    padding: 0.625rem;
    margin-bottom: 0.625rem;
    transform: translate(0,4.375rem);
    width : 90%; 
    margin: 0 auto;

`;


const StyledParagraph =styled.p`
    color: #000;
    text-align: center;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625rem;
    `



const Container = styled.div`
`;

export default Landing;