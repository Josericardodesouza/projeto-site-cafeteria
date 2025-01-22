import { FaCoffee, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import '../styles/footer-modules.css'
import '../styles/global-css/colorsAndFonts-module.css'

import logo from '../assets/images/coffee-shop-svgrepo-com.svg'
import { SiCoffeescript } from "react-icons/si"



function Footer() {
    return (

        <>

            <footer>


                <div id='box_top_name'>
                    <p className="title_box_footer">Projeto desenvolvido por </p>
                    <p> 2025 &copy; José R. de Souza</p>
                </div>



                <div id="conteiner_footer">
                    
                    <div id="box_img">
                        <SiCoffeescript />
                        <p>Cafeteria</p>
                    </div>


                    <div id="box_credits">

                    <p className="title_box_footer">Créditos das imagens</p>

                    <a className="credits">Pexels</a>
                    <a className="credits">Pixabay</a>
                    <a className="credits">FreePik</a>
                    <a className="credits">Unsplash</a>


                    </div>

                    <div id="box_icons">

                        <p className="title_box_footer">contato</p>

                        <div id="flex_icons">

                       
                            <FaGithub className="icon_footer" />
                            <FaLinkedin className="icon_footer" />
                     

                            <FaInstagram className="icon_footer" />
                    
                        </div>

                   

                 


                    </div>





                </div>


                <div id="conteiner2_footer">


                    <div id="icons_footer_box">

                   


                    </div>


                </div>

                <div id="conteiner3_footer">

                </div>


                {/* <a>GitHub</a>
         <a>Instagram</a> */}




            </footer>

        </>

    )
}

export default Footer