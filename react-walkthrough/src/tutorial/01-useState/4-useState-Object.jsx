import {useState} from 'react';

const UseStateObject = () => {

    const [person, setPerson] = useState({
        name: 'John',
        age: 30,
        message: 'This is a message'
    })
    // const [name, setName] = useState('peter')

    const changeMessage = () => {
        setPerson({...person, message: "Message changed"})
    }

    return (
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h4>{person.message}</h4>
        <button className="btn" onClick={changeMessage}>
            Change the message
        </button>
        </>
    )
}

export default UseStateObject;