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
            Hello, je suis Jérémy
            <span>
              Passionné, perseverant, un peu geek(beaucoup?). J'ai réalisé une
              reconversion professionnelle dans le web il y a maintenant 2ans.
              Attentif et rigoureux, je saurais m'adapter à tous vos projets ;)
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
