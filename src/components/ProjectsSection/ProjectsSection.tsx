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
          <div id="stateDiv">
            <span
              id="stateIndication"
              style={{
                backgroundColor:
                  projects.state === 1
                    ? 'orange'
                    : projects.state === 2
                    ? 'green'
                    : 'red',
              }}
            ></span>
            <h3>
              {projects.state === 1
                ? 'In Progress'
                : projects.state === 2
                ? 'Done'
                : 'To be Done'}
            </h3>
          </div>
        </div>
      </>
    )
  }, [
    isFocused,
    onClick,
    projects.description,
    projects.img,
    projects.projectName,
    projects.state,
  ])

  return <>{dataCard}</>
}

export default memo(ProjectSection)
