import React from 'react'
import {Iconcontainer, InputContainer, InputText} from './styles'


const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        { leftIcon ? (<Iconcontainer>{leftIcon}</Iconcontainer>) : null }
        <InputText {...rest}/>
    </InputContainer>
  )
}

export {Input};