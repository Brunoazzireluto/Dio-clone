import React from 'react';
import logo from '../../assets/logo-dio.png';
import {Button} from '../Button';
import { useNavigate } from 'react-router-dom';

import {
    BuscarInputContainer,
    Menu,
    MenuRight,
    Container,
    Row,
    Wrapper,
    Input,
    UserPicture,
    ButtonDio
} from './styles'
import { IHeader } from './type';

const Header = ({auth}: IHeader) => {
    const navigate = useNavigate();

    const handleClickhome = () => {
        navigate('/')
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickSignUp = () => {
        navigate('/registration')
    }

    const handleClickHome = () => {
        navigate('/')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <ButtonDio onClick={handleClickhome}>
                    <img src={logo} alt='Logo da Dio' />
                </ButtonDio>
                {auth ? (
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ) : null }

            </Row>
            <Row>
                {auth ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/59289996?v=4' />
                ) : (
                    <>
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" onClick={handleClickSignUp} />
                    </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }