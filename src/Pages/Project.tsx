import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createProject, getProject, updateProject } from '../Services/Project'
import { CreateProjectsI, ProjectsI } from '../Types/Project'
import './Project.css'

function Project() {
  const navigate = useNavigate()
  const [project, setProject] = useState<CreateProjectsI>({
    projectName: '',
    description: '',
  })
  const { projectName, description } = project
  const { id } = useParams()

  useEffect(() => {
    if (id !== undefined) {
      getProject(Number(id)).then((project) => {
        setProject(project)
      })
    }
  }, [id])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log('log', event.target.value, [event.target.name])
      const value = event.target.value
      setProject({
        ...project,
        [event.target.name]: value,
      })
    },
    [project],
  )

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      if (id !== undefined) {
        updateProject(project as ProjectsI).then(() => navigate('/'))
      } else {
        createProject(project).then(() => navigate('/'))
      }
    },
    [id, navigate, project],
  )

  return (
    <section id="new-project-section">
      <h1>
        {id
          ? 'Mise à jour du projet'
          : 'Ajout du nouveau projet à la bibliothèque'}
      </h1>
      <form id="creation-form" onSubmit={handleSubmit}>
        <div id="form-project-name" className="label-container">
          <label>Nom du projet</label>
          <input
            onChange={handleChange}
            value={projectName}
            name="projectName"
          />
        </div>
        <div id="form-project-description" className="label-container">
          <label>Description</label>
          <textarea
            rows={10}
            cols={40}
            onChange={handleChange}
            value={description}
            name="description"
          />
        </div>
        {/* Have to study later on imlplementation of the image */}
        {/* <div id="form-project-image" className="label-container">
          <label>Image</label>
          <input type="file" onChange={handleChange} value={img} name="img" />
        </div> */}
        <button id="form-button">
          {id ? 'Mettre à jour le projet' : 'Créer le projet'}
        </button>
      </form>
    </section>
  )
}

export default Project
