import React from 'react'
import Validation from "../../services/Validation.js";
class PostForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            pass: "",
            error: '',
        }
    }

    inputChangeHandler = (event) => {
        let error = Validation(event.target)
        this.setState({errorMessage: error})
        this.setState(() => {return {

            [event.target.name]: event.target.value
        }})

    }
    loginUser = () => {
        event.preventDefault()
        this.props.onLoginUser({name: `${this.state.firstName} `, email: this.state.email})
    }

    render() {
        return (
            <dialog className={'modal'}>
                <form className={'posts__card'} onSubmit={this.loginUser.bind(this)}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name={'firstName'}
                        value={this.state.firstName}
                        onChange={this.inputChangeHandler}
                        required={true}
                        placeholder={'Enter your first name'}
                        data-validation-type={'name'}
                    />
                    <input
                        type="text"
                        name={'lastName'}
                        value={this.state.lastName}
                        onChange={this.inputChangeHandler}
                        required={true}
                        placeholder={'Enter your last name'}
                        data-validation-type={'name'}
                    />
                    <input
                        type="email"
                        name={'email'}
                        value={this.state.email}
                        onChange={this.inputChangeHandler}
                        required={true}
                        placeholder={'Enter your email'}
                        data-validation-type={'email'}
                    />
                    <input
                        type="password"
                        name={'pass'}
                        value={this.state.pass}
                        onChange={this.inputChangeHandler}
                        required={true}
                        placeholder={'Enter your password'}
                        data-validation-type={'pass'}
                    />
                    {
                        this.state.errorMessage
                            ? this.state.errorMessage
                            : <button className={'--ok'} type={'submit'}>
                                Log in
                              </button>
                    }

                </form>
            </dialog>
        )
    }
}

export default PostForm
