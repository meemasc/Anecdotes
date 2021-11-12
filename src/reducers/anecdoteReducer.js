import anecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    await anecdoteService.increaseVote(anecdote)
    dispatch({
      type: 'VOTE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {

  switch(action.type) {
    case 'VOTE':
      return state.map(anecdote => {
        if(anecdote.id === action.data.id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1
          }
        }else {
          return anecdote
        }
      })
    
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    
    case 'INIT_NOTES':
      return action.data

    default:
      return state
  }
}

export default anecdoteReducer