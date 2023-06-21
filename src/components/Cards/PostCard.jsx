import React from 'react'

class PostCard extends React.Component {
    constructor() {
        super();
    }

    removeItem = () => {
        this.props.onRemoveItem()
    }
    startEditing = () => {
        this.props.onEditItemStarted()
    }

    render() {
        const title = this.props.postInfo.title
        const body = this.props.postInfo.body
        return (


                <article className={'posts__card'}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <button className={'--danger'} onClick={this.removeItem.bind(this)}>
                        &times;
                    </button>
                    <button className={'--warning'} onClick={() => this.setState(this.startEditing.bind(this))}>
                        Edit
                    </button>
                </article>



        )
    }

}

export default PostCard
