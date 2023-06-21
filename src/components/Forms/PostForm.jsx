import React from 'react'

class PostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id:"",
            title:"",
            body:"",
            userId:"",
        }
    }

    titleChangeHandler = (event) => {
        console.log(1)
        this.setState({title: event.target.value})
    }
    bodyChangeHandler = (event) => {
        this.setState({body: event.target.value})

    }
    editItem = () => {
        event.preventDefault()
        this.props.onEditingFinished(this.state)
    }

    componentDidMount() {
        this.setState(
            {
                id: this.props.postInfo.id,
                title: this.props.postInfo.title,
                body: this.props.postInfo.body,
                userId: this.props.postInfo.userId,
            }
        )
    }

    render() {
        return (
            <dialog className={'modal'}>
                <form className={'posts__card'} onSubmit={this.editItem.bind(this)}>
                    <input type="text" value={this.state.title} onChange={ this.titleChangeHandler } required={true}/>
                    <textarea value={this.state.body}  onChange={ this.bodyChangeHandler } name="" id="" cols="30" rows="10"></textarea>
                    <button className={'--ok'} type={'submit'}>
                        Save
                    </button>
                </form>
            </dialog>



        )
    }

}

export default PostForm
