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
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
        </p>
      </div>
    </>
  )
}

export default Introduction
