// This is an example of why we need to use useState and not 

import React from 'react'

const ErrorExample = () => {
    let title = "Random title for a Book"

    const handleClick = () => {
        title = "Why teachers Quit?: A Kuopous and Sameer Story"
        console.log(title)
    }
    
    return (
        <>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>
            Change Title
        </button>
        
        </>
    )
}

export default ErrorExample

/*
This is an error because we are not rerendering the site this will also fail because we do not have a way of preserving the variables between renders

Now that you can 

*/