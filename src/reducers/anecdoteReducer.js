import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'anecdotes/newAnecdote',
      payload: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = {
      ...anecdote, 
      votes: anecdote.votes + 1 
    }

    await anecdoteService.updateAnecdote(newAnecdote)
    dispatch({
      type: 'anecdotes/changeAnecdote',
      payload: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'anecdotes/initAnecdotes',
      payload: anecdotes
    })
  }
}


const anecdoteSlicer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    initAnecdotes(state, action) {
      return action.payload
    },
    newAnecdote(state, action) {
      state.push(action.payload)
    },
    changeAnecdote(state, action) {
      return state.map(anecdote => 
       (anecdote.id === action.payload.id) ? action.payload : anecdote 
      )
    }
  }
})

export default anecdoteSlicer.reducer