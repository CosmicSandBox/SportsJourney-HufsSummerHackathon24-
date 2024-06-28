import React from "react";
import styled from "styled-components";
import TestAgainButton from "../../components/LongButton";
import OtherSportsButton from "../../components/LongButton";
import AppBar from "../../components/AppBar";
import { useNavigate, useLocation } from "react-router-dom";

const Tutorials = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { steps, name } = location.state; // location state에서 steps와 name 추출

  // step 이름에서 숫자를 추출하는 헬퍼 함수
  const extractNumber = (step) => {
    const match = step.name.match(/^\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // 숫자를 기준으로 오름차순 정렬
  const sortedSteps = [...steps].sort((a, b) => extractNumber(a) - extractNumber(b));

  const handleTestAgain = () => {
    navigate("/questions");
  };

  const handleGoMoreSports = () => {
    navigate("/others");
  };

  const handleTutorialSelect = (step) => {
    navigate("/tutorial_selected", {
      state: {
        youtubeUrl: step.youtubeUrl,
        description: step.description,
        title: step.name,
      },
    });
  };

  return (
    <RootContainer>
      <AppBar />
      <TitlePhotoWrapper>
        <Title>{name}의 튜토리얼을 <br /> 선택하여 학습하세요.</Title>
      </TitlePhotoWrapper>

      <GapContainerColumn>
        {sortedSteps.map((step, index) => (
          <TextContainer key={index} onClick={() => handleTutorialSelect(step)}>
            <StyledParagraph>{step.name}</StyledParagraph>
          </TextContainer>
        ))}
      </GapContainerColumn>

      <ButtonWrapper>
        <TestAgainButton
          onClick={handleTestAgain}
          text="다시 테스트 하러 가기"
          width="20rem"
          height="3.5rem"
        />
        <OtherSportsButton
          onClick={handleGoMoreSports}
          text="다른 스포츠들 더 보러가기"
          width="20rem"
          height="3.5rem"
        />
      </ButtonWrapper>
    </RootContainer>
  );
};

const GapContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 24rem;
`;

const TitlePhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: -2rem;
  margin-top: 2.4rem;
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

    // 스크롤 바 숨기기
    &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  color: #000;
  text-align: center;
  font-family: "Gowun Batang";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
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
  height: 12.01075rem;
  flex-shrink: 0;
  border-radius: 2.6875rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export default Tutorials;
