import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

const fetchData = async() => {
  try {
    const res = await fetch("/api");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    setData(data.message)
  } catch (error) {
    setError(`APP.JS ${error.message}`)
}
}  
useEffect(() => {
  fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {error ? error : (!data ? "Loading...": data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
