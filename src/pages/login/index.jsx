import {useNavigate} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {MdEmail, MdLock } from 'react-icons/md'
import { Container, Column,  Wrapper, Row, Title, TitleLogin, SubtitleLogin, ForgotText, SigninText} from './styles'


const schema = yup.object({
    email: yup.string().email('Email não é valido').required('Campo Obrigatorio'),
    password: yup.string().required('Campo Obrigatorio').min(3, "Senha muito curta")
  }).required();


const Login = () => {

    const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    console.log(isValid, errors);
    const onSubmit = data => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}  />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='Senha' type="password" leftIcon={<MdLock />}  />
                        <Button title='Entrar' variant='secondary' type='submit' />
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