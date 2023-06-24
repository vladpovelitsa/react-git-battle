import React from 'react'
import PostCard from "./components/Cards/PostCard.jsx";
import PostForm from "./components/Forms/PostForm.jsx";
import LoginForm from "./components/Forms/LoginForm.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            isEditModalOpen: false,
            postToEditId: '',

            isLoginModalOpen: false,
            user: null,
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
        this.setState({isEditModalOpen: true});
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
                this.setState({isEditModalOpen: false, postToEditId: ''})
            });
    }

    loginUser(userData) {
        this.setState({isLoginModalOpen: false, user: userData})
    }

    showUserNameOrLoginBtn() {
        return !this.state.user
            ? <button className={'--ok'} onClick={() => this.setState({isLoginModalOpen: true})}>Log in </button>
            : this.state.user?.name


    }

    componentDidMount() {
        this.fetchPosts()
    }


    render() {
        return (
            <>
                <header className={'header'}>
                    {this.showUserNameOrLoginBtn()}
                </header>
                <section className={'posts'}>
                    {this.state.posts?.length
                        ? this.state.posts.map(post => <PostCard key={post.id} postInfo={post}
                                                                 onRemoveItem={() => this.removePostFromArray(post.id)}
                                                                 onEditItemStarted={() => this.toggleEditModal(post.id)}/>)
                        : 'There is no posts yet'
                    }
                </section>

                {this.state.isEditModalOpen ?
                    <PostForm postInfo={this.state.posts[this.state.postToEditId]} onEditingFinished={(data) => {
                        this.editPost(data)
                    }}/> : null}
                {this.state.isLoginModalOpen ?
                    <LoginForm
                        onLoginUser={(data) => {
                            this.loginUser(data)
                        }}/> : null}
            </>

        )
    }

}

export default App
