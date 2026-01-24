import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ( {text, value} ) => {
	return (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
	)
}

const Statistics = ({good, bad, neutral}) => {
	const total = good + bad + neutral
	const average = ((good - bad)/total)
	const positive = (good/total)

	if (total === 0) return (
		<div>
			<p>No feedback yet</p>
		</div>
	)
	else return (
	<div>
		<h1>Statistics</h1>
		<table>
			<tbody>
		<StatisticLine text={"good"} value={good} />
		<StatisticLine text={"neutral"} value={neutral} />
		<StatisticLine text={"bad"} value={bad} />
		<StatisticLine text={"total"} value={total} />
		<StatisticLine text={"average"} value={average} />
		<StatisticLine text={"positive"} value={positive} />
			</tbody>
		</table>
	</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    const updatedGood = good+1
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    const updatedNeutral = neutral+1
    setTotal(updatedNeutral + good + bad)
  }

  const handleBad = () => {
    setBad(bad+1)
    const updatedBad = bad+1
    setTotal(updatedBad + neutral + good)
  }

  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={handleGood} text = "good" />
	  <Button handleClick={handleNeutral} text = "neutral" />
	  <Button handleClick={handleBad} text = "bad" />

      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App
