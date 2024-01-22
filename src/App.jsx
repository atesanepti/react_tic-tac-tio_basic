import { useState } from 'react'
import TicTacToe from './Component/TicTacToe';
import cls from "./assets/Style/style.module.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={cls.container}>
     <TicTacToe/> <div></div>
    </div>
  )
}

export default App;
