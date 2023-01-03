import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter).toLowerCase()

  const anecdotes = useSelector(state => state.anecdotes)
    .slice()
    .sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
    .filter(anecdote => {return anecdote.content 
      ? anecdote.content.toLowerCase().includes(filter)
      : false
    })

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList