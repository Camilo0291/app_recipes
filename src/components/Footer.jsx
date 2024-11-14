import './Footer.css'
import { FaEnvelope , FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='container-footer'>
      <footer className='footer'>
        <span><img src="public/logito-gato-pardo-10.png" alt="" /></span>
        <span>Copyright 2024&copy;. Todos los derechos reservados | Gato Pardo &#174;</span>
        <span className='links-footer'>
          {/* <a href=""><FaFacebook color='#45a0e6' className='icon' />Facebook</a> */}
          <a href=""><FaEnvelope color="#F5F5F5" className='icon-footer' />andresanta1981@gmail.com</a>
          <a href=""><FaPhone color='#F5F5F5' className='icon-footer' />+57 310 515 4524</a>
        </span>
      </footer>
    </div>
  )
}

export default Footer