import React, { FunctionComponent } from 'react'
import { Task } from 'components/Task/Task'
import { Input } from 'coreUI/Input/Input'
import { 
  Container,
  Content,
  ListContainer,
  ActionsContainer
} from './Board.style'
import { useBoard } from 'store/board-context'


export const Board: FunctionComponent = () => {

  const {state, dispatch} = useBoard()
  const { toDo, inProgress, done } = state.tasks

  const handleSubmitTask = (value:string) => {
    dispatch({
      type: 'add', 
      to: 'toDo',
      task: { 
        title: value
      }
    })
  }

  return (
    <div>
      <Container>
        <Content>
          <ListContainer>
            <h2>To Do</h2>
            { 
              toDo?.map((task:taskType) => (
                <Task 
                  key={task.id}
                  title={task.title} 
                  disableAction='prev' 
                  onMove={() => dispatch({
                    type: 'move',
                    task,
                    from: 'toDo',
                    to: 'inProgress'
                  })}
                />
              ))
            }
          </ListContainer>
          <ListContainer>
            <h2>In Progress</h2>
            { 
              inProgress?.map((task:taskType) => (
                <Task 
                  key={task.id}
                  title={task.title} 
                  onMove={(direction) => dispatch({
                    type: 'move',
                    task,
                    from:'inProgress',
                    to: direction === 'back' ? 'toDo' : 'done'
                  })}
                />
              ))
            }
          </ListContainer>
          <ListContainer>
          <h2>Done</h2>
          { 
            done?.map((task:taskType) => (
              <Task 
                key={task.id}
                title={task.title} 
                disableAction='next' 
                onMove={() => dispatch({
                  type: 'move',
                  task,
                  from: 'done', 
                  to: 'inProgress'
                })}
              />
            ))
          }
        </ListContainer>
        </Content>
        <ActionsContainer>
          <Input
            type="text"
            onSubmit={handleSubmitTask}
          />
        </ActionsContainer>
      </Container>
    </div>
  )
}
