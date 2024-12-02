import {useState} from 'react'

import React from 'react'

const ExitTicket = () => {
    const [value, setValue] = useState(false)
    const [num, setNum] = useState(0)

    const toggleValue = () => {
        setValue(!value)
        setNum(num + 1)
    }

    console.log(value)

    console.log(num)
    return (
        <>
        <h2>{(value === false) ? 'False': 'True'}</h2>
        <p>You've clicked {num} times</p>
        <button className='btn' onClick={toggleValue} style={{backgroundColor: (value === false) ? 'red': 'green'}}>Toggle Value</button>
        </>
    )
}

export default ExitTicket