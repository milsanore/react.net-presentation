import React, { useState } from 'react'

const App = () => {
  // Initialize the counter state to 0
  const [counter, setCounter] = useState(0)

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment!</button>
    </div>
  )
}

export default App
