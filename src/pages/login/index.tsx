import {useNavigate} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {MdEmail, MdLock } from 'react-icons/md'
import {api} from "../../services/api"
import { Container, Column,  Wrapper, Row, Title, TitleLogin, SubtitleLogin, ForgotText, SigninText} from './styles'
import { IFormData } from './types';


const schema = yup.object({
    email: yup.string().email('Email não é valido').required('Campo Obrigatorio'),
    password: yup.string().required('Campo Obrigatorio').min(3, "Senha muito curta")
  }).required();


const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    console.log(isValid, errors);
    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválidos')
            }
        }catch{
            alert("Houve um Errro, tente novamente")
        }
    };


    

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