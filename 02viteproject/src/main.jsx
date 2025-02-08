import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React  from 'react'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
        <h2>This is custom app</h2>
        </div>
    )
}

// const reactElement ={
//     type: 'a',
//     props: {
//         href : 'https://google.com',
//         target: '._blank'
//     },
//     children : 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Click here to visit google</a>
)

//element as  per the react
const anotherUser = "Aman Singh";
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'Click me to visit google', 
    anotherUser
);
createRoot(document.getElementById('root')).
render(
    // < App />
    // anotherElement

     reactElement

)
