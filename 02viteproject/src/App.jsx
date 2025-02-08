import { useState } from 'react'
import Into from "./into";
function App() {
  const username = "Aman Puskar";
  return (
    // <h1>This is vite project</h1>
    <div>
    <Into/>
    <p>This is para</p>
    <p>This is {username}</p>
    </div>
  )
}

export default App
