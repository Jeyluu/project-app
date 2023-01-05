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
      <>
        <div className={isFocused ? 'card-focus' : 'card'} onClick={onClick}>
          <img
            src={projects.img === '' ? logo : projects.img}
            alt={`${projects.img}`}
          />
          <h2>{projects.projectName}</h2>
          <p>{projects.description}</p>
        </div>
      </>
    )
  }, [
    isFocused,
    onClick,
    projects.description,
    projects.img,
    projects.projectName,
  ])

  return <>{dataCard}</>
}

export default memo(ProjectSection)
