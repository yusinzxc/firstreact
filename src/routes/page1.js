import React,{ useState } from 'react'

const Page1 = () => {
  const [ click, setClick ] = useState(null)
  const animate = () => {
    setClick(console.log(true))
  }
  return(
    <>
    <h1>Page1</h1>
    <button className="page1-btn" onClick={animate}>Animate</button>
    </>
  )
}
export default Page1;
