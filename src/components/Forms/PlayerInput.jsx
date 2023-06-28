import {memo, useState} from "react";

const PlayerInput = memo(({label, onSubmit, id}) => {
    const [userName, setUserName] = useState('')

    const handleSubmit = () => {
        event.preventDefault()
        onSubmit(id, userName)
    }
    return (
        <form className='column' onSubmit={handleSubmit}>
            <label htmlFor={id} className='header'>{label}</label>
            <input type="text"
                   id={id}
                   autoComplete="off"
                   value={userName}
                   onChange={(event) => {
                       setUserName(event.target.value)
                   }}
                   placeholder='GitHub Username'
            />
            <button className='button' type='submit' disabled={!userName.length}>Submit</button>
        </form>
    )
})

export default PlayerInput