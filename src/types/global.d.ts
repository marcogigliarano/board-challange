type taskType = {
    id?: number, 
    title?: string,
    disableAction?: string
    onMove?: (direction: string) => void
}

type ActionAddTask = {type: 'add', to?: string ,task: taskType}
type ActionMoveTask = {type: 'move', to: string, task: taskType, from: string}

type Action = ActionAddTask | ActionMoveTask

type Dispatch = (action: Action) => void

type State = {
    tasks: { [key:string]: taskType[] }
}
