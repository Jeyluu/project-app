import { memo, useCallback, useMemo, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Introduction from '../components/Introduction/Introduction'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { useProjects } from '../Hooks/useProjects'
import { ProjectsI } from '../Types/Project'
import LinkedIn from '../Assets/Icons/linkedin.png'
import Github from '../Assets/Icons/github.png'

import './MainPages.css'

const footerIcon = [
  {
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-luu-820419124/',
    icon: LinkedIn,
  },
  {
    alt: 'Github',
    link: 'https://github.com/Jeyluu',
    icon: Github,
  },
]

const copyRight = 'contact'

function MainPage() {
  const projectsDatas = useProjects()
  const [focusedCard, setFocusedCard] = useState<number>(-1)

  const copyRightStyle = useMemo(() => {
    return copyRight.toUpperCase()
  }, [])

  const focusedACard = useCallback(
    (project: ProjectsI) => {
      if (focusedCard === project.id) {
        setFocusedCard(-1)
      } else {
        setFocusedCard(project.id)
      }
    },
    [focusedCard],
  )
  return (
    <>
      <section id="introduction-section">
        <Introduction />
      </section>
      <section id="project-section">
        {projectsDatas.map((value, index) => {
          return (
            <ProjectsSection
              key={index}
              projects={value}
              isFocused={value.id === focusedCard}
              onClick={() => {
                focusedACard(value)
              }}
            />
          )
        })}
      </section>
      <Footer
        filigrane={copyRightStyle}
        copyright={'2023 Jérémy Luu - Développeur Front-End'}
        icons={footerIcon}
      />
    </>
  )
}
export default memo(MainPage)
