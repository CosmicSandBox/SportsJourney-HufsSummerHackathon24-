import React from "react";
import styled from "styled-components";
import CommonButton from "./CommonButtonModal";

const Modal = ({ onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ColumnContainer>
                    <Title>만든 이들</Title>
                    <Content>
                        똑살 팀<br/><br/>
                        김재우, 오현우
                    </Content>
                </ColumnContainer>
                <CommonButton text={"닫기."} onClick={onClose} />
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    align-items: center;
    margin-bottom: 10rem;
`;

const Title = styled.p`
    width: 7rem;
    height: 2rem;
    flex-shrink: 0;
    color: #000;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #000;
    font-family: "Gowun Batang-Bold", serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 50000;
    line-height: normal;
`;

const Content = styled.p`
    color: #000;
    font-family: "Gowun Batang", serif;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    width: 20.625rem;
    height: 46.5625rem;
    background: rgba(141, 209, 245, 0.95);
    border: 1px solid #164863;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10%;
    border-color: black;
    border-width: 0.2rem;
`;