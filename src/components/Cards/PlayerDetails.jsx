const PlayerDetails = ({player}) => {
    console.log(player)
    return (
        <>
            <dl>
                <dt>Name:</dt>
                <dd>{player.name || 'Unknown'}</dd>
                <dt>Company:</dt>
                <dd>{player.company || 'Unknown'}</dd>
                <dt>Location:</dt>
                <dd>{player.location || 'Unknown'}</dd>
                <dt>followers:</dt>
                <dd>{player.followers || 'Unknown'}</dd>
                <dt>following:</dt>
                <dd>{player.following || 'Unknown'}</dd>
                <dt>public repos :</dt>
                <dd>
                    {player.public_repos}
                </dd>
                <dt>blog :</dt>
                <dd>{player.blog ? <a href={player.blog}>Visit blog</a> : 'Unknown'}</dd>

            </dl>
        </>
    )
}

export default PlayerDetails