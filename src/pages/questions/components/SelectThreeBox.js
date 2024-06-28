import React, { useState } from 'react';
import styled from "styled-components";

const SelectThreeBox = ({ question, answer1, answer2, answer3, onSelect }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSelect = (answer) => {
        setSelectedAnswer(answer);
        onSelect(answer);
    };

    return (
        <Container>
            <Question>{question}</Question>
            <AnswerBoxRow>
                <Answer 
                    isSelected={selectedAnswer === answer1} 
                    onClick={() => handleSelect(answer1)}
                >
                    {answer1}
                </Answer>
                <Answer 
                    isSelected={selectedAnswer === answer2} 
                    onClick={() => handleSelect(answer2)}
                >
                    {answer2}
                </Answer>
                <Answer 
                    isSelected={selectedAnswer === answer3} 
                    onClick={() => handleSelect(answer3)}
                >
                    {answer3}
                </Answer>
            </AnswerBoxRow>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Question = styled.div`
    width: 22rem;
    height: 2rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const AnswerBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const Answer = styled.div`
    width: 6.75rem;
    height: 3.8125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: ${(props) => (props.isSelected ? '#003E5F' : 'rgba(210, 236, 250, 0.00)')};
    color: ${(props) => (props.isSelected ? '#fff' : '#000')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default SelectThreeBox;
