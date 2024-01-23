import SocialNetworks from './SocialNetworks'
import image_self from '../imgs/matheus-image.svg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {

  return(
   <aside id="sidebar">
      <img src={image_self} alt="imagem_do_dono do Portfolio Matheus Teodoro" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href='https://drive.google.com/file/d/1vwtvRg9Htap3mFqV4DdVlAe5AusPZ7nA/view?usp=sharing' target='_blank' className="btn">Download curriculo</a>
        
    </aside>
  )
}

export default Sidebar
