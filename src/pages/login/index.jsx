import {useNavigate} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {MdEmail, MdLock } from 'react-icons/md'
import { Container, Column,  Wrapper, Row, Title, TitleLogin, SubtitleLogin, ForgotText, SigninText} from './styles'


const Login = () => {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/feed')
    }
    

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias e 
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input placeholder='Senha' type="password"  leftIcon={<MdLock />} />
                        <Button title='Entrar' variant='secondary' onClick={handleClickLogin} type='button' />
                    </form>
                <Row>
                    <ForgotText>Esqueci minha senha</ForgotText>
                    <SigninText>Criar Conta</SigninText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export {Login}