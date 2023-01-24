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
import Stack, { StackI } from '../components/Stack/Stack'
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
        <Introduction img={FakeImage} />
      </section>
      <section id="stack-section">
        <ul id="stack-name">
          {stack.map((value, index) => {
            return <Stack stacks={value} />
          })}
        </ul>
        <div id="stack-graph">
          <StackGraph
            focusedStackGraph={true}
            onClick={() => console.log('click')}
          />
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
