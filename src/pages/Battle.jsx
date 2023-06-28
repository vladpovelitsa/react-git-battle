import {useState} from "react";
import PlayerInput from "../components/Forms/PlayerInput.jsx";
import PlayerPreview from "../components/Cards/PlayerPreview.jsx";
import {Link} from "react-router-dom";
const Battle = () => {
    const [playerData, setPlayerData] = useState({
        playerOneName: "",
        playerTwoName: "",
        playerOneImage: null,
        playerTwoImage: null,
    })
    const handleSubmit = (id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`,
        }))
    }
    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null,
        }))
    }

    return (
        <>
            <div className='row'>
                {
                    playerData.playerOneImage ?
                        <PlayerPreview avatar={playerData.playerOneImage} username={playerData.playerOneName}>
                            <button className='reset' onClick={() => handleReset('playerOne')}>Reset</button>
                        </PlayerPreview>
                        : <PlayerInput label="Player 1" id='playerOne' onSubmit={handleSubmit}/>
                }
                {
                    playerData.playerTwoImage ?
                        <PlayerPreview avatar={playerData.playerTwoImage} username={playerData.playerTwoName}>
                            <button className='reset' onClick={() => handleReset('playerTwo')}>Reset</button>
                        </PlayerPreview>
                        : <PlayerInput label="Player 2" id='playerTwo' onSubmit={handleSubmit}/>
                }


            </div>
            {
                playerData.playerOneImage && playerData.playerTwoImage ?
                    <Link to={{
                        pathname: 'results',
                        search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                    }} className='button'> Battle</Link>
                    : null
            }
        </>


    )
}

export default Battle