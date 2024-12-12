import {useState} from 'react'

// short-circuit evaluation AKA Ternary in returns
const ShortCircuit = () => {
    const [text, setText] = useState('Diego')
    const [isError, setIsError] = useState(false)
    const firstValue = text || 'hello world'
    const secondValue = text && 'Hello world'

  return (
    <>
        <h1>{firstValue}</h1>
        <h1>Value : {secondValue}</h1>
        {/* <h1>{ text || 'john doe' }</h1> */}
        <button className="btn" onClick={() => setIsError(!isError)} >Toggle Error</button>
        { isError && <h1>Error...Brain Lost</h1> }
        { isError ? (<p>There is an error pls help</p>): (<div><h2>There is no Error</h2></div>)}
        <button className="btn" onClick={() => setText('')}>Change ME</button>
    </>
  )
}


export default ShortCircuit