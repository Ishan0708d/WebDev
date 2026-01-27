import { useState } from 'react'

const DisplayMax = (props) => {
	if (props.highestVoteCount === 0) {
		return (
			<div>
				<p>Not voted yet</p>
			</div>
		)
	}
	
	else {
		return (
			<div>
				<h2>Anecdote with most votes</h2>
				<p>{props.anecdotes[props.winnerIndex]}</p>
			</div>
		)
	}
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
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVotes = () => {
	const copy = [...votes]
	copy[selected] += 1
	setVotes(copy)
  }

  const highestVoteCount = Math.max(...votes)
  const winnerIndex = votes.indexOf(highestVoteCount)

  return (
    <div>
		<h2>Anecdote of the day</h2>
		<p>{anecdotes[selected]}</p>
		<p>This anecdote has {votes[selected]} votes</p>
		<button onClick={() => setSelected(selected+1) % anecdotes.length}>next anecdote</button>
		<button onClick={handleVotes}>Vote</button>
		<br></br>
		<DisplayMax highestVoteCount = {highestVoteCount} anecdotes = {anecdotes} winnerIndex = {winnerIndex} />
    </div>
  )
}

export default App
