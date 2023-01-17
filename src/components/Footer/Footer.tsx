import './Footer.css'
import LinkedIn from '../../Assets/Icons/linkedin.png'
import Github from '../../Assets/Icons/github.png'

interface FooterProps {
  filigrane?: string
  mainSentence: string
  icons: string[]
}

function Footer() {
  return (
    <footer id="footer">
      <h1>CONTACT</h1>

      <div id="icon-container">
        <a
          href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-luu-820419124/"
          target={'blank'}
        >
          <img className="link-icon" src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Jeyluu" target={'blank'}>
          <img
            id="github-icon"
            className="link-icon"
            src={Github}
            alt="Github"
          />
        </a>
      </div>
      <p>2023 Jérémy Luu - Développeur Front-End</p>
    </footer>
  )
}

export default Footer
