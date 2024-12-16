import { useState, useEffect } from "react";

//By default useEffect runs after every re-render

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("call use-effect")
        if(value > 0){
            document.title=`new Messages (${value})`
        }
    })

    console.log('rendering component')
  return (
    <>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>{setValue(value + 1)}}>Click Me</button>
    </>
  )
}

export default UseEffectBasics