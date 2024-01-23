import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(44)999755163</p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='EMAIL-ICON'/>
            <div>
                <h3>Email</h3>
                <p>matheusteoodoro200@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Marialva,PR</p>
            </div>
        </div>
      
    </section>
  )
  
}

export default InformationContainer
