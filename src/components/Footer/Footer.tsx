import './Footer.css'
import LinkedIn from '../../Assets/Icons/linkedin.png'
import Github from '../../Assets/Icons/github.png'

function Footer() {
  return (
    <footer id="footer">
      <p>N'hésitez pas à me contacter</p>
      <div id="icon-container">
        <a
          href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-luu-820419124/"
          target={'blank'}
        >
          <img className="link-icon" src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Jeyluu" target={'blank'}>
          <img className="link-icon" src={Github} alt="Github" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
