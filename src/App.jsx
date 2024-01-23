import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'

function App() {

  return (
      <div className="portfolio">
        <h1>Matheus Teodoro</h1>
        <Sidebar/>
        <MainContent/> 
    </div>
  )
}

export default App
