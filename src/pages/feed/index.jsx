import {Link} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles'


const Feed = () => {
    return (
    <>
        <Header auth={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={93} name="Bruno Alves" image='https://avatars.githubusercontent.com/u/59289996?v=4' />
                <UserInfo percentual={86} name="Bruno Alves" image='https://avatars.githubusercontent.com/u/59289996?v=4' />
                <UserInfo percentual={79} name="Bruno Alves" image='https://avatars.githubusercontent.com/u/59289996?v=4' />
                <UserInfo percentual={68} name="Bruno Alves" image='https://avatars.githubusercontent.com/u/59289996?v=4' />
                <UserInfo percentual={59} name="Bruno Alves" image='https://avatars.githubusercontent.com/u/59289996?v=4' />
            </Column>
        </Container>
    </>
    )
}

export {Feed}