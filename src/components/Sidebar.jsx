import SocialNetworks from './SocialNetworks'
import image_self from '../imgs/matheus-image.svg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import resumePDF from '../../../../matheus/CurriculoMatheus01-24.pdf'

const Sidebar = () => {

  return(
   <aside id="sidebar">
      <img src={image_self} alt="imagem_do_dono do Portfolio Matheus Teodoro" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={resumePDF} download='CurriculoMatheus01-24.pdf' className="btn">Download curriculo</a>
        
    </aside>
  )
}

export default Sidebar
