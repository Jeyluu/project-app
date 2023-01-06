import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProject } from '../Services/Project'
import { CreateProjectsI } from '../Types/Project'
import './NewProject.css'

function NewProject() {
  const navigate = useNavigate()
  const [project, setProject] = useState<CreateProjectsI>({
    projectName: '',
    description: '',
    img: '',
  })
  const { projectName, description, img } = project

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
      console.log(project)

      createProject(project).then(() => navigate('/'))
    },
    [navigate, project],
  )

  return (
    <section id="new-project-section">
      <h1>Ajout d'un nouveau projet à la bibliothèque</h1>
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
        <div id="form-project-image" className="label-container">
          <label>Image</label>
          <input type="file" onChange={handleChange} value={img} name="img" />
        </div>
        <button id="form-button">Enregistrer le projet</button>
      </form>
    </section>
  )
}

export default NewProject
