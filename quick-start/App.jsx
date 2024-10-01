import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile.jsx'
import ShoppingList from './ShoppingList.jsx'

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
    <h1>Counters that update separately</h1>
    <MyButton count={count} onClick={handleClick} />
    <MyButton count={count} onClick={handleClick} />
  </div>
  )
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function Current() {
  return (
    <ShoppingList/>
  )
}