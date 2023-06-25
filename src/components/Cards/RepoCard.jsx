const LangTabs = ({repo, index}) => {

    return (

        <li className='popular-item'>
            <div className='popular-rank'>
                {index + 1}
            </div>
            <ul className='space-list-items'>
                <li>
                    <img className='avatar' src={repo.owner.avatar_url} alt="avatar"/>
                </li>
                <li>
                    <a href={repo.html_url} target='_blank'>
                        {repo.name}
                    </a>
                </li>
                <li>
                    {repo.owner.login}
                </li>
                <li>
                    {repo.stargazers_count} start
                </li>
            </ul>
        </li>


    )
}

export default LangTabs