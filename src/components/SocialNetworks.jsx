import '../styles/components/socialnetworks.sass'

import {FaLinkedinIn,FaGithub,FaInstagram} from 'react-icons/fa';

const socialnetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>,link:'https://www.linkedin.com/in/matheus-teodoro-a901211ba/'},
    {name: "github", icon: <FaGithub/>, link: 'https://github.com/teodorogit'},
    {name: "instagram", icon: <FaInstagram/>, link:'https://www.instagram.com/teodoro_fotografias/'}
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialnetworks.map((element) => (
            <a href={element.link} target='_blank' className='social-btn' id={element.name} key={element.name}>{element.icon}</a>
         

        ))}
      
    </section>
  )
}

export default SocialNetworks
