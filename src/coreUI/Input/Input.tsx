import React, { FunctionComponent, useState } from 'react'
import {
    Container
} from './Input.style'

export type inputType = {
    type?: string, 
    onSubmit?: (message: string) => void
}

export const Input: FunctionComponent<inputType> = ({type, onSubmit}) => {
  
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    onSubmit && onSubmit(value)
    setValue('')
  }


  return (
    <Container >
      <input 
        type={type} 
        name="message" 
        value={value} 
        onKeyDown={(e) => e.key === 'Enter' && onSubmit && handleSubmit()}
        onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} />
      {
        onSubmit && (
          <button onClick={handleSubmit} >
            Enter
          </button>
        )
      }
    </Container>
  )
}
