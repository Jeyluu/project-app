import { Link, useNavigate } from 'react-router-dom'
import { useProjects } from '../../Hooks/useProjects'
import './ProjectManager.css'
import DeleteIcon from '../../Assets/Icons/crossDeleteIcon.png'
import { deleteProject } from '../../Services/Project'
import { useState } from 'react'
import { ProjectsI } from '../../Types/Project'

function ProjectManager() {
  const projectsList = useProjects()
  const navigate = useNavigate()

  return (
    <section id="project-management-section">
      <h1>Gestion des projets</h1>
      <Link to="/create-new-project">
        <button>Créer un projet</button>
      </Link>
      <table id="project-board">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titre du projet</th>
            <th>Edition du projet</th>
            <th>Suppression</th>
          </tr>
        </thead>
        <tbody>
          {projectsList.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.projectName}</td>
                <td>
                  <a href={`/edit-project/${value.id}`}>Modification</a>
                </td>
                <td>
                  <img
                    id="delete-project-button"
                    src={DeleteIcon}
                    alt="delete"
                    onClick={() => {
                      deleteProject(value.id).then(() => {
                        navigate('/')
                      })
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default ProjectManager
