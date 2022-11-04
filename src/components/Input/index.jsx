import React from 'react'
import { Controller } from "react-hook-form";
import {Iconcontainer, InputContainer, InputText, ErrorText} from './styles'


const Input = ({leftIcon, name, control, errorMessage,  ...rest}) => {
  return (
    <>
    <InputContainer>
        { leftIcon ? (<Iconcontainer>{leftIcon}</Iconcontainer>) : null }
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest}/>}
        />
    </InputContainer>
    {errorMessage ?  <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export {Input};