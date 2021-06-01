import React from 'react'
import { useHistory } from 'react-router-dom'
const Home = () => {
  let history = useHistory()
  const page1 = () => {
    history.push("/page1")
  }
  return(
    <>
    <h1>Home</h1>
    <button onClick={page1}>Go to page</button>
    </>
  )
}

export default Home;
