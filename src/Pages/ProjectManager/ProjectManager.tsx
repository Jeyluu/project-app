import { Link } from 'react-router-dom'
import { useProjects } from '../../Hooks/useProjects'

function ProjectManager() {
  const projectsList = useProjects()
  return (
    <section>
      <h1>Gestion des projets</h1>
      <Link to="/create-new-project">
        <button>Créer un projet</button>
      </Link>
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Titre du projet</th>
            <th>Edition du projet</th>
            <th>Suppression</th>
          </tr>
          {projectsList.map((value, index) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.projectName}</td>
                <td>
                  <a href={`/edit-project/${value.id}`}>Modification</a>
                </td>
                <td>Suppression du projet</td>
              </tr>
            )
          })}
        </table>
      </div>
    </section>
  )
}

export default ProjectManager
