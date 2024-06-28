import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
    
    const navigate = useNavigate();
    
    // 로고 클릭시 홈화면으로 이동
    const goToHome = () => {
        console.log("gotohome")
        navigate("/");
    };

    return (
        <Container>
            {/*<Logo 
                src="/images/logo_icon.svg"
                onClick={goToHome}
            />*/}
        </Container>
    );
};

export default AppBar;

const Container = styled.div`
    width: 24.375rem;
    height: 4.375rem;
    display: flex; 
    flex-direction: row;
    
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: space-around;
    background: #E3F3FB;
`;


const Logo = styled.img`
    cursor: pointer;
    width: 8.75rem;
    height: 8rem;

    // 부모 요소(Container: relative)의 가로 세로 중앙에 절대 위치에 고정
    left: 50%;
    top: 50%;
`;