import React, { FunctionComponent } from 'react'
import {
    MainContainer,
    Action,
    Title
} from './Task.style'

export const Task: FunctionComponent<taskType> = ({title, disableAction, onMove}) => {
  
  return (
    <MainContainer >
      <Action 
        background={'red'}
        disabled={disableAction === 'prev'}
        onClick={() => onMove && onMove('back')}
      >
        Left
      </Action>
      <Title>{title}</Title>
      <Action 
        background={'green'} 
        disabled={disableAction === 'next'}
        onClick={() => onMove && onMove('forward')}
      >
        Right
      </Action>
    </MainContainer>
  )
}
