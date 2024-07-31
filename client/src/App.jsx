import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sendGet = () => {
    const requestOptions = {
      method: 'GET'
    };
  fetch('https://vercel-deploy-test-server-nmu3kvq6d-toms-projects-3a15c38b.vercel.app/')
    .then(response => response.json())
    .then(data => setPostId(data.id));
  }

  const sendPost = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
  fetch('https://vercel-deploy-test-server-nmu3kvq6d-toms-projects-3a15c38b.vercel.app/', requestOptions)
    .then(response => response.json())
    .then(data => setPostId(data.id));
  }

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='buttoner'>
        <button onClick={sendGet} className='get-btn'>
          GET request
        </button>
        <button onClick={sendPost} className='post-btn'>
          POST request
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
