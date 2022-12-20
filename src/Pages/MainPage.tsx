import { memo } from 'react'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { useProjects } from '../Hooks/useProjects'


function MainPage() {
  const projectsDatas = useProjects()
  return (
    <>
      <ProjectsSection projects={projectsDatas} />
    </>
  )
}
export default memo(MainPage)
