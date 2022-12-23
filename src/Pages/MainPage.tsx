import { memo, useCallback, useState } from 'react'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { useProjects } from '../Hooks/useProjects'
import { ProjectsI } from '../Types/Project'
import './MainPages.css'

function MainPage() {
  const projectsDatas = useProjects()
  const [focusedCard, setFocusedCard] = useState<number>(-1)

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
      <section id="projectSection">
        {projectsDatas.map((value, index) => {
          return (
            <ProjectsSection
              projects={value}
              isFocused={value.id === focusedCard}
              onClick={() => {
                focusedACard(value)
              }}
            />
          )
        })}
      </section>
    </>
  )
}
export default memo(MainPage)
