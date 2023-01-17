import FakeImage from '../../Assets/Images/FakeProject.png'

import './Introduction.css'

function Introduction() {
  return (
    <>
      <div id="img-container">
        <img id="presentation-img" src={FakeImage} alt="FakeImg" />
      </div>

      <div id="description-bloc">
        <h1>Présentation</h1>
        <p>
          Hello, je suis Jérémy et je suis développeur logiciel front-end. Je
          suis un passionné de technologies,très curieux et soif d'apprendre. Je
          continu à me développer de jour en jour.
        </p>
      </div>
    </>
  )
}

export default Introduction
