import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
  } from './styles'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/59289996?v=4' />
                <div>
                    <h4>Bruno Alves</h4>
                    <p> Há 10 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Cópia de Interface da DIO</h4>
                <p>Projeto feito no Curso de React para o bootcamp OrangeTech+... <strong>Saiba Mais</strong>  </p>
            </PostInfo>
            <HasInfo>
                <h4> #React   #Styled-Components  #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}