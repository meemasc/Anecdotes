import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { likeNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter).toLowerCase()
  const anecdotes = useSelector(state => state.anecdotes)
    .sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter))

  const dispatch = useDispatch()

  const vote = (id) => {
      const anecdote = anecdotes.find(anecdote => anecdote.id === id)
      dispatch(voteAnecdote(id))
      dispatch(likeNotification(anecdote.content))
      setTimeout(() => dispatch(resetNotification()), 5000)
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList