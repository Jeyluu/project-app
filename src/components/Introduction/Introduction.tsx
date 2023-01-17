import FakeImage from '../../Assets/Images/FakeProject.png'

import './Introduction.css'

function Introduction() {
  return (
    <div id="intro-container">
      <div id="description-container">
        <div id="img-container">
          <img id="presentation-img" src={FakeImage} alt="FakeImg" />
        </div>

        <div id="description-bloc">
          <h1>Présentation</h1>
          <p>
            Hello,
            <span>
              Je suis Jérémy et je suis développeur logiciel front-end. Je suis
              un passionné de technologies,très curieux et soif d'apprendre. Je
              continu à me développer de jour en jour.
            </span>
          </p>
        </div>
      </div>

      <div id="stack">

          <ul id="stack-list">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>

        <div id="stack-container">
          <span className="stack-square"></span>
          <span className="stack-square"></span>
          <span className="stack-square"></span>
        </div>
      </div>
    </div>
  )
}

export default Introduction
