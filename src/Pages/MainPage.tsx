import { memo, useCallback, useState } from 'react'
import Introduction from '../components/Introduction/Introduction'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { useProjects } from '../Hooks/useProjects'
import { ProjectsI } from '../Types/Project'
// Swiper-react import
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'
// import required modules
import { EffectCreative } from 'swiper'
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
    </>
  )
}
export default memo(MainPage)
