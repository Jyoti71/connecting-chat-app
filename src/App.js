import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        // creating an chat using chat Engine and declare some of its attribute such as height,
        //  projectID,userName and userSecre. and they are case senstive 
       <ChatEngine
            height="100vh"
            projectID="1d3e7ecc-1f7a-4d50-a0eb-1560d1b7a433"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // below is the func to create custom chat feed in in chat app section by reating a component named ChatFeed 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
       />
    )
}

export default App
