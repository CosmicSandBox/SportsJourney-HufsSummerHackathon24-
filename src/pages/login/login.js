import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '../../components/AppBarLogin';
import NameBox from './components/LoginContainer';
import PwBox from './components/LoginContainer';
import LoginButton from '../../components/CommonButtonLogin';
import SignUpButton from '../../components/CommonButtonSignUp';
import GoChangePwButton from '../../components/CommonButtonChange';
import DeleteButton from '../../components/CommonButtonDelete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleIdPost = (e) => {
        setId(e.target.value);
    };

    const handlePasswordPost = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get('https://hyunwoo9930.shop/login?', {
                params: {
                    id,
                    password
                }
            });
            console.log('Response:', response.data);
            setErrorMessage('');  // Clear any previous error message
            navigate('/questions');  // Navigate to /questions on successful login
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
                } else {
                    setErrorMessage('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
                }
            } else {
                setErrorMessage('네트워크 오류가 발생했습니다.');
            }
        }
    };

    const handleGoChangePassword = () => {
        navigate('/change_pw');
    };

    const handleGoSignUp = () => {
        navigate('/signup');
    };

    const handleGoDelete = () => {
        navigate('/delete');
    };

    return (
        <Container>
            <AppBar />
            <BigLogo 
                src = "../../../images/logo_icon.svg"
            />
            <ColumnContainer>
                <LoginContainer>
                    <NameBox
                        subtitle={"아이디 입력"} 
                        content={id} 
                        onChange={handleIdPost} 
                    />
                    <PwBox
                        subtitle={"비밀번호를 입력하세요."} 
                        content={password} 
                        onChange={handlePasswordPost} 
                    />
                </LoginContainer>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <ButtonContainer>
                    <LoginButton onClick={handleSubmit} text={"로그인"}/>
                    <SignUpButton onClick={handleGoSignUp} text={"회원가입"}/>
                    <GoChangePwButton onClick={handleGoChangePassword} text={"비밀번호 변경"}/>
                    <DeleteButton onClick={handleGoDelete} text={"아이디 삭제"}/>
                </ButtonContainer>
            </ColumnContainer>
        </Container>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
`;

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
    margin-top: 3rem;
    gap: 2rem;
    margin-left: 0.9rem;
`;

const ErrorText = styled.p`
    color: red;
    margin-top: 1rem;
    margin-left: 1rem;  // Add margin-left for indentation
`;

export default Login;
