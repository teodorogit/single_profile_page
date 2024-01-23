import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import InformationContainer from './InformationContainer'
import '../styles/components/maincontent.sass'
import ProjectsContainer from './ProjectsContainer'

const MainContent = () => {

  return (
    <main id='main-content'>
      <AboutContainer/>
       <TechnologiesContainer/>
       <ProjectsContainer/>
    </main>
  )
}

export default MainContent