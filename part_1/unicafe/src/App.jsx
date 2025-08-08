import { useState } from 'react'

const DisplayTitle = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const DisplayState = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const updateStatistics = () => {
    let newTotal = total + 1
    setTotal(newTotal)
    let newAverage = (good - bad)/newTotal
    setAverage(newAverage)
    let newPositive = (good/newTotal) * 100
    setPositive(newPositive)
  }

  const increaseGood = () => {
    setGood(good + 1)
    updateStatistics()
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    updateStatistics()
  }
  
  const increaseBad = () => {
    setBad(bad + 1)
    updateStatistics()
  }

  console.log(total)
  console.log(average)
  console.log(positive)
  return (
    <div>
      <DisplayTitle text="give feedback"/>
      <Button handleClick={increaseGood} text="Good"/>
      <Button handleClick={increaseNeutral} text="Neutral"/>
      <Button handleClick={increaseBad} text="Bad"/>
      <DisplayTitle text="statistics"/>
      <DisplayState text="Good" value={good}/>
      <DisplayState text="Neutral" value={neutral}/>
      <DisplayState text="Bad" value={bad}/>
      <DisplayState text="All" value={total}/>
      <DisplayState text="Average" value={average}/>
      <DisplayState text="Positive" value={positive+"%"}/>
    </div>
  )
}

export default App