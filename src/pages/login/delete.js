import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '../../components/AppBarLogin';
import NameBox from './components/LoginContainer';
import DeleteButton from '../../components/CommonButtonLogin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleUserIdPost = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.delete(`http://springboot-developer-env.eba-yxau3zsf.ap-northeast-2.elasticbeanstalk.com/delete_user?userId=${userId}`);
            console.log('Response:', response.data);
            setErrorMessage('');  // Clear any previous error message
            navigate('/login');  // Navigate to /login on successful deletion
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 409) {
                setErrorMessage('사용자가 이미 존재합니다. 다른 이름을 사용해 주세요.');
            } else {
                setErrorMessage('회원 삭제 중 오류가 발생했습니다. 다시 시도해 주세요.');
            }
        }
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
                        subtitle="이름 입력" 
                        content={userId} 
                        onChange={handleUserIdPost} 
                    />
                </LoginContainer>
                <DeleteButton onClick={handleSubmit} text="삭제하기" />
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
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
    margin-top: 4rem;
`;

const ErrorText = styled.p`
    color: red;
    margin-top: 1rem;
`;

export default Delete;
