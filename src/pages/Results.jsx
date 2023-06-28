import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {fetchPlayerInfo} from "../api/api.jsx";
import axios from "axios";
import PlayerPreview from "../components/Cards/PlayerPreview.jsx";
import PageLoader from "../components/Common/PageLoader.jsx";
import PlayerDetails from "../components/Cards/PlayerDetails.jsx";

const Results = () => {
    const location = useLocation()
    const [playersInfo, setPlayersInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [winner, setWinner] = useState(null)
    const [loser, setLoser] = useState(null)



    useEffect(() => {
        const params = [new URLSearchParams(location.search).get('playerOneName'), new URLSearchParams(location.search).get('playerTwoName')]
        if (params.every(item => item)) {
            setLoading(true)
            axios.all(params.map(param => fetchPlayerInfo(param)))
                .then(data => {
                    setPlayersInfo(data)
                    setLoading(false)
                })
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        } else {
            setError('I haven`t all players login')
        }
    }, [])
    useEffect(() => {
        if(error) alert(error)
    }, [error])

    return (
        <>

            <div className='row'>
                {playersInfo.map(playerInfo => {
                    return (
                        <PlayerPreview key={playerInfo.id} username={playerInfo.login} avatar={playerInfo.avatar_url}>
                            <PlayerDetails player={playerInfo} />
                        </PlayerPreview>
                    )
                })}
            </div>

            {loading ?
                <PageLoader />
                : null
            }
        </>
    )
}

export default Results