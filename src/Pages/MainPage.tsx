import { memo, useCallback, useMemo, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Introduction from '../components/Introduction/Introduction'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { useProjects } from '../Hooks/useProjects'
import { ProjectsI } from '../Types/Project'
import LinkedIn from '../Assets/Icons/linkedin.png'
import Github from '../Assets/Icons/github.png'
import FakeImage from '../Assets/Images/FakeProject.png'

import './MainPages.css'
import Stack from '../components/Stack/Stack'
import StackGraph from '../components/StackGraph/StackGraph'

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

const stack = [
  { id: 1, name: 'html' },
  { id: 2, name: 'css' },
  { id: 3, name: 'js' },
  { id: 4, name: 'React' },
]

const copyRight = 'contact'

function MainPage() {
  const projectsDatas = useProjects()
  const [focusedCard, setFocusedCard] = useState<number>(-1)
  const [id, setId] = useState<number>(-1)

  const handleHoverOn = useCallback((id: number) => {
    console.log('Hover on')

    setId(id)
  }, [])
  const handleHoverOff = useCallback((id: number) => {
    console.log('Hover off')
    setId(-1)
  }, [])

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

  const backgroundChanger = useMemo(() => {
    switch (id) {
      case 1:
        return 'rgba(82, 0, 182, 0.8)'
      case 2:
        return 'rgba(255, 0, 0, 0.8)'
      case 3:
        return 'rgba(1, 142, 8, 0.8)'
      case 4:
        return 'rgba(37, 83, 247, 0.8)'

      default:
        return 'rgba(134, 134, 134, 0.616)'
    }
  }, [id])

  return (
    <>
      <section id="introduction-section">
        <Introduction img={FakeImage} />
      </section>
      <section id="stack-section">
        <ul id="stack-name">
          {stack.map((value, index) => {
            return (
              <Stack
                stacks={value}
                hover={value.id === id}
                backgroundColor={backgroundChanger}
                onMouseEnter={() => handleHoverOn(value.id)}
                onMouseLeave={() => handleHoverOff(value.id)}
              />
            )
          })}
        </ul>
        <div id="stack-graph">
          {stack.map((value, index) => {
            return (
              <StackGraph
                hover={value.id === id}
                backgroundColor={backgroundChanger}
                onMouseEnter={() => handleHoverOn(value.id)}
                onMouseLeave={() => handleHoverOff(value.id)}
              />
            )
          })}
        </div>
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
