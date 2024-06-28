import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import TutorialButton from "../../components/LongButton";
import OtherSportsButton from "../../components/LongButton";
import { useLocation, useNavigate } from "react-router-dom";

const AboutSportDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sportData } = location.state; // Extracting sportData from location state

  const handleGoSeeTutorials = () => {
    navigate("/tutorials", { state: { steps: sportData.steps, name: sportData.name } });
  };
  
  const handleGoMoreSports = () => {
    navigate("/others");
  };

  return (
    <RootContainer>
      <AppBar />
      <TitlePhotoWrapper>
        <Title>
          당신에게 맞는 운동은 <br /> {sportData.country}의 스포츠인 <br />
          {sportData.name}입니다.
        </Title>
        <Photo imageUrl={sportData.imageUrl} />
      </TitlePhotoWrapper>
      <TextContainer>
        <StyledParagraph>{sportData.description}</StyledParagraph>
      </TextContainer>
      <ButtonWrapper>
        <TutorialButton
          onClick={handleGoSeeTutorials}
          text="스포츠 튜토리얼 보러가기!"
          width="20rem"
          height="3.5rem"
        />
        <OtherSportsButton
          onClick={handleGoMoreSports}
          text="다른 스포츠들 더 보러가기!"
          width="20rem"
          height="3.5rem"
        />
      </ButtonWrapper>
    </RootContainer>
  );
};

const TitlePhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: -2rem;
  margin-top: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6.5rem;
  margin-bottom: 2rem;
`;

const RootContainer = styled.div`
  width: 390px;
  max-width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TextContainer = styled.div`
  text-align: center;
  border-radius: 0.625rem;
  border: 0.188rem solid #003e5f;
  background: rgba(141, 209, 245, 0.28);
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  transform: translate(0, 4.375rem);
  width: 90%;
  margin: 0 auto;
`;

const StyledParagraph = styled.p`
  color: #000;
  text-align: center;
  font-family: "Gowun Batang";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  transform: rotate(0.075deg);
  flex-shrink: 0;
  color: #000;
  font-family: "Gowun Batang";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0875rem;
`;

const Photo = styled.div`
  width: 20.625rem;
  height: 17rem;
  flex-shrink: 0;
  border-radius: 2.6875rem;
  background: url(${(props) => props.imageUrl}) lightgray 50% / cover no-repeat;
`;

export default AboutSportDetail;
