import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '../../components/AppBarLogin';
import NameBox from './components/LoginContainer';
import PwBox from './components/LoginContainer';
import LoginButton from '../../components/CommonButtonLogin'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleUserIdPost = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordPost = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://springboot-developer-env.eba-yxau3zsf.ap-northeast-2.elasticbeanstalk.com/create', {
                userId,
                password,
            });
            console.log('Response:', response.data);
            setErrorMessage('');  // Clear any previous error message
            navigate('/login');  // Navigate to /questions on successful login
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 409) {
                setErrorMessage('사용자가 이미 존재합니다. 다른 이름을 사용해 주세요.');
            } else {
                setErrorMessage('회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.');
            }
        }
    };

    const handleGoChangePassword = () => {
        navigate('/change_pw');
    };

    return (
        <Container>
            <AppBar />
            <BigLogo 
                src="../../../images/logo_icon.svg"
            />
            <ColumnContainer>
                <LoginContainer>
                    <NameBox
                        subtitle={"이름 입력"} 
                        content={userId} 
                        onChange={handleUserIdPost} 
                    />
                    <PwBox
                        subtitle={"비밀번호를 입력하세요."} 
                        content={password} 
                        onChange={handlePasswordPost} 
                    />
                </LoginContainer>
                <LoginButton onClick={handleSubmit} text={"회원가입"}/>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                {/*<GoChangePwButton onClick={handleGoChangePassword} text={"비밀번호 변경하기"}/>*/}
            </ColumnContainer>

        </Container>
    );
};

const BigLogo = styled.img`
    width: 25rem;
    height: 13rem;
    margin-bottom: -50px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;
    margin-left: 0.9rem;
`;

const ErrorText = styled.p`
    color: red;
    margin-top: 1rem;
`;

export default SignUp;
