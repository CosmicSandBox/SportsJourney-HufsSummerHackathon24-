import React, { useState } from 'react';
import styled from "styled-components";
import AppBar from '../../components/AppBarLogin';
import NameBox from './components/LoginContainer';
import CurrentPw from './components/LoginContainer';
import PwBox from './components/LoginContainer';
import ChangePwConfirmButton from '../../components/CommonButton';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChangePw = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPw] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUserIdPost = (e) => {
        setUserId(e.target.value);
    };

    const handleCurrentPasswordPost = (e) => {
        setPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPw(e.target.value);
    };

    const handleSubmit = async () => {
        setError('');  // Clear any previous errors
        try {
            const response = await axios.put(
                'https://hyunwoo9930.shop/update_password',
                null,
                {
                    params: {
                        userId: userId,
                        password: password,
                        newPassword: newPassword
                    }
                }
            );
            console.log('Response:', response.data);
            navigate('/login');
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setError('현재 비밀번호가 틀렸습니다.');
                } else if (error.response.status === 404) {
                    setError('user가 존재하지 않습니다.');
                } else {
                    setError('비밀번호 변경에 실패했습니다.');
                }
            } else {
                setError('네트워크 오류가 발생했습니다.');
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
                        subtitle={"이름을 입력하세요."} 
                        content={userId} 
                        onChange={handleUserIdPost} 
                    />
                    <CurrentPw
                        subtitle={"현재 비밀번호를 입력하세요."} 
                        content={password} 
                        onChange={handleCurrentPasswordPost}
                    />
                    <PwBox
                        subtitle={"변경할 비밀번호를 입력하세요."} 
                        content={newPassword} 
                        onChange={handleNewPasswordChange} 
                    />
                </LoginContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ChangePwConfirmButton onClick={handleSubmit} text={"변경하기"} />
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

const ErrorMessage = styled.div`
    color: red;
    margin-top: 1rem;
    text-align: center;
`;

export default ChangePw;
