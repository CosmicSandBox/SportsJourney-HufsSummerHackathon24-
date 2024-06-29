import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '../../components/AppBarQuestions';
import CommonButton from "../../components/CommonButtonQuestions";
import SelectThreeBox from "./components/SelectThreeBox";
import SelectSixBox from "./components/SelectSixBox";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Question = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);  // 로딩 상태 추가

    const handleGoAboutSport = () => {
        navigate("/aboutsport");
    }
    
    const [answers, setAnswers] = useState({
        active: '',
        teamwork: '',
        inout: '',
        force: '',
        strategy: '',
        culture: '',
        warning: '',
        technology: '',
        rule: '',
        interaction: '',
    });

    const handleSelect = (field) => (answer) => {
        setAnswers((prev) => ({ ...prev, [field]: answer }));
    };

    const handleGet = async () => {
        setIsLoading(true);  // 로딩 상태 시작
        try {
            const response = await axios.get('https://hyunwoo9930.shop/bot/sports_tendency_survey_chat?', { params: answers });
            console.log('Response:', response.data);

            // Navigate to AboutSport with data
            navigate("/aboutsport", {
                state: { sportData: response.data }  // Pass the data to AboutSport component
            });

        } catch (error) {
            console.error('Error:', error);
            // Handle error response
        } finally {
            setIsLoading(false);  // 로딩 상태 종료
        }
    };

    return (
        <RootContainer>
            <Container>
                <AppBar/>
                <SelectThreeBox question="활동 수준" answer1="매우 활동적" answer2="보통 활동적" answer3="덜 활동적" onSelect={handleSelect('active')}/>
                <SelectThreeBox question="팀워크 선호도" answer1="팀 선호" answer2="개인 선호" answer3="상관없음" onSelect={handleSelect('teamwork')}/>
                <SelectThreeBox question="실내 / 실외" answer1="실내 운동" answer2="실외 운동" answer3="상관없음" onSelect={handleSelect('inout')}/>
                <SelectThreeBox question="운동 강도" answer1="고강도 운동" answer2="중강도 운동" answer3="저강도 운동" onSelect={handleSelect('force')}/>
                <SelectThreeBox question="전략적 사고 필요 운동 선호도" answer1="선호한다" answer2="보통" answer3="선호안함" onSelect={handleSelect('strategy')}/>
                <SelectThreeBox question="문화적 관심" answer1="매우 활동적" answer2="보통 활동적" answer3="덜 활동적" onSelect={handleSelect('culture')}/>
                <SelectThreeBox question="위험 감수하는 것의 선호도" answer1="선호한다" answer2="보통" answer3="선호안함" onSelect={handleSelect('warning')}/>
                <SelectThreeBox question="새로운 기술 배움에 대한 선호도" answer1="선호한다" answer2="보통" answer3="선호안함" onSelect={handleSelect('technology')}/>
                <SelectThreeBox question="규칙 및 규율에 대한 선호도" answer1="선호한다" answer2="보통" answer3="선호안함" onSelect={handleSelect('rule')}/>
                <SelectSixBox question="특정 문화에 대한 관심이 있나요?" answer1="아시아" answer2="영어권" answer3="유럽" answer4="북유럽" answer5="중남미" answer6="상관없음" onSelect={handleSelect('interaction')}/>
                <ButtonWrapper>
                    <CommonButton text="정보 입력 완료" onClick={handleGet} isLoading={isLoading} />
                </ButtonWrapper>
            </Container>
        </RootContainer>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 2.1rem;
    margin-bottom: 2rem;
    justify-content: center;
`;

const RootContainer = styled.div`
  width: 390px;
  max-width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  background-color: #f6fcff;
  overflow: hidden;

    // 스크롤 바 숨기기
    &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-bottom: 1.5rem;
  overflow-x: hidden;
  gap: 2rem;

    // 스크롤 바 숨기기
    &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default Question;
