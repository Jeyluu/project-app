import { memo, useMemo } from 'react'
import { ProjectsI } from '../../Types/Project'
import logo from '../../Assets/logo.svg'
import './ProjectsSection.css'

interface ProjectsSectionI {
  projects: ProjectsI[]
}

function ProjectSection(props: ProjectsSectionI) {
  const { projects } = props

  const dataCard = useMemo(() => {
    return (
      <>
        {projects.map((value, index) => {
          return (
            <div id="cardBorder">
              <img
                src={value.img === '' ? logo : value.img}
                alt={`${value.img}`}
              />
              <h2>{value.projectName}</h2>
              <p>{value.description}</p>
              <div id="stateDiv">
                <span
                  id="stateIndication"
                  style={{
                    backgroundColor:
                      value.state === 1
                        ? 'orange'
                        : value.state === 2
                        ? 'green'
                        : 'red',
                  }}
                ></span>
                <h3>
                  {value.state === 1
                    ? 'In Progress'
                    : value.state === 2
                    ? 'Done'
                    : 'To be Done'}
                </h3>
              </div>
            </div>
          )
        })}
      </>
    )
  }, [projects])

  return (
    <section id="ProjectContainer">
      <h1>Here are different project I worked On</h1>
      <div id="cardContainer">{dataCard}</div>
    </section>
  )
}

export default memo(ProjectSection)
