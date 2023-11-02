import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import { FaFileDownload} from 'react-icons/fa'
import { useSelector } from "react-redux";
import CV_Salvatore_Mercurio from '../assets/CV_Salvatore_Mercurio.pdf'

const Contacts = () => {

    const mode = useSelector((state) => state.mainReducer.isdarkMode);

    return(
        <div class="footer">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="https://github.com/Salvo1789" target="_blank" class="nav-link px-2 text-light"><AiFillGithub style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a></li>
      <li class="nav-item"><a href="https://www.linkedin.com/in/salvatore-mercurio-full-stack-web-developer/" target="_blank" class="nav-link px-2"><AiFillLinkedin style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a></li>
      <li class="nav-item"><a href="mailto:salvo.mercurio89@gmail.com" class="nav-link px-2 "><AiOutlineMail style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a></li>
      <li class="nav-item"><a href={CV_Salvatore_Mercurio} download="cv-salvatore-mercurio" class="nav-link px-2 "><FaFileDownload style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a></li>
    </ul>
    {/* <p class="text-center text-muted">© 2022 Company, Inc</p> */}
  </footer>
</div>
    )
}

export default Contacts;