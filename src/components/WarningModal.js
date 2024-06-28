import React from "react";
import styled from "styled-components";
import CommonButton from "./CommonButtonModal";

const Modal = ({ onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ColumnContainer>
                    <Title>주의사항</Title>
                    <Content>
                        - 차량번호가 다르면 <br/>탑승하지 말것 <br/><br/>
                        - 정보와 다른 주최자 <br/>ex) 경로, 성별 등<br />미심쩍은 경우 탑승금지 <br/><br/>
                        - 탑승 전 송금을 <br/>완료하세요!<br/><br/>
                        - 카풀 제공자의 음주<br/>여부 확인<br/><br/>
                        - 사전에 합의된 탑승인원,<br/>경로, 금액을 지키는<br/>매너를 보여주세요<br/><br/>
                        - Boo릉은 카풀 중개<br/>서비스일 뿐이며, <br/> 관련범죄 발생시 <br/> 책임지지 않습니다.  
                    </Content>
                </ColumnContainer>
                <CommonButton text={"숙지하였습니다."} onClick={onClose} />
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
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
`;