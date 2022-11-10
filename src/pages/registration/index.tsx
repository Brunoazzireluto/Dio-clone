import {useNavigate} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {MdEmail, MdLock, MdPerson } from 'react-icons/md'
import {api} from "../../services/api"
import { Container, Column,  Wrapper, Row, Title, TitleLogin, SubtitleLogin, SignupText, InfoText, SignupTextLink, RowSing} from './styles'
import { IFormData } from './types';


const schema = yup.object({
    fullName: yup.string().required('Campo Obrigatorio'),
    email: yup.string().email('Email não é valido').required('Campo Obrigatorio'),
    password: yup.string().required('Campo Obrigatorio').min(3, "Senha muito curta")
  }).required();


const Registration = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode:'onChange'
    });

    console.log(isValid, errors);
    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} =  await api.post('/users',{
                name: formData.fullName,
                email: formData.email,
                senha: formData.password
            });
            if(data){
                navigate('/feed')
            }

        }catch{
            alert("Houve um Errro, tente novamente")
        }
    };


    const handleClickSignIn = () => {
        navigate('/login')
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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='fullName' errorMessage={errors?.fullName?.message} 
                            control={control} placeholder="Nome completo" leftIcon={<MdPerson />}  />
                        <Input name="email" errorMessage={errors?.email?.message} 
                            control={control} placeholder="E-mail" leftIcon={<MdEmail />}  />
                        <Input name="password" errorMessage={errors?.password?.message} 
                            control={control} placeholder='Senha' type="password" leftIcon={<MdLock />}  />
                        <Button title='Criar minha conta' variant='secondary' type='submit' />
                    </form>
                <Column>
                    <InfoText>
                        Ao clicar em "criar minha conta grátis", 
                        declaro que aceito as Políticas de Privacidade 
                        e os Termos de Uso da DIO.
                    </InfoText>
                    <RowSing>
                        <SignupText>Ja Tenho Conta.</SignupText>
                        <SignupTextLink onClick={handleClickSignIn}>Fazer Login</SignupTextLink>
                    </RowSing>
                </Column>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export {Registration}