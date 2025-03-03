import { FaGithub, FaLinkedin } from "react-icons/fa"
import '../styles/footer-modules.css'
import '../styles/global-css/colorsAndFonts-module.css'
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
                        <p>Cantinho do Café</p>
                    </div>


                    <div id="box_credits">

                    <p className="title_box_footer">Créditos das imagens</p>

                    <a className="credits" href="https://www.pexels.com/pt-br/">Pexels</a>
                    <a className="credits" href="https://pixabay.com/pt/">Pixabay</a>
                    <a className="credits" href="https://br.freepik.com/">FreePik</a>
                    <a className="credits" href="https://unsplash.com/pt-br/">Unsplash</a>


                    </div>

                    <div id="box_icons">

                        <p className="title_box_footer">contato</p>

                        <div id="flex_icons">

                       
                            <a href="https://github.com/Josericardodesouza" target="blank">
                                <FaGithub className="icon_footer" />
                            </a>

                            <a href="www.linkedin.com/in/josé-ricardo-de-souza-034a90317" target="blank">
                                <FaLinkedin className="icon_footer" />
                            </a>
                     
{/* 
                            <FaInstagram className="icon_footer" /> */}
                    
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