import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialNav() {
  return (
    <div className='layout-social'>
      <div className='layout-social-container'>
      <a
        className='layout-social-icon'
        href='https://twitter.com/SeanCruick1997'
        target='_blank'
        title="Twitter"
        >
          <FaTwitter />
      </a>

      <a
        className='layout-social-icon'
        href='https://www.facebook.com/SeanCruickshank1997/'
        target='_blank'
        title="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        className='layout-social-icon'
        href='https://www.linkedin.com/in/seancruickshank/'
        target='_blank'
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        className='layout-social-icon'
        href='https://github.com/Sean-Cruickshank'
        target='_blank'
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        className='layout-social-icon'
        href='mailto:seancruickshank2025@gmail.com'
        target='_blank'
        title="Email"
      >
        <MdEmail />
      </a>
      </div>
    </div>
  )
}