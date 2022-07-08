import React from "react"
import { useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import './App.css';
 
function App() {
  const [word, setWord] = useState('')
   
  const getPhotoData = () => {
    axios
    .get('https://api.unsplash.com/search/photos?query=cat&client_id=XXXXX')
    .then(res => console.log(res))
  }
 
  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} />
    </div>
  )
}
 
export default App