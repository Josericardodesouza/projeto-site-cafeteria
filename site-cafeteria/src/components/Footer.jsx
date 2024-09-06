import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import '../styles/footer-modules.css'

function Footer() {
    return (

        <>

         <footer>

         <p>Projeto desenvolvido por &copy; José R. de Souza</p>
         {/* <a>GitHub</a>
         <a>Instagram</a> */}

       

         <div id="icons_footer_box">

         <span className = 'icon_footer'>
             <FaGithub />
         </span>

         <span className = 'icon_footer'>
            <FaLinkedin />
         </span>

         <span className= 'icon_footer'>
            <FaInstagram />
         </span>


         </div>

         </footer>

        </>

    )
}

export default Footer