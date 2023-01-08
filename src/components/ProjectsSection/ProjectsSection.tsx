import { memo, useMemo } from 'react'
import { ProjectsI } from '../../Types/Project'
import logo from '../../Assets/logo.svg'
import './ProjectsSection.css'

interface ProjectsSectionI {
  projects: ProjectsI
  isFocused: boolean
  onClick: () => void
}

function ProjectSection(props: ProjectsSectionI) {
  const { projects, isFocused, onClick } = props

  const dataCard = useMemo(() => {
    return (
      <div
        id="card-border"
        className={isFocused ? 'card-focus' : 'card'}
        onClick={onClick}
      >
        <img src={logo} alt={`un-logo`} />
        <div id={isFocused ? 'project-info-focus' : 'card'}>
          <h2>{projects.projectName}</h2>
          <p>{projects.description}</p>
        </div>
      </div>
    )
  }, [isFocused, onClick, projects.description, projects.projectName])

  return <>{dataCard}</>
}

export default memo(ProjectSection)
