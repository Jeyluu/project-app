import { useMemo } from 'react'
import './Footer.css'

export interface Icon {
  alt: string
  link: string
  icon: string
}

interface FooterProps {
  filigrane?: string
  copyright: string
  icons: Icon[]
}

function Footer(props: FooterProps) {
  const { filigrane, copyright, icons } = props



  const iconMap = useMemo(() => {
    return (
      <>
        {icons.map((value, index) => {
          return (
            <a href={value.link} target={'blank'} key={index}>
              <img className="link-icon" src={value.icon} alt={value.alt} />
            </a>
          )
        })}
      </>
    )
  }, [icons])
  return (
    <footer id="footer">
      <h1>{filigrane}</h1>
      <div id="icon-container">{iconMap}</div>
      <p>{copyright}</p>
    </footer>
  )
}

export default Footer
