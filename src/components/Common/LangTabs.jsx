const LangTabs = ({langs, selectedLang, onSetSelectedLanguage}) => {
        console.log(selectedLang)
    return (
        <ul className='languages'>
            {langs.map((language,index) => (
                <li key={index}
                    style={{color: language === selectedLang ? '#d0021b' : '#000'}}
                    onClick={() => onSetSelectedLanguage(language)}
                >
                    {language}
                </li>
            ))}
        </ul>

    )
}

export default LangTabs