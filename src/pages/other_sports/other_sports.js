import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestAgainButton from "../../components/LongButton";
import AppBar from '../../components/AppBar';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OtherSports = () => {
    const navigate = useNavigate();
    const [sportsData, setSportsData] = useState([]);

    useEffect(() => {
        const fetchSportsData = async () => {
            try {
                const response = await axios.get('https://springboot-developer-env.eba-yxau3zsf.ap-northeast-2.elasticbeanstalk.com/get_all_sports');
                setSportsData(response.data);
            } catch (error) {
                console.error('Error fetching sports data:', error);
            }
        };

        fetchSportsData();
    }, []);

    const handleTestAgain = () => {
        navigate("/questions");
    };

    const handleSportClick = (sport) => {
        navigate("/aboutsport", { state: { sportData: sport } });
    };

    return (
        <RootContainer>
            <AppBar/>

            <TitlePhotoWrapper>
                <Title>여러가지 운동을 <br/> 선택하여 학습하세요.</Title>
            </TitlePhotoWrapper>
            
            <GapContainerColumn>
                {sportsData.map((sport, index) => (
                    <TextContainer key={index} onClick={() => handleSportClick(sport)}> 
                        <StyledParagraph>{sport.name} - {sport.country}</StyledParagraph>
                    </TextContainer>
                ))}
            </GapContainerColumn>

            <ButtonWrapper>
                <TestAgainButton onClick={handleTestAgain} text="다시 테스트 하러 가기" width="20rem" height="3.5rem"/>
            </ButtonWrapper>
        </RootContainer>
    );
};

const GapContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3.2rem;
    width: 24rem;
`;

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
    margin-top: 2rem;
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
    border: 0.188rem solid #003E5F;
    background: rgba(141, 209, 245, 0.28);
    padding: 0.625rem;
    margin-bottom: 0.625rem;
    width: 90%; 
    margin: 0 auto;
    cursor: pointer; /* Add cursor pointer to indicate clickable */
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

export default OtherSports;
