import { useState } from "react";

// Remember the component name must be upperCase 
// Invoke useState inside the function not outside 
// Dont call hooks conditionally


const useStateBasics = () => {

    const [text, setText] = useState("Random Title")

    // Function to change the text
    const handleClick = () => {
        if(text === "Random Title") {
            setText("Hello Idiots!")
        } else if (text === "Hello Idiots!") {
            setText("bruh")
        } else {
            setText("Random Title")
        }
    }
    return (
        <>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>
            Change Title
        </button>
        </>
    )
}

export default useStateBasics;