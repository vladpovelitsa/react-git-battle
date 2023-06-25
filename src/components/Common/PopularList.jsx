import RepoCard from "../Cards/RepoCard.jsx";

const LangTabs = ({repos}) => {

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => {
                return (
                    <RepoCard key={repo.id} repo={repo} index={index} />
                )
            })}
        </ul>

    )
}

export default LangTabs