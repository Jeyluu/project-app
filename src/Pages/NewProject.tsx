import { useState } from 'react'
import { createProjectsI } from '../Types/Project'
import './NewProject.css'

function NewProject() {

  const [articles, setArticles] = useState<createProjectsI>({
    projectName: '',
    description: '',
    img: ''
  });

  

  return (
    <section id="new-project-section">
      <h1>Ajout d'un nouveau projet à la bibliothèque</h1>
      <form id="creation-form">
        <div id="form-project-name" className="label-container">
          <label>Nom du projet</label>
          <input />
        </div>
        <div id="form-project-description" className="label-container">
          <label>Description</label>
          <textarea rows={10} cols={40} />
        </div>
        <div id="form-project-image" className="label-container">
          <label>Image</label>
          <input type="file" />
        </div>
        <button id="form-button" onClick={() => alert('Formulaire transmis')}>
          Enregistrer le projet
        </button>
      </form>
    </section>
  )
}

export default NewProject
