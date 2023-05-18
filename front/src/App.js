import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8081/hello')
            .then(response => response.json())
            .then(data => setMessage(data.message))
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
