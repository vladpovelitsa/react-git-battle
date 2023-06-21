import React from 'react'
import PostCard from "./components/Cards/PostCard.jsx";
import PostForm from "./components/Forms/PostForm.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            isModalOpen: false,
            postToEditId: ''
        }
    }

    fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => this.setState({posts: json}));
    }

    removePostFromArray = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then(() => {
            const postToDeleteIndex = this.state.posts.findIndex(post => post.id === id)
            this.state.posts.splice(postToDeleteIndex, 1)
            this.setState({posts: this.state.posts})
        });
    }

    toggleEditModal(id) {
        this.setState({isModalOpen: true});
        this.setState(() => {
            return {
                postToEditId: this.state.posts.findIndex(item => item.id === id)
            }
        });
    }

    editPost = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                this.setState((prevState) => prevState.posts[prevState.postToEditId] = data)
                this.setState({isModalOpen: false, postToEditId: ''})
            });

    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <>
                <section className={'posts'}>
                    {this.state.posts?.length
                        ? this.state.posts.map(post => <PostCard key={post.id} postInfo={post}
                                                                 onRemoveItem={() => this.removePostFromArray(post.id)}
                                                                 onEditItemStarted={() => this.toggleEditModal(post.id)}/>)
                        : 'There is no posts yet'
                    }
                </section>

                {this.state.isModalOpen ?
                    <PostForm postInfo={this.state.posts[this.state.postToEditId]} onEditingFinished={(data) => {
                        this.editPost(data)
                    }}/> : null}
            </>

        )
    }

}

export default App
