import {useEffect, useState} from "react";
import {fetchPopularRepos} from "../api/api.jsx";
import LangTabs from "../components/Common/LangTabs.jsx";
import PopularList from "../components/Common/PopularList.jsx";
import PageLoader from "../components/Common/PageLoader.jsx";
import { useSearchParams } from "react-router-dom";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];

const Popular = () => {
    let [searchParams, setSearchParams] = useSearchParams({lang: 'all'});
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const onSetSelectedLanguageHandler = (e) => {
        setSearchParams({lang: e})
    }
    useEffect(() => {
        setLoading(true)
        fetchPopularRepos(searchParams.get('lang'))
            .then((data) => setRepos(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [searchParams.get('lang')])

    useEffect(() => {
        if(error) alert(error)
    }, [error])

    return (
        <div>
            <LangTabs
                langs={languages}
                selectedLang={searchParams.get('lang')}
                onSetSelectedLanguage={onSetSelectedLanguageHandler}
            />

            <PopularList repos={repos} />
            {loading ?
                <PageLoader />
                : null
            }
        </div>

    )
}

export default Popular