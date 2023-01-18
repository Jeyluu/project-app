import './Introduction.css'

interface IntroductionProps {
  img: string
}

function Introduction(props: IntroductionProps) {
  const { img } = props

  return (
    <div id="intro-container">
      <div id="description-container">
        <div id="img-container">
          <img id="presentation-img" src={img} alt="FakeImg" />
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
    </div>
  )
}

export default Introduction
