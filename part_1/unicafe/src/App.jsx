import { useState } from 'react'

const DisplayTitle = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const DisplayState = ({good, neutral, bad}) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <DisplayTitle text="give feedback"/>
      <Button handleClick={increaseGood} text="Good"/>
      <Button handleClick={increaseNeutral} text="Neutral"/>
      <Button handleClick={increaseBad} text="Bad"/>
      <DisplayTitle text="statistics"/>
      <DisplayState good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App