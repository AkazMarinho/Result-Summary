
import style from './App.module.css'
import { Score } from './Components/Score'
import { Summary } from './Components/Summary'

function App() {


  return (
    <div className={style.body}>
     <Score/>
     <Summary />
    </div>
  )
}

export default App
