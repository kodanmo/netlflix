import React from 'react'
import "./App.css"
import {action,original,comedy,horror} from './Url'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Post from './Components/Post/Post'

function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Post url = {original} title = 'Netflix Originals' />
        <Post url = {action}   title = 'Action'  small />
        <Post url = {comedy}   title = 'Comedy'  small />
        <Post url = {horror}   title = 'Horror'  small />
    </div>
  )
}

export default App