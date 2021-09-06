function tasksReducer(state: State, action: Action) {

    const addTask = (to: string = 'toDo', task: taskType, state: State) => {
        const newTasks = {
            ...state.tasks,
            [to]: state.tasks[to]?.concat({...action?.task, id: new Date().getTime()})
        }

        return newTasks
    }

    const removeTask = (from: string, task: taskType, state: State) => {
        const tasksCopied = [...state.tasks[from]]
        const removeIndex = tasksCopied.map(item => item.id).indexOf(task.id);
        tasksCopied.splice(removeIndex, 1);
        
        const newTasks = {
            ...state.tasks,
            [from]: tasksCopied
        }

        return newTasks
    }


    switch (action.type) {
        case 'add': {
            return {tasks: addTask(action.to, action.task, state)}
        }
        case 'move': {
            const newTaskAdded = addTask(action.to, action.task, state)
            const newTasks = removeTask(action.from, action.task, {tasks: newTaskAdded})
            return {
                tasks: newTasks
            }
        }
        default: {
            throw new Error(`Unhandled action type`)
        }
    }
}

export default tasksReducer