import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'TISHYA JENA' age = {20} img = 'https://i.pinimg.com/736x/17/60/1f/17601fc9a4490ea55fe684e70eb1c036.jpg'/>
      <Card user = 'ISHANEE JENA' age = {25} img = 'https://i.pinimg.com/736x/6c/fe/0a/6cfe0ab6b6ac57a42194b3261d38a749.jpg'/>
      <Card user = 'BUBU SINGHAL' age = {2} img = 'https://i.pinimg.com/736x/dd/ca/8e/ddca8e99d2325e6e574df625424bad49.jpg'/>

    </div>
  ) 
}

export default App
