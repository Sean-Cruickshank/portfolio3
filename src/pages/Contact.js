import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="container contact">
      <h1>Contact</h1>
      <p>If you would like to get in touch, I am available on any of the following!</p>

      <div className="contact-card contact-card-email">
          <MdEmail className="contact-logo"/>
          <h2>Email</h2>
          <a className="contact-detail" href='mailto:seancruickshank2023@gmail.com' target='_blank' title="Email">Seancruickshank2023@gmail.com</a>
      </div>

      <div className="contact-card-container">

        <div className="contact-card">
          <FaTwitter className="contact-logo"/>
          <h2>Twitter / X</h2>
          <a className="contact-detail" href='https://twitter.com/SeanCruick1997' target='_blank' title="Email">@SeanCruick1997</a>
        </div>

        <div className="contact-card">
          <FaFacebook className="contact-logo"/>
          <h2>Facebook</h2>
          <a className="contact-detail" href='https://www.facebook.com/SeanCruickshank1997/' target='_blank' title="Email">SeanCruickshank1997</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-logo"/>
          <h2>LinkedIn</h2>
          <a className="contact-detail" href='https://www.linkedin.com/in/seancruickshank/' target='_blank' title="Email">seancruickshank</a>
        </div>

        <div className="contact-card">
        <FaGithub className="contact-logo"/>
        <h2>GitHub</h2>
        <a className="contact-detail" href='https://github.com/Sean-Cruickshank' target='_blank' title="Email">Sean-Cruickshank</a>
        </div>
      </div>
      
      <p>Links can also be found at the top of the page!</p>
    </div>
  )
}