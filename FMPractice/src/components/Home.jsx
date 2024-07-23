import React from 'react'
import About from './About'

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={<About/>}>Click Here</button>
    </div>
  )
}

export default Home
