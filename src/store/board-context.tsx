import React from 'react'
import initialState from './initialState'
import { tasksReducer } from 'reducers'

type BoardProviderProps = {children: React.ReactNode}

const BoardStateContext = React.createContext<{state: State; dispatch: Dispatch} | undefined>(undefined)

function BoardProvider({children}: BoardProviderProps) {
    const [state, dispatch] = React.useReducer(tasksReducer, initialState)

    const value = {state, dispatch}
    
    return (
        <BoardStateContext.Provider value={value}>
            {children}
        </BoardStateContext.Provider>
    )
}

function useBoard() {
    const context = React.useContext(BoardStateContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {BoardProvider, useBoard}