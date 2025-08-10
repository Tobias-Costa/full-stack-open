import { useState } from 'react'

const DisplayAnecdote = ({anecdote, votes}) => {
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const MostVotedAnecdote = ({anecdotes,votes}) => {
  let maxValue = Math.max(...votes)
  let indexOfLargest = votes.indexOf(maxValue)

  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfLargest]}</p>
      <p>has {votes[indexOfLargest]} votes</p>
    </div>
  )
}
  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const selectRandomAnecdote = () => {
      let randomNumber = Math.floor(Math.random() * anecdotes.length)
      console.log(randomNumber)
      console.log("votes", votes)
      setSelected(randomNumber)
    }
  
  const vote = () => {
    const copy = [ ...votes ]
    copy[selected] += 1
    setVotes(copy)
    console.log("copy", copy)
  }
  
  return (
    <div>
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={vote} text="vote"/>
      <Button handleClick={selectRandomAnecdote} text="next anecdote"/>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App