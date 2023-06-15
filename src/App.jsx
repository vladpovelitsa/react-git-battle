import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Stepan',
            age: 25,
            isTextOpen: false,
        }
    }

     changeUser = () => {
        this.setState({name: 'Mykola', age: 30, isTextOpen: !this.state.isTextOpen})
    }
    render(){
        return (
            <>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <div >
                        {this.state.isTextOpen
                            ? <p>Name: {this.state.name}, age: {this.state.age}</p>
                            : null
                        }
                        <button onClick={this.changeUser}>{this.state.isTextOpen ? 'Скрыть' : 'Показать'}</button>
                    </div>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </>
        )
    }

}

export default App
