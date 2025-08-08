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

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({obj}) => {
  console.log(obj)

  if (obj.total === 0) {
    return (
      <div>
        <DisplayTitle text="statistics"/>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <DisplayTitle text="statistics"/>
      <table>
        <tbody>
          <StatisticsLine text="good" value={obj.good}/>
          <StatisticsLine text="neutral" value={obj.neutral}/>
          <StatisticsLine text="bad" value={obj.bad}/>
          <StatisticsLine text="total" value={obj.total}/>
          <StatisticsLine text="average" value={obj.average}/>
          <StatisticsLine text="positive" value={obj.positive+"%"}/>
        </tbody>
      </table>
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

  const updateStatistics = (newGood, newBad) => {
    let newTotal = total + 1
    let newAverage = (newGood - newBad)/newTotal
    let newPositive = (newGood/newTotal) * 100
    setTotal(newTotal)
    setAverage(newAverage)
    setPositive(newPositive)
  }

  const increaseGood = () => {
    let newGood = good + 1
    setGood(newGood)
    updateStatistics(newGood, bad)
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    updateStatistics(good, bad)
  }
  
  const increaseBad = () => {
    let newBad = bad + 1
    setBad(newBad)
    updateStatistics(good, newBad)
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
      <Statistics obj={{good:good, neutral:neutral, bad:bad, total:total, average:average, positive:positive}}/>
    </div>
  )
}

export default App