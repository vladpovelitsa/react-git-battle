import {memo} from "react";
const PlayerPreview = memo(({avatar, username, children}) => {
    return (
        <div className='column' >
            <img src={avatar} alt="avatar" className='avatar' />
            <h3>
                {username}
            </h3>
            {children}
        </div>
    )
})

export default PlayerPreview